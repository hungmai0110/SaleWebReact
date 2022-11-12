import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import footer from "image/footer.jpg";
import Iframe from "react-iframe";

function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img src={footer} alt="footer" />
        <h3>LUD - THỜI TRANG ĐỒ DA HANDMADE</h3>
      </div>
      <div className="footer-container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h4>LIÊN HỆ</h4>
            <hr />
            <ul className="contact">
              <li>
                <Link to="#">
                  <span>
                    <i className="fa-solid fa-location-arrow"></i>68 Định Công,
                    Hoàng Mai, Hà Nội
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>
                    <i className="fa-solid fa-envelope"></i> support@lud.vn
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>
                    <i className="fa-solid fa-phone"></i>0966 516 228
                  </span>
                </Link>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-clock"></i> T2-CN, Từ 8.AM - 10.PM
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4>CHÍNH SÁCH</h4>
            <hr />
            <ul className="policy">
              <li>
                <Link to="./sub-page/policy_question.html">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link to="./sub-page/policy_warranty.html">
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link to="./sub-page/policy_rules.html">
                  {" "}
                  Điều khoản dịch vụ{" "}
                </Link>
              </li>
              <li>
                <Link to="./sub-page/policy_privacy.html">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="media">
              <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
              <hr />
              <div className="media-container d-flex mt-3">
                <Link
                  to="https://www.facebook.com/ludhandmadevn/"
                  target="_blank"
                >
                  <span>
                    <i className="fa-brands fa-facebook text-primary"></i>
                  </span>
                </Link>
                <Link
                  to="https://www.instagram.com/dohandmadedep/"
                  target="_blank"
                >
                  <span>
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </Link>
                <Link
                  to="https://www.youtube.com/watch?v=wFD6BwHO1RI"
                  target="_blank"
                >
                  <span>
                    <i className="fa-brands fa-youtube text-danger"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="sign-up mt-3">
              <h4>ĐĂNG KÍ NHẬN KHUYẾN MÃI</h4>
              <hr />
              <div className="email-input d-flex mt-3">
                <input type="text" placeholder="Nhập email của bạn" />
                <button className="btn-sign-up">ĐĂNG KÍ</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="fanpage">
              <h4>FANPAGE</h4>
              <hr />
              <Iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fludhandmadevn%2F&tabs=timeline&width=340&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="140px"
                // style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
