import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Shop from "pages/Shop/Shop";
import ProductDetail from "pages/ProductDetail/ProductDetail";
import News from "pages/News/News";
import Blog from "pages/Blog/Blog";
import Contact from "pages/Contact/Contact";
import NotFound from "pages/NotFound/NotFound";
import ShoppingCart from "pages/ShoppingCart/ShoppingCart";
import Checkout from "pages/Checkout/Checkout";
import PrivateRoutes from "pages/private/PrivateRoutes/index";
import Profile from "pages/private/Profile/index";
import OrderHistory from "pages/private/OrderHistory/index";
import SecurityAccount from "pages/private/SecurityAccount/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gioi-thieu" element={<About />} />

          <Route path="san-pham">
            <Route index element={<Shop />} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>

          <Route path="tin-tuc">
            <Route index element={<News />} />
            <Route path=":newId" element={<Blog />} />
          </Route>

          <Route path="lien-he" element={<Contact />} />
          <Route path="gio-hang" element={<ShoppingCart />} />
          <Route path="thanh-toan" element={<Checkout />} />

          <Route element={<PrivateRoutes />}>
            <Route path="ho-so-ca-nhan" element={<Profile />} />
            <Route path="lich-su-mua-hang" element={<OrderHistory />} />
            <Route path="bao-mat-tai-khoan" element={<SecurityAccount />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
