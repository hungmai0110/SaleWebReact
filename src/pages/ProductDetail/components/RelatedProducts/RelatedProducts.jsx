import React from "react";
import { Link } from "react-router-dom";

function RelatedProducts() {
  return (
    <div className="related-products">
      <h2>SẢN PHẨM LIÊN QUAN</h2>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Link to="./">
            <div className="product">
              <div className="product-item">
                <div className="product-image">
                  <div className="image-hover">
                    <img
                      src="../public/img/selling-products/Ví Da Bò Sáp Simple 01_1.jpg"
                      alt="1"
                    />
                    <img
                      src="../public/img/selling-products/Ví Da Bò Sáp Simple 01_2.jpg"
                      alt="2"
                      className="img-change"
                    />
                    <div className="add-to-cart">
                      <span>
                        <i className="fa-solid fa-cart-plus"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="discount">
                  <p>-17%</p>
                </div>
                <div className="product-content text-center">
                  <h3>Ví Da Bò Sáp Simple 01</h3>
                  <div className="price">
                    <p className="discount-price text-decoration-line-through">
                      660.000 VNĐ
                    </p>
                    <p>550.000 VNĐ</p>
                  </div>
                  <button className="btn-buy">Mua ngay</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Link to="./">
            <div className="product">
              <div className="product-item">
                <div className="product-image">
                  <div className="image-hover">
                    <img
                      src="../public/img/selling-products/Túi Da Bò Màu Cafe Sữa_1.jpg"
                      alt="1"
                    />
                    <img
                      src="../public/img/selling-products/Túi Da Bò Màu Cafe Sữa_2.jpg"
                      alt="2"
                      className="img-change"
                    />
                    <div className="add-to-cart">
                      <span>
                        <i className="fa-solid fa-cart-plus"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="discount">
                  <p>-24%</p>
                </div>
                <div className="product-content text-center">
                  <h3>Túi Da Bò Màu Cà Phê Sữa</h3>
                  <div className="price">
                    <p className="discount-price text-decoration-line-through">
                      500.000 VNĐ
                    </p>
                    <p>370.000 VNĐ</p>
                  </div>
                  <button className="btn-buy">Mua ngay</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Link to="./">
            <div className="product">
              <div className="product-item">
                <div className="product-image">
                  <div className="image-hover">
                    <img
                      src="../public/img/selling-products/Ví Cầm Tay Da Bò_1.jpg"
                      alt="1"
                    />
                    <img
                      src="../public/img/selling-products/Ví Cầm Tay Da Bò_2.jpg"
                      alt="2"
                      className="img-change"
                    />
                    <div className="add-to-cart">
                      <span>
                        <i className="fa-solid fa-cart-plus"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="discount">
                  <p>-15%</p>
                </div>
                <div className="product-content text-center">
                  <h3>Ví Cầm Tay Da Bò</h3>
                  <div className="price">
                    <p className="discount-price text-decoration-line-through">
                      400.000 VNĐ
                    </p>
                    <p>330.000 VNĐ</p>
                  </div>
                  <button className="btn-buy">Mua ngay</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Link to="./">
            <div className="product">
              <div className="product-item">
                <div className="product-image">
                  <div className="image-hover">
                    <img
                      src="../public/img/promo-products/Bao Da Thuốc Lá_1.jpg"
                      alt="1"
                    />
                    <img
                      src="../public/img/promo-products/Bao Da Thuốc Lá_2.jpg"
                      alt="2"
                      className="img-change"
                    />
                    <div className="add-to-cart">
                      <span>
                        <i className="fa-solid fa-cart-plus"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="discount">
                  <p>-12%</p>
                </div>
                <div className="product-content text-center">
                  <h3>Bao Da Thuốc Lá</h3>
                  <div className="price">
                    <p className="discount-price text-decoration-line-through">
                      250.000 VNĐ
                    </p>
                    <p>215.000 VNĐ</p>
                  </div>
                  <button className="btn-buy">Mua ngay</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
