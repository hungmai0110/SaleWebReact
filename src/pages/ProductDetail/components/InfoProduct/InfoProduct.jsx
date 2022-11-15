import React from "react";
import { formatMoney } from "utils/utils";

function InfoProduct({ productItem }) {
  return (
    <div className="col-lg-6">
      <div className="product-infor">
        <h3>{productItem.name}</h3>
        <span className="product-status d-flex">
          Tình trạng:
          <p className="text-danger mx-2 mb-1">Còn hàng</p>
        </span>
        <div className="product-price d-flex align-items-center">
          <h4 className="text-danger">
            {formatMoney(productItem.promo_price)}
          </h4>
          <p className="initial-price text-decoration-line-through mx-3">
            {formatMoney(productItem.price)}
          </p>
          <div className="discount">
            <p className="text-white">{productItem.discount}</p>
          </div>
        </div>
        <span className="saving-money d-flex">
          (Tiết kiệm
          <p className="text-danger mx-1">
            {formatMoney(productItem.price - productItem.promo_price)}
          </p>
          )
        </span>
        <div className="promo-content">
          <div className="promo-content-title d-flex text-danger">
            <span>
              <i className="fa-solid fa-gift me-3"></i>
            </span>
            <p>KHUYẾN MÃI - ƯU ĐÃI</p>
          </div>
          <ul className="promo-content-container">
            <li>- Đồng giá Ship toàn quốc 25.000đ</li>
            <li>- Miễn phí Ship cho đơn hàng từ 1.000.000đ</li>
            <li>- Đổi trả trong 30 ngày nếu sản phẩm lỗi</li>
          </ul>
        </div>
        <div className="btn d-flex align-items-center mb-4">
          <span className="border d-inline-block me-3">
            <span className="py-2 px-3 border-end d-inline-block fw-bold btn-minus-count">
              -
            </span>
            <span className="py-2 px-3 d-inline-block fw-bold count">1</span>
            <span className="py-2 px-3 border-start d-inline-block fw-bold btn-plus-count">
              +
            </span>
          </span>
          <button className="btn border py-2 mx-3 rounded-0 btn-add-to-cart">
            Thêm vào giỏ hàng
          </button>
          <button className="btn border btn-dark py-2 rounded-0 btn-buy">
            Mua ngay
          </button>
        </div>
        <div className="description">
          <h5>Mô tả sản phẩm</h5>
          <hr />
          <p>Kích thước: 20 x 11 x 5 (cm)</p>
          <p>Chất liệu: Da bò sáp</p>
          <p>
            Chất liệu da bò sáp bền bỉ, đẹp dần theo thời gian sử dụng. Lớp lót
            vải dày dặn, sản phẩm có móc cầm tay tiện lợi Phù hợp cả nam và nữ
            sử dụng. Một sản phẩm cần thiết với công năng sử dụng tuyệt vời,
            thời trang
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
