import React from "react";
import ImageProduct from "./components/ImageProduct/ImageProduct";
import InfoProduct from "./components/InfoProduct/InfoProduct";
import "./ProductDetail.scss";
import { Link } from "react-router-dom";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

function ProductDetail() {
  return (
    <>
      {/* < 1. Đường dẫn */}
      <div id="path">
        <div className="path-container d-flex align-items-center">
          <Link to="./">Trang chủ</Link>
          <span>
            <i className="fa-solid fa-angles-right mx-2"></i>
          </span>
          <p>Sản phẩm</p>
        </div>
      </div>

      {/* < 2. Chi tiết sản phẩm */}
      <div id="detail-product">
        <div className="detail-product-container">
          <div className="row">
            {/* < Ảnh sản phẩm */}
            <ImageProduct />
            {/* < Thông tin sản phẩm */}
            <InfoProduct />
          </div>
        </div>
      </div>
      {/* < 3. Sản phẩm liên quan  */}
      <RelatedProducts />
    </>
  );
}

export default ProductDetail;
