// components/SaleProducts.jsx
import { FaStar } from "react-icons/fa";
import SaleCom from "../saleProducts/SaleCom";

export default function SaleProducts() {


  return (
    <>
    <div className="w-[312px]">

          <h2 className="text-lg font-semibold mb-4">Sale Products</h2>

    <div>
      <SaleCom />
      <SaleCom />
      <SaleCom />
    </div>

    </div>
    </>
  );
}
