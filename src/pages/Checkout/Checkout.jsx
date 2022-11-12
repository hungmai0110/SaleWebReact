import React from "react";
import { Link } from "react-router-dom";
import ShipmentDetail from "./components/ShipmentDetail/ShipmentDetail";
import YourOrder from "./components/YourOrder/YourOrder";
import"./Checkout.scss"

function Checkout() {
  return (
    <>
      {/*  1. Đường dẫn  */}
      <div id="path">
        <div className="path-container d-flex align-items-center">
          <Link to="./">Trang chủ</Link>
          <span>
            <i className="fa-solid fa-angles-right mx-2"></i>
          </span>
          <p>Thông tin giao hàng</p>
        </div>
      </div>

      {/*  2. Nội dung trang  */}
      <div className="payment-container">
        <div className="row">
          {/*  Thông tin giao hàng  */}
          <ShipmentDetail />
          {/*  Đơn hàng của bạn  */}
          <YourOrder />
        </div>
      </div>
    </>
  );
}

export default Checkout;
