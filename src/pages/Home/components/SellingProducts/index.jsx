import { useState, useEffect } from "react";
import { formatMoney } from "utils/utils";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.scss";
import productsApi from "api/productsApi";

function SellingProducts() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
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

  const [sellingProducts, setSellingProducts] = useState([]);

  useEffect(() => {
    productsApi.getSellingProduct().then((data) => {
      setSellingProducts(data);
    });
  }, []);

  return (
    <div id="selling-products">
      <h2>SẢN PHẨM BÁN CHẠY</h2>
      <p className="content">
        Những sản phẩm được lòng khách hàng nhất thời gian qua
      </p>
      <div className="selling-products-container">
        <div className="products-slider">
          <Slider {...settings}>
            {sellingProducts.map((product) => (
              <div className="col" key={product.id}>
                <div className="product">
                  <div className="product-item">
                    <div className="product-image">
                      <div className="image-hover">
                        <img src={product.images[0]} alt="1" />
                        <img
                          src={product.images[1]}
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
                      <p>{product.discount}</p>
                    </div>
                    <div className="product-content text-center">
                      <h3>{product.name}</h3>
                      <div className="price">
                        <p className="discount-price text-decoration-line-through">
                          {formatMoney(product.price)}
                        </p>
                        <p>{formatMoney(product.promo_price)}</p>
                      </div>
                      <button className="btn-buy">Mua ngay</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SellingProducts;
