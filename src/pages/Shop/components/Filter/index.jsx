import React from "react";
import "./index.scss";

function Filter() {
  return (
    <div className="col-lg-3">
      <div id="utilities">
        {/* Bộ lọc  */}
        <div className="filter-products">
          <div className="filter-products-name mb-3">
            <h5>Danh mục sản phẩm</h5>
            <form>
              <ul className="shop-widget-list">
                <li>
                  <div className="shop-widget-content">
                    <input
                      className="checkbox-tag"
                      type="checkbox"
                      id="tag1"
                      value="vidanam"
                    />
                    <label htmlFor="tag1"> Ví Da Nam </label>
                  </div>
                </li>
                <li>
                  <div className="shop-widget-content">
                    <input
                      className="checkbox-tag"
                      type="checkbox"
                      id="tag2"
                      value="vidanu"
                    />
                    <label htmlFor="tag2">Ví Da Nữ</label>
                  </div>
                </li>
                <li>
                  <div className="shop-widget-content">
                    <input
                      className="checkbox-tag"
                      type="checkbox"
                      id="tag3"
                      value="daydadongho"
                    />
                    <label htmlFor="tag3">Dây Da Đồng Hồ </label>
                  </div>
                </li>
                <li>
                  <div className="shop-widget-content">
                    <input
                      className="checkbox-tag"
                      type="checkbox"
                      id="tag4"
                      value="tuidacapda"
                    />
                    <label htmlFor="tag4">Túi Da - Cặp Da</label>
                  </div>
                </li>
                <li>
                  <div className="shop-widget-content">
                    <input
                      className="checkbox-tag"
                      type="checkbox"
                      id="tag5"
                      value="thatlung"
                    />
                    <label htmlFor="tag5">Thắt Lưng</label>
                  </div>
                </li>
                <li>
                  <div className="shop-widget-content">
                    <input
                      className="checkbox-tag"
                      type="checkbox"
                      id="tag5"
                      value="phukien"
                    />
                    <label htmlFor="tag5">Phụ Kiện</label>
                  </div>
                </li>
                <li>
                  <div className="shop-widget-content">
                    <input
                      className="checkbox-tag"
                      type="checkbox"
                      id="tag5"
                      value="cacloaibaoda"
                    />
                    <label htmlFor="tag5">Các Loại Bao Da</label>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          <div className="filter-products-price mb-3">
            <h5>Lọc theo giá</h5>
            <div className="filter-checks">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Dưới 500.000đ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  500.000đ - 1.000.00đ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  1000.000đ - 2.000.00đ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Trên 2.000.00đ
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
