import React from "react";
import { Link } from "react-router-dom";
import "./Shop.scss";
import Filter from "./components/Filter/index";
import Result from "./components/Result/index";

function Shop() {
  return (
    <>
      {/* 1. Đường dẫn  */}
      <div id="path">
        <div className="path-container d-flex align-items-center">
          <Link to="/">Trang chủ</Link>
          <span>
            <i className="fa-solid fa-angles-right mx-2"></i>
          </span>
          <p>Sản phẩm</p>
        </div>
      </div>

      {/* 2. Nội dung */}
      <div className="shop-container">
        {/* Icon lọc  */}
        <div className="icon-filter">
          <span>
            <i className="fa-solid fa-filter"></i>
          </span>
        </div>

        <div className="row">
          {/* 2.1 Lọc  */}
          <Filter />
          {/* 2.2 Kết quả lọc sản phẩm  */}
          <Result />
        </div>
      </div>
    </>
  );
}

export default Shop;
