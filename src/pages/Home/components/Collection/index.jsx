import React from "react";
import "./index.scss";
import femaleColection from "image/femaleCollection.jpg";
import maleColection from "image/maleCollection.webp";

function Collection() {
  return (
    <div id="collection">
      <div className="collection-container">
        <div className="row">
          <div className="col">
            <a href="./main-page/shop.html#vidanu">
              <div className="image-collection">
                <img src={femaleColection} alt="nu" />
                <h3>BỘ SƯU TẬP DÀNH CHO NỮ</h3>
                <div className="overlay"></div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="./main-page/shop.html#vidanam">
              <div className="image-collection">
                <img src={maleColection} alt="nam" />
                <h3>BỘ SƯU TẬP DÀNH CHO NAM</h3>
                <div className="overlay"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
