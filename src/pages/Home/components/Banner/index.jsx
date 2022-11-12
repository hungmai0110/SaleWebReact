import React from "react";
import { Link } from "react-router-dom";
import banner from "image/banner.jpg";
import "./index.scss";

function Banner() {
  return (
    <div id="banner">
      <div className="banner-image">
        <Link to="/">
          <img src={banner} alt="banner" />
        </Link>
        <Link to="/https://www.facebook.com/ludhandmadevn/" target="_blank">
          <button className="follow rounded-2">Theo dõi</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
