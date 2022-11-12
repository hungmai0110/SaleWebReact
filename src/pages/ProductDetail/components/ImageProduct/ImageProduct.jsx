import React from "react";

function ImageProduct() {
  return (
    <div className="col-lg-6">
      <div className="detail-item">
        <div className="detail-image">
          <img
            src="../public/img/selling-products/Ví Da Bò Sáp Simple 01_1.jpg"
            alt="1"
          />
        </div>
        <div className="detail-image">
          <img
            src="../public/img/selling-products/Ví Da Bò Sáp Simple 01_2.jpg"
            alt="2"
          />
        </div>
        <div className="detail-image">
          <img
            src="../public/img/selling-products/Ví Da Bò Sáp Simple 01_3.jpg"
            alt="3"
          />
        </div>
        <div className="detail-image">
          <img
            src="../public/img/selling-products/Ví Cầm Tay Da Bò_1.jpg"
            alt="4"
          />
        </div>
        <div className="detail-image">
          <img
            src="../public/img/selling-products/Ví Cầm Tay Da Bò_2.jpg"
            alt="5"
          />
        </div>
      </div>
      <div className="detail-slider mt-5">
        <div className="row">
          <div className="col-12">
            <div className="detail-slider-item">
              <div className="detail-slider-image">
                <img
                  src="../public/img/selling-products/Ví Da Bò Sáp Simple 01_1.jpg"
                  alt="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageProduct;
