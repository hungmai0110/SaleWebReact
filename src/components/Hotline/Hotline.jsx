import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Hotline() {
  return (
    <div className="hotline-phone-ring-wrap">
      <div className="hotline-phone-ring">
        <div className="hotline-phone-ring-circle"></div>
        <div className="hotline-phone-ring-circle-fill"></div>
        <div className="hotline-phone-ring-img-circle">
          <Link to="tel:0966516228" className="pps-btn-img">
            <img
              src="https://nguyenhung.net/wp-content/uploads/2019/05/icon-call-nh.png"
              alt="hotline"
              width="50"
            />
          </Link>
        </div>
      </div>
      <div className="hotline-bar">
        <Link to="tel:0966516228">
          <span className="text-hotline">0966.516.228</span>
        </Link>
      </div>
    </div>
  );
}

export default Hotline;
