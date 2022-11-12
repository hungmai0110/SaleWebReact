import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "image/logo.png";
import SearchPopUp from "./components/SearchPopUp/index";
import UserPopUP from "./components/UserPopUP/index";
import MiniCart from "./components/MiniCart/index";

function Header() {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [isShowUser, setIsShowUser] = useState(false);
  const [isShowMiniCart, setIsShowMiniCart] = useState(false);

  return (
    <header>
      <div className="header-infor d-flex justify-content-between text-white">
        <p>LUD.VN | Chuyên thiết kế & cung cấp các sản phẩm thủ công về Da</p>
        <div className="header-contact d-flex justify-content-between">
          <div className="phone d-flex">
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            <p>0966516228</p>
          </div>
          <div className="email d-flex">
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
            <p>support@lud.vn</p>
          </div>
        </div>
      </div>
      <div className="header-navbar d-flex justify-content-between align-items-center">
        <span className="menu-icon">
          <i className="fa-solid fa-bars"></i>
        </span>

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className="list-menu d-flex align-items-center justify-content-between">
          <li>
            <NavLink to="/">TRANG CHỦ</NavLink>
          </li>
          <li>
            <NavLink to="/gioi-thieu">GIỚI THIỆU</NavLink>
          </li>
          <li className="products">
            <NavLink to="/san-pham">
              SẢN PHẨM
              <span>
                <i className="fa-solid fa-caret-down ms-1"></i>
              </span>
            </NavLink>
            <ul className="type-products">
              <li>
                <a href="./main-page/shop.html#vidanam">Ví Da Nam</a>
              </li>
              <li>
                <a href="./main-page/shop.html#vidanu">Ví Da Nữ</a>
              </li>
              <li>
                <a href="./main-page/shop.html#daydadongho">Dây Da Đồng Hồ</a>
              </li>
              <li>
                <a href="./main-page/shop.html#tuidacapda">Túi Da - Cặp Da</a>
              </li>
              <li>
                <a href="./main-page/shop.html#thatlung">Thắt Lưng</a>
              </li>
              <li>
                <a href="./main-page/shop.html#phukien">Phụ Kiện</a>
              </li>
              <li>
                <a href="./main-page/shop.html#cacloaibaoda">Các Loại Bao Da</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/tin-tuc">TIN TỨC</NavLink>
          </li>
          <li>
            <NavLink to="/lien-he">LIÊN HỆ</NavLink>
          </li>
        </ul>

        <div className="icon-menu d-flex align-items-center justify-content-between">
          <span
            className="seach-product"
            onClick={() => setIsShowSearch(!isShowSearch)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span className="user" onClick={() => setIsShowUser(!isShowUser)}>
            <i className="fa-solid fa-circle-user"></i>
          </span>
          <div className="cart">
            <span onClick={() => setIsShowMiniCart(!isShowMiniCart)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="cart-count border rounded-2 px-1">
              <p>2</p>
            </span>
          </div>
        </div>
      </div>

      {/* Hiển thị popup */}
      {isShowSearch && <SearchPopUp setIsShowSearch={setIsShowSearch} />}
      {isShowUser && <UserPopUP setIsShowUser={setIsShowUser} />}
      {isShowMiniCart && <MiniCart setIsShowMiniCart={setIsShowMiniCart} />}
    </header>
  );
}

export default Header;
