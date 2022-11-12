import React from "react";

function SelectedProductsInfo() {
  return (
    <div class="col-lg-8">
      <div class="infor-product">
        {/*  Tiêu đề */}
        <div class="title d-flex justify-content-between">
          <h4>Giỏ hàng</h4>
          <div class="infor-count d-flex">
            <p>Số lượng:</p>
            <p class="count text-danger mx-2 fw-500">02</p>
            <p>sản phẩm</p>
          </div>
        </div>
        <hr class="my-2" />
        {/*  Chi tiết sản phẩm  */}
        <div class="list-shopping-cart-products">
          <div class="shopping-cart-product d-flex justify-content-between align-items-center">
            <div class="mini-item d-flex my-2">
              <div class="mini-item-image me-3">
                <img
                  src="../public/img/selling-products/Bao Ốp Lưng Iphone 7 _2.jpg"
                  alt="ip 7"
                />
              </div>
              <div class="mini-item-content">
                <p>Bao Ốp Lưng Iphone 7</p>
                <div class="price">
                  <p class="discount-price text-decoration-line-through my-1">
                    800.000 VNĐ
                  </p>
                  <p class="fw-500">700.000 VNĐ</p>
                </div>
                <span>
                  <i class="fa-solid fa-trash-can fw-light fs-5"></i>
                </span>
              </div>
            </div>
            <div class="change-count d-flex align-items-center mb-4">
              <span class="border d-inline-block me-3">
                <span class="py-2 px-3 border-end d-inline-block fw-bold btn-minus-count">
                  -
                </span>
                <span class="py-2 px-3 d-inline-block fw-bold count">1</span>
                <span class="py-2 px-3 border-start d-inline-block fw-bold btn-plus-count">
                  +
                </span>
              </span>
            </div>
            <p class="product-money text-danger fw-500 fs-5">700.000đ</p>
          </div>
          <hr class="my-2" />
        </div>
      </div>
    </div>
  );
}

export default SelectedProductsInfo;
