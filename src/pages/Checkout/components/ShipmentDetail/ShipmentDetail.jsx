import React from "react";
import { Link } from "react-router-dom";

function ShipmentDetail() {
  return (
    <div className="col-lg-6">
      <div className="infor-delivery">
        <h5>THÔNG TIN GIAO HÀNG</h5>
        <span>
          Bạn đã có tài khoản chưa?
          <p className="d-inline-block">Đăng nhập</p>
        </span>
        <ul className="form-fill">
          <li>
            <input type="text" placeholder="Họ và tên" />
          </li>
          <li className="d-flex justify-content-between">
            <input type="email" className="email" placeholder="Email" />
            <input type="text" className="phone" placeholder="Số điện thoại" />
          </li>
          <li>
            <select
              className="form-select form-select-sm mb-3"
              id="city"
              aria-label=".form-select-sm"
            >
              <option value="" selected>
                Chọn tỉnh thành
              </option>
            </select>

            <select
              className="form-select form-select-sm mb-3"
              id="district"
              aria-label=".form-select-sm"
            >
              <option value="" selected>
                Chọn quận huyện
              </option>
            </select>

            <select
              className="form-select form-select-sm"
              id="ward"
              aria-label=".form-select-sm"
            >
              <option value="" selected>
                Chọn phường xã
              </option>
            </select>
          </li>

          <li>
            <input type="email" placeholder="Địa chỉ chi tiết" />
          </li>
          <li>
            <textarea placeholder="Ghi chú: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
          </li>
        </ul>
        <div className="d-flex justify-content-between">
          <Link to="..san-pham">
            <span>
              <i className="fa-solid fa-rotate-left me-2"></i>Tiếp tục mua hàng
            </span>
          </Link>
          <button className="pay-now my-3">ĐẶT HÀNG</button>
        </div>
      </div>
    </div>
  );
}

export default ShipmentDetail;
