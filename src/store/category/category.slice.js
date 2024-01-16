import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAccessCategory = createAsyncThunk(
  "category/fetchAccessCategory",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(
      "https://koff-api.vercel.app/api/productCategories",
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response.ok) {
      throw new Error("Не удалось получить каталог");
    }

    return response.json();
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAccessCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
