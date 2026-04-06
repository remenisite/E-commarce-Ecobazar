const cartSchema = require("../models/cartSchema");
const Order = require("../models/orderSchema");
const { responseHandler } = require("../services/responseHandler");
const stripe = require("stripe")(process.env.STRIPE_SEC);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;


// ================= CHECKOUT =================
const checkOut = async (req, res) => {
  try {
    const { cartID, shippingAddress, paymentMethod } = req.body;
    const OrderNum = `RHA-${Date.now()}`;

    if (!cartID)
      return responseHandler.error(res, 400, "cart id is required");

    if (!shippingAddress)
      return responseHandler.error(res, 400, "shipping address is required");

    if (!paymentMethod)
      return responseHandler.error(res, 400, "payment method is required");

    const cartData = await cartSchema.findById(cartID);

    if (!cartData)
      return responseHandler.error(res, 404, "cart not found");

    // total price calculate
    const totalPrice = cartData.items.reduce(
      (total, item) => total + item.subtotal,
      0
    );

    const orderData = new Order({
      user: req.user._id,
      orderItems: cartData.items,
      shippingAddress: {
        fullName: shippingAddress.fullName,
        address: shippingAddress.address,
        phone: shippingAddress.phone,
      },
      paymentMethod,
      totalPrice,
      OrderNum,
      deliveryCost: 120,
    });

    await orderData.save();

    // delete cart
    await cartSchema.findByIdAndDelete(cartID);

    // ================= COD =================
    if (paymentMethod === "COD") {
      return responseHandler.success(
        res,
        200,
        "Order placed successfully"
      );
    }

    // ================= STRIPE =================
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: cartData.items.map((item) => ({
        price_data: {
          currency: "bdt",
          product_data: {
            name: item.name || "Product",
            description: item.description || "",
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),

      customer_email: req.user.email,

      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/error`,

      metadata: {
        orderId: orderData._id.toString(),
      },
    });

    return res.redirect(303, session.url);
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, 500, "Internal server error");
  }
};


// ================= WEBHOOK =================
const webhook = async (req, res) => {
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      endpointSecret
    );
  } catch (err) {
    return responseHandler.error(
      res,
      400,
      `Webhook Error: ${err.message}`
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    try {
      if (!session.metadata?.orderId) {
        return responseHandler.error(res, 400, "No orderId found");
      }

      await Order.findByIdAndUpdate(
        session.metadata.orderId,
        {
          paymentStatus: "paid", // ⚠️ fixed (see note below)
        },
        { new: true }
      );
    } catch (error) {
      return responseHandler.error(
        res,
        400,
        `Webhook Error: ${error.message}`
      );
    }
  }

  console.log("event received", event);

  return responseHandler.success(res, 200, "Webhook received");
};

module.exports = { checkOut, webhook };