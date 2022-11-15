import React from "react";
import Slider from "react-slick";

function ImageProduct({ productItem }) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(productItem);
  return (
    <div className="col-lg-6">
      <div className="detail-item">
        <Slider {...settings}>
          {productItem.images.map((productImage) => {
            <div className="detail-image">
              <img src={productImage} alt="1" />
            </div>;
          })}
        </Slider>
      </div>
      <div className="detail-slider mt-5">
        <div className="row">
          <div className="col-12">
            <div className="detail-slider-item">
              <div className="detail-slider-image">
                <img src={productItem.images[0]} alt="1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageProduct;
