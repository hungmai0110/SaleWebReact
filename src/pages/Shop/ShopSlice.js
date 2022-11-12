import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productsApi from 'api/productsApi';

export const fetchSearch = createAsyncThunk(
    "shop/search",
    async (value) => {
        const data = await productsApi.getProductsSearch(value)
        return data
    }
)

const initialState = {
    products: []
}

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
        state.products = action.payload
    })
  }
});

export default shopSlice.reducer