import React from "react";
import { Link } from "react-router-dom";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.scss";
// Import data
import card from "image/more_infor/cart.jpg";
import bag from "image/more_infor/bag.jpg";
import appleWatch from "image/more_infor/apple_watch.jpg";
import avatar1 from "image/more_infor/avatar_1.jpg";
import avatar2 from "image/more_infor/avatar_2.jpg";
import avatar3 from "image/more_infor/avatar_3.jpg";

function MoreInfor() {
  const settingsNews = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsFeedBacks = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  };

  return (
    <div id="more-infor">
      <h2>Bạn có biết?</h2>
      <div className="more-infor-container">
        <div className="row">
          <div className="col-lg-8 col-md-9 col-sm-12">
            <div className="news">
              <div className="news-slider">
                <Slider {...settingsNews}>
                  <Link to="./sub-page/blog_03.html">
                    <div className="news-item">
                      <img src={card} alt="thiep" />
                      <p>Hướng dẫn sử dụng sản phẩm da cá sấu tại nhà</p>
                    </div>
                  </Link>
                  <Link to="./sub-page/blog_02.html">
                    <div className="news-item">
                      <img src={bag} alt="cap da" />
                      <p>Tìm hiểu các bước làm ra một chiếc cặp da nam</p>
                    </div>
                  </Link>
                  <Link to="./sub-page/blog_04.html">
                    <div className="news-item">
                      <img src={appleWatch} alt="day dong ho" />
                      <p>TOP 8 mẫu dây da đồng hồ Apple Watch đẹp nhất</p>
                    </div>
                  </Link>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="feedback">
              <div className="feedback-slider">
                <Slider {...settingsFeedBacks}>
                  <div className="feedback-item text-center">
                    <div className="feedback-avatar">
                      <img src={avatar1} alt="1" />
                    </div>
                    <div className="rate d-flex justify-content-center my-2">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="user-name mb-2">Tiên Tiên</p>
                    <p className="fst-italic">
                      Tư vấn nhiệt tình, rất nhiều sản phẩm đẹp, sẽ ủng hộ lâu
                      dài!
                    </p>
                  </div>
                  <div className="feedback-item text-center">
                    <div className="feedback-avatar">
                      <img src={avatar2} alt="2" />
                    </div>
                    <div className="rate d-flex justify-content-center my-2">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="user-name mb-2">Điêu Thuyền</p>
                    <p className="fst-italic">
                      Đồ da cao cấp, giá hợp lý. Sẽ ủng hộ shop lâu dài
                    </p>
                  </div>
                  <div className="feedback-item text-center">
                    <div className="feedback-avatar">
                      <img src={avatar3} alt="3" />
                    </div>
                    <div className="rate d-flex justify-content-center my-2">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="user-name mb-2">Tiểu Vy</p>
                    <p className="fst-italic">
                      Giá hợp lý, giao hàng nhanh. Chủ shop dễ thương!
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfor;
