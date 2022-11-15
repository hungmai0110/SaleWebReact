import { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { formatMoney } from "utils/utils";
import productsApi from "api/productsApi";

function Result() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsApi.getProducts().then((data) => {
      console.log(data)
      setProducts(data);
    });
  }, []);

  const handleChangeSelectFilter = (e) => {
    if (!e.target.value)
      productsApi.getProducts().then((data) => {
        setProducts(data);
      });
    else
      productsApi.getProductsSort(e.target.value).then((data) => {
        setProducts(data);
      });
  };

  return (
    <div className="col-lg-9">
      <div id="result">
        {/* Tiêu đề và lọc nhanh  */}
        <div className="title d-flex justify-content-between">
          <h4>Tất cả sản phẩm</h4>
          <div className="filter-sort d-flex">
            <p>Sắp xếp:</p>
            <select onChange={handleChangeSelectFilter}>
              <option value="">Mặc định</option>
              <option value="asc">Giá: Tăng Dần</option>
              <option value="desc">Giá: Giảm Dần</option>
            </select>
          </div>
        </div>
        {/* Render sản phẩm  */}
        <div className="row list-all-products mt-4">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-sm-6">
              <Link to="./detail.html">
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
              </Link>
            </div>
          ))}
        </div>
        {/* page */}
        <div className="shop-panigation row">
          <div className="col-lg-12">
            <div className="shop-paginate">
              <p>Hiển Thị 12 Trên 60 Kết Quả</p>
              <ul className="pagination">
                <li className="pagination-item btn-prev">
                  <i className="fa-solid fa-angle-left"></i>
                </li>
                <li className="pagination-item btn-next">
                  <i className="fa-solid fa-angle-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
