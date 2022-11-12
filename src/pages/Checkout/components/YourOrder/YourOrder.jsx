import React from "react";

function YourOrder() {
  return (
    <div className="col-lg-6">
      <h5 className="text-center">ĐƠN HÀNG CỦA BẠN</h5>
      <div className="my-order">
        <div className="my-order-container">
          <div className="list-payment-cart-products">
            <div className="mini-cart-product d-flex justify-content-between position-relative">
              <div className="d-flex justify-content-between">
                <div className="mini-cart-product-image me-3">
                  <img
                    src="../public/img/selling-products/Ví Cầm Tay Da Bò_1.jpg"
                    alt="bao da ip 7"
                  />
                </div>
                <div className="mini-cart-product-content">
                  <p className="mb-1 fw-500">Ví Cầm Tay Da Bò</p>
                  <p className="initial-price text-decoration-line-through mb-1">
                    900.000 VNĐ
                  </p>
                  <p className="promo-price">800.000 VNĐ</p>
                </div>
              </div>
              <p className="text-danger fw-500 d-flex align-items-center">
                900.000đ
              </p>
              <div className="count">
                <p>2</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="discount-code my-4 d-flex justify-content-between">
            <input type="text" placeholder="Mã giảm giá (nếu có)" />
            <button className="btn-apply px-2">SỬ DỤNG</button>
          </div>
          <hr />
          <div className="sub-total-money d-flex justify-content-between">
            <p>Tạm tính</p>
            <p>3.000.000 VNĐ</p>
          </div>
          <div className="fee-transform d-flex justify-content-between">
            <p>Phí vận chuyển</p>
            <p>0 VNĐ</p>
          </div>
          <hr />
          <div className="total-money fs-5 d-flex justify-content-between">
            <p>Tổng cộng</p>
            <p className="text-danger tottal-money-final">3.000.000 VNĐ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourOrder;
