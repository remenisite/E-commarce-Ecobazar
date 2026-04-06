const cartSchema = require("../models/cartSchema");
const productSchema = require("../models/productSchema");
const { responseHandler } = require("../services/responseHandler");


// ================= ADD TO CART =================
const AddToCart = async (req, res) => {
  try {
    const { productId, sku, Quantity } = req.body;

    if (!productId || !sku || !Quantity) {
      return responseHandler.error(res, 400, "Invalid Request");
    }

    const product = await productSchema.findById(productId);

    if (!product) {
      return responseHandler.error(res, 404, "Product not found");
    }

    const existingCart = await cartSchema.findOne({
      user: req.user._id,
    });

    const discountAmount =
      (product.price * product.discountPercentage) / 100;

    const discountedPrice = product.price - discountAmount;

    const subtotal = discountedPrice * Quantity;

    // ================= EXISTING CART =================
    if (existingCart) {
      const alreadyExists = existingCart.items.find(
        (item) => item.sku === sku
      );

      if (alreadyExists) {
        return responseHandler.error(
          res,
          400,
          "Product already exists in cart"
        );
      }

      existingCart.items.push({
        product: productId,
        sku,
        Quantity,
        subtotal,
      });

      await existingCart.save();

      return responseHandler.success(
        res,
        200,
        "Product added to cart"
      );
    }

    // ================= NEW CART =================
    await cartSchema.create({
      user: req.user._id,
      items: [
        {
          product: productId,
          sku,
          Quantity,
          subtotal,
        },
      ],
    });

    return responseHandler.success(
      res,
      200,
      "Product added to cart"
    );
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, 500, "Server Error");
  }
};


// ================= GET USER CART =================
const getUserCart = async (req, res) => {
  try {
    const cart = await cartSchema.findOne({
      user: req.user._id,
    });

    return responseHandler.success(
      res,
      200,
      "Cart fetched successfully",
      cart
    );
  } catch (error) {
    return responseHandler.error(res, 500, "Server Error");
  }
};


// ================= UPDATE CART =================
const updateCart = async (req, res) => {
  try {
    const { productId, itemId, Quantity } = req.body;

    if (!productId || !itemId || !Quantity) {
      return responseHandler.error(res, 400, "Invalid Request");
    }

    if (Quantity < 1) {
      return responseHandler.error(
        res,
        400,
        "Minimum quantity is 1"
      );
    }

    const productData = await productSchema.findById(productId);

    if (!productData) {
      return responseHandler.error(res, 404, "Product not found");
    }

    const discountAmount =
      (productData.price * productData.discountPercentage) / 100;

    const discountedPrice = productData.price - discountAmount;

    const subtotal = discountedPrice * Quantity;

    const cart = await cartSchema.findOneAndUpdate(
      {
        user: req.user._id,
        "items._id": itemId,
      },
      {
        $set: {
          "items.$.Quantity": Quantity,
          "items.$.subtotal": subtotal,
        },
      },
      { new: true }
    );

    if (!cart) {
      return responseHandler.error(res, 404, "Cart item not found");
    }

    return responseHandler.success(
      res,
      200,
      "Cart updated successfully",
      cart
    );
  } catch (error) {
    return responseHandler.error(res, 500, "Server Error");
  }
};


// ================= REMOVE CART ITEM =================
const removeCart = async (req, res) => {
  try {
    const { itemId } = req.body;

    if (!itemId) {
      return responseHandler.error(res, 400, "Invalid Request");
    }

    const cart = await cartSchema.findOneAndUpdate(
      {
        user: req.user._id,
      },
      {
        $pull: {
          items: { _id: itemId },
        },
      },
      { new: true }
    );

    if (!cart) {
      return responseHandler.error(res, 404, "Cart not found");
    }

    return responseHandler.success(
      res,
      200,
      "Item removed successfully",
      cart
    );
  } catch (error) {
    return responseHandler.error(res, 500, "Server Error");
  }
};

module.exports = {
  AddToCart,
  getUserCart,
  updateCart,
  removeCart,
};