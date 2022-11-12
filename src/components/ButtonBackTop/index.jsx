import React from "react";
import "./index.scss";

function ButtonBackTop() {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 800
    ) {
      document.getElementById("btn-top").style.display = "block";
    } else {
      document.getElementById("btn-top").style.display = "none";
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button onClick={topFunction} id="btn-top">
      <span>
        <i className="fa-solid fa-angles-up"></i>
      </span>
    </button>
  );
}

export default ButtonBackTop;
