import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import categoryReducer from "./category/category.slice";
// import productReducer from "./product/product.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    // product: productReducer,
  },
});


