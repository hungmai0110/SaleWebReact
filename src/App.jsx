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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmDxnxBRQbDVHdg5LyZSDnoA_YSgKqs8s",
  authDomain: "saleweb-a5ebc.firebaseapp.com",
  projectId: "saleweb-a5ebc",
  storageBucket: "saleweb-a5ebc.appspot.com",
  messagingSenderId: "374295971354",
  appId: "1:374295971354:web:e079e9132c5014633ab3a3",
  measurementId: "G-JKMLBQBPVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
