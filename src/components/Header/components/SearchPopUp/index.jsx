import useDebounce from "hooks/useDebounce";
import { fetchSearch } from "pages/Shop/ShopSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "utils/utils";
import OverlayScreen from "../OverlayScreen/index";
import "./index.scss";

function SearchPopUp({ setIsShowSearch }) {
  const [enteredSearch, setEnteredSearch] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shop);
  console.log(products);

  const debounce = useDebounce(enteredSearch, 600);

  useEffect(() => {
    if (!debounce.trim()) return;
    dispatch(fetchSearch(debounce));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);
  return (
    <>
      <OverlayScreen onClick={() => setIsShowSearch(false)} />
      <div id="search-pop-up">
        <p className="text-center my-2">TÌM KIẾM</p>
        <div className="input-group d-flex justify-content-center mb-3">
          <input
            value={enteredSearch}
            onChange={(e) => setEnteredSearch(e.target.value)}
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button>
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </button>
        </div>
        <div className="list-cart-wrapper">
          <div className="list-cart-products">
            {products.map((product) => (
              <div
                className="mini-cart-product d-flex justify-content-between position-relative"
                key={product.id}
              >
                <div className="d-flex">
                  <div className="mini-cart-product-image me-3">
                    <img src={product.images[1]} alt="1" />
                  </div>
                  <div className="mini-cart-product-content">
                    <p className="mb-2">{product.name}</p>
                    <p className="text-danger d-flex align-items-center">
                      {formatMoney(product.promo_price)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPopUp;
