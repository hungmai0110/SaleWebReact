import ShopReducer from "pages/Shop/ShopSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        shop: ShopReducer
    }
})

export default store