import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";
import Iframe from "react-iframe";

function Contact() {
  return (
    <>
      <div id="path">
        <div className="path-container d-flex align-items-center">
          <a href="../index.html">Trang chủ</a>
          <span>
            <i className="fa-solid fa-angles-right mx-2"></i>
          </span>
          <p>Liên hệ</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="row">
          {/* 2.1 Tiện ích */}
          <div className="col-xl-3 col-12 order-xl-1 order-2">
            <div id="utilities">
              {/* Sản phẩm bán chạy  */}
              <div className="selling-products">
                <p className="title text-white fs-5 mb-3">Sản phẩm bán chạy</p>
                <div className="mini-item d-flex my-4">
                  <div className="mini-item-image me-3">
                    <img
                      src="../public/img/selling-products/Bao Ốp Lưng Iphone 7 _2.jpg"
                      alt="ip 7"
                    />
                  </div>
                  <div className="mini-item-content">
                    <p>Bao Ốp Lưng Iphone 7</p>
                    <div className="price">
                      <p className="discount-price text-decoration-line-through my-1">
                        800.000 VNĐ
                      </p>
                      <p>700.000 VNĐ</p>
                    </div>
                  </div>
                </div>
                <div className="mini-item d-flex justify-content-between my-4">
                  <div className="mini-item-image me-3">
                    <img
                      src="../public/img/selling-products/Dây Đồng Hồ Cơ 2 Lớp - SUKA_1.jpg"
                      alt="tui da bo"
                    />
                  </div>
                  <div className="mini-item-content">
                    <p>Túi Đeo Mini - Boxxi</p>
                    <div className="price">
                      <p className="discount-price text-decoration-line-through my-1">
                        500.000 VNĐ
                      </p>
                      <p>370.000 VNĐ</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bài viết mới nhất  */}
              <div className="news-update">
                <p className="title text-white fs-5 mb-3">Bài viết mới nhất</p>
                <div className="mini-item d-flex my-4">
                  <div className="mini-item-image me-3">
                    <img
                      src="../public/img/page_news/5_TOP 8 mẫu dây da đồng hồ Apple Watch.jpg"
                      alt="dây đồng hồ"
                    />
                  </div>
                  <p className="mini-item-content">
                    TOP 8 mẫu dây da đồng hồ Apple Watch đẹp nhất
                  </p>
                </div>
                <div className="mini-item d-flex my-4">
                  <div className="mini-item-image me-3">
                    <img
                      src="../public/img/page_news/1_Bí quyết chọn mua dây đồng hồ da đẹp chất lượng_1.jpg"
                      alt="1"
                    />
                  </div>
                  <p className="mini-item-content">
                    Bí quyết chọn mua dây đồng hồ da đẹp chất lượng
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 2.2 Liên hệ  */}
          <div className="col-xl-9 col-12 order-xl-2 order-1">
            <div className="contact-us">
              <h4 className="text-center mb-2">LIÊN HỆ</h4>
              <div className="map-us my-4">
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7450.750367259314!2d105.8335054!3d20.977592600000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1660304944434!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="contact-us-container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="send-comments">
                      <h4>GỬI THẮC MẮC CHO CHÚNG TÔI</h4>
                      <ul className="form-fill">
                        <li>
                          <label htmlFor="contactForName">Họ và tên</label>
                          <input type="text" placeholder="Nhập tên của bạn" />
                        </li>
                        <li>
                          <label htmlFor="contactForPhone">Số điện thoại</label>
                          <input
                            type="text"
                            placeholder="Nhập số điện thoại của bạn"
                          />
                        </li>
                        <li>
                          <label htmlFor="contactForEmail">Email</label>
                          <input
                            type="email"
                            placeholder="Nhập email của bạn"
                          />
                        </li>
                        <li>
                          <label htmlFor="Notes">Lời nhắn</label>
                          <textarea placeholder="Nội dung..."></textarea>
                        </li>
                      </ul>
                      <button className="send-us">GỬI CHO CHÚNG TÔI</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="infor-contact ms-3">
                      <h4 className="fs-4">THÔNG TIN LIÊN HỆ</h4>
                      <p>
                        Hãy cởi bỏ gánh nặng, áp lực cuộc sống và đến với LUD để
                        bạn được làm chính mình. <br />
                        LUD - người bạn đồng hành tuyệt vời
                      </p>
                      <ul>
                        <li>
                          <Link to="/">
                            <span>
                              <i className="fa-solid fa-location-arrow"></i>68
                              Định Công, phường Định Công, quận Hoàng Mai, Hà
                              Nội
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <i className="fa-solid fa-envelope"></i>
                              support@lud.vn
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <i className="fa-solid fa-phone"></i>0966 516 228
                            </span>
                          </Link>
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-clock"></i> T2-CN, Từ 8.AM
                            - 10.PM
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
