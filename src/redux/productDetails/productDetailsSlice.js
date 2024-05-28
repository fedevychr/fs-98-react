import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestProductsDetailsById } from '../../services/api';

export const apiRequestProductDetailsById = createAsyncThunk(
  'productDetails/get',
  async (productId, thunkApi) => {
    try {
      const data = await requestProductsDetailsById(productId);

      return data; // Те, що повертається з санки потрапляє в action.payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  },
);

const INITIAL_STATE = {
  productDetails: null,
  isLoading: false,
  isError: false,
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(apiRequestProductDetailsById.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiRequestProductDetailsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
      })
      .addCase(apiRequestProductDetailsById.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export const productDetailsReducer = productDetailsSlice.reducer;
