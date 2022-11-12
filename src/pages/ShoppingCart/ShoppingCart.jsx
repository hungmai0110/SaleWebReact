import React from "react";
import OrderInfo from "./components/OrderInfo/OrderInfo";
import SelectedProductsInfo from "./components/SelectedProductsInfo/SelectedProductsInfo";
import "./ShoppingCart.scss";
import { Link } from "react-router-dom";

function ShoppingCart() {
  return (
    <>
      {/*  1. Đường dẫn */}
      <div id="path">
        <div class="path-container d-flex align-items-center">
          <Link href="/">Trang chủ</Link>
          <span>
            <i class="fa-solid fa-angles-right mx-2"></i>
          </span>
          <p>Giỏ hàng</p>
        </div>
      </div>

      {/*  Nội dung */}
      <div id="shopping-cart-container">
        <div class="row">
          {/*  Thông tin sản phẩm */}
          <SelectedProductsInfo />
          {/* Thông tin đơn hàng */}
          <OrderInfo />
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
