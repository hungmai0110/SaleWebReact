import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "api/productsApi";

export const fetchSearch = createAsyncThunk("shop/search", async (value) => {
  const data = await productsApi.getProductsSearch(value);
  return data;
});

export const fetchProduct = createAsyncThunk("shop/fetchProduct", async () => {
  const data = await productsApi.getProducts();
  return data;
});

export const fetchProductById = createAsyncThunk(
  "shop/fetchProductById",
  async (id) => {
    const data = await productsApi.getProductById(id);
    return data;
  }
);

const initialState = {
  products: [],
  product: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default shopSlice.reducer;
