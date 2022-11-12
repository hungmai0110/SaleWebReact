import React from "react";
import { Link } from "react-router-dom";

function OrderInfo() {
  return (
    <div class="col-lg-4">
      <div class="infor-order ms-5">
        <div class="infor-order-container">
          <h4>Thông tin đơn hàng</h4>
          <hr />
          <div class="sub-total-money d-flex justify-content-between">
            <p class="fw-500">Tạm tính:</p>
            <p class="text-danger fw-500">12.000.000 VNĐ</p>
          </div>
          <hr />
          <p class="text-start">
            Phí vận chuyển sẽ được tính ở trang thanh toán.
          </p>
          <div class="note-order">
            <p class="text-start fw-500">Ghi chú đơn hàng</p>
            <textarea placeholder="Nội dung..."></textarea>
          </div>
          <input type="text" placeholder="Nhập mã khuyến mãi" />
          <Link to="../thanh-toan">
            <button class="pay-now my-3">THANH TOÁN NGAY</button>
          </Link>
          <br />
          <Link to="../san-pham">
            <span>
              <i class="fa-solid fa-rotate-left me-2"></i>Tiếp tục mua hàng
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
