import { useState, useEffect } from "react";
import { formatMoney } from "utils/utils";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.scss";
import CountDown from "../CountDown/index";
import productsApi from "api/productsApi";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProduct, fetchProductById } from "pages/Shop/ShopSlice";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addProductToCart } from "components/Header/components/MiniCart/cartSlice";

function PromoProducts() {
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

  const [promoProducts, setPromoProducts] = useState([]);
  const productCart = useSelector((state) => state.shop.products);

  // const productId = useParams();

  const dispatch = useDispatch();

  // Function addtocart
  const handleAddToCart = (id) => {
    const productItem = promoProducts.find((p) => p.id === id);
    // Kiểm tra sản phẩm đã có trong giở hàng hay chưa?
    const isExist = productCart.some((p) => p.id === id);
    if (isExist) {
      // toast.warning("Sản phẩm đã có trong giỏ hàng", {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      alert("Sản phẩm đã có trong giỏ hàng");
      return;
    }
    // Thêm sản phẩm vào giỏ
    const newProductCarItem = {
      id: productItem.id,
      name: productItem.name,
      price: productItem.promo_price,
      image: productItem.images[0],
      count: 1,
    };
    dispatch(addProductToCart(newProductCarItem));
    toast.success("thêm vào giỏ hàng thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    productsApi.getPromoProduct().then((data) => {
      setPromoProducts(data);
    });
  }, []);

  return (
    <div id="promo-products">
      <h2>KHUYẾN MẠI THÁNG NÀY</h2>
      <CountDown />

      <div className="promo-products-container">
        <div className="products-slider">
          <Slider {...settings}>
            {promoProducts.map((product) => (
              <div className="col" key={product.id}>
                <div className="product">
                  <div className="product-item">
                    <div className="product-image">
                      <Link to={`/san-pham/${product.id}`}>
                        <div className="image-hover">
                          <img src={product.images[0]} alt="1" />
                          <img
                            src={product.images[1]}
                            alt="2"
                            className="img-change"
                          />
                          <div className="add-to-cart">
                            <span onClick={() => handleAddToCart(product.id)}>
                              <i className="fa-solid fa-cart-plus"></i>
                            </span>
                          </div>
                        </div>
                      </Link>
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

export default PromoProducts;
