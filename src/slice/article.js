import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticleSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticlesError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getArticlesStart, getArticleSuccess, getArticlesError } =
  articleSlice.actions;
export default articleSlice.reducer;
