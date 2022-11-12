import React from "react";
import Banner from "./components/Banner/index";
import Collection from "./components/Collection/index";
import MoreInfor from "./components/MoreInfor/index";
import PromoProducts from "./components/PromoProducts/index";
import SellingProducts from "./components/SellingProducts/index";
import "./Home.scss";

function Home() {
  return (
    <>
      <Banner />
      <PromoProducts />
      <Collection />
      <SellingProducts />
      <MoreInfor />
    </>
  );
}

export default Home;
