import React from "react";
import "./About.scss";
import bannerAbout from "image/page_about/banner-about.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* 1. Đường dẫn */}
      <div id="path">
        <div className="footer-image">
          <img src={bannerAbout} alt="banner-about" />
          <div className="path-container d-flex">
            <Link to="/">Trang chủ</Link>
            <span>
              <i className="fa-solid fa-angles-right mx-2"></i>
            </span>
            <p>Giới thiệu</p>
          </div>
          <h3>ĐÔI CHÚT VỀ LUD HAND MADE</h3>
        </div>
      </div>
      {/* 2. Giới thiệu */}
      <div className="shop-history">
        <div className="intro-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <p className="title text-center">LUD HANDMADE</p>
                <h3 className="text-center">Since 2013</h3>
                <p>
                  Năm 2013, LUD được hình thành để đi đến gần hơn với những tín
                  đồ chuộng da, mang theo sứ mệnh đồng hành với bạn để cùng nhau
                  trải nghiệm một tuổi trẻ cháy hết mình, làm việc hết mình và
                  sống hết mình. LUD là ngôi nhà thứ hai - thôi thúc những dự
                  định mà bạn chỉ mới “nghĩ tới” nhưng “chưa dám thực hiện”.
                </p>
                <p>
                  Khi đến với thế giới của LUD, bạn sẽ thu được nhiều trải
                  nghiệm thú vị từ những sản phẩm tuyệt vời, với chất liệu chủ
                  đạo là loại da bò sáp và cận cảnh quá trình khi nghệ nhân bắt
                  đầu đặt bút lên trang giấy để vẽ ra ý tưởng cho đến khi 1 sản
                  phẩm handmade được hoàn thành.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shop-image">
                <img src="../public/img/page_about/1.jpg" alt="1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-confessions">
        <div className="intro-container">
          <div className="row">
            <div className="col-lg-4">
              <div className="shop-image">
                <img src="../public/img/page_about/2.jpg" alt="2" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="content">
                <p className="title">TUỔI TRẺ CỦA BẠN ĐÁNG GIÁ BAO NHIÊU ?</p>
                <h3>CÂU TRẢ LỜI LÀ - “VÔ GIÁ”</h3>
                <p>
                  Điều tuyệt vời nhất của tuổi trẻ là được sống và làm việc theo
                  đúng cá tính và đam mê . Bất cứ ai cũng muốn sống đúng với con
                  người thật của mình và được công nhận. Bắt nguồn từ những điều
                  nhỏ nhoi nhất, LUD luôn luôn tôn trọng ý kiến của khách hàng,
                  hiện thực hóa ý tưởng khách muốn truyền đạt, thông qua sản
                  phẩm đồ da thủ công một cách hoàn thiện nhất.
                </p>
                <p>
                  Mùa Thu năm 2013. Cái tên thương hiệu - LUD được hình thành để
                  đi đến gần hơn với những tín đồ chuộng da, mang theo sứ mệnh
                  đồng hành với bạn để cùng nhau trải nghiệm một tuổi trẻ cháy
                  hết mình, làm việc hết mình và sống hết mình. LUD là ngôi nhà
                  thứ hai -thôi thúc những dự định mà bạn chỉ mới “nghĩ tới”
                  nhưng “chưa dám thực hiện”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-partner">
        <div className="intro-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <p className="title">LUD.VN - HANDMADE</p>
                <h3>NGƯỜI BẠN ĐỒNG HÀNH TUYỆT VỜI”</h3>
                <p>
                  Khi đến với thế giới của LUD, bạn sẽ được trải nghiệm mọi thứ
                  từ những tác phẩm tuyệt vời, với chất liệu chủ đạo là loại da
                  bò sáp nhập khẩu từ Ý, và cận cảnh quá trình khi nghệ nhân bắt
                  đầu đặt bút lên trang giấy để vẽ ra ý tưởng cho đến khi 1 sản
                  phẩm handmade được hoàn thành.
                </p>
                <p>
                  LUD là nơi bạn có thể thủ thỉ mọi điều. BẠN CÓ Ý TƯỞNG - ĐỪNG
                  NGẠI GIẢI BÀY. Vì mọi ý tưởng sáng tạo đều đáng được trân
                  trọng và LUD sẽ giúp bạn thực hiện điều đó. Cùng với những
                  nghệ nhân mang trong mình tràn đầy tâm huyết và đôi bàn tay
                  khéo léo làm nên điều kỳ diệu. Sản phẩm thủ công LUD thể hiện
                  sự cẩn thận, tỉ mỉ và nghiêm khắc. Vẽ - cắt - lạng - dán - đục
                  - may - xử lý cạnh là những công đoạn người nghệ nhân tạo ra
                  những sản phẩm xứng tầm gửi đến tay bạn.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shop-image">
                <img src="../public/img/page_about/3.jpg" alt="3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
