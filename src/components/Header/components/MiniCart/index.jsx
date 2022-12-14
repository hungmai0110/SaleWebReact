import React from "react";
import "./index.scss";
import OverlayScreen from "../OverlayScreen/index";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatMoney } from "utils/utils";

function MiniCart({ setIsShowMiniCart }) {
  const productsCart = useSelector((state) => state.cart.cartItems);

  // Tính tổng tiền
  const totalMoneyProductsCart = productsCart.reduce((total, p) => {
    return total + p.price * p.count;
  }, 0);

  return (
    <>
      <OverlayScreen onClick={() => setIsShowMiniCart(false)} />
      <div id="mini-cart">
        <div className="mini-cart-container position-relative">
          <h5 className="text-center">GIỎ HÀNG</h5>
          <p className="fst-italic message">Không có sản phẩm trong giỏ hàng</p>
          <span
            className="close-pop-up"
            onClick={() => setIsShowMiniCart(false)}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
          <hr />

          <div className="list-cart-products">
            {productsCart.map((product) => (
              <div
                key={product.id}
                className="mini-cart-product d-flex justify-content-between position-relative"
              >
                <div className="d-flex">
                  <div className="mini-cart-product-image me-3">
                    <img src={product.image} alt="bao da ip 7" />
                  </div>
                  <div className="mini-cart-product-content">
                    <p className="mb-2">{product.name}</p>
                    <div className="mini-cart-data d-flex justify-content-between">
                      <div className="change-count d-flex align-items-center">
                        <span className="border d-inline-block me-3">
                          <span className="py-1 px-3 border-end d-inline-block fw-bold btn-minus-count">
                            -
                          </span>
                          <span className="py-1 px-3 d-inline-block fw-bold count">
                            {product.count}
                          </span>
                          <span className="py-1 px-3 border-start d-inline-block fw-bold btn-plus-count">
                            +
                          </span>
                        </span>
                      </div>
                    </div>
                    <span className="delete-product">
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </div>
                </div>
                <p className="text-danger d-flex align-items-center">
                  {formatMoney(product.price)}
                </p>
              </div>
            ))}
          </div>

          <div className="tottal-money d-flex justify-content-between">
            <p>TỔNG TIỀN</p>
            <p className="text-danger">{formatMoney(totalMoneyProductsCart)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <NavLink to="gio-hang">
              <button className="btn-view-shopping-cart">XEM GIỎ HÀNG</button>
            </NavLink>
            <NavLink to="thanh-toan">
              <button className="btn-payment">THANH TOÁN</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniCart;
