import ShopReducer from "pages/Shop/ShopSlice";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "components/Header/components/MiniCart/cartSlice";

const store = configureStore({
  reducer: {
    shop: ShopReducer,
    cart: cartSlice,
  },
});

export default store;
