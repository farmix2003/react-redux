import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  getArticleDetail: null,
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
    getArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.getArticleDetail = action.payload;
    },
    getArticledetailFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getArticlesStart,
  getArticleSuccess,
  getArticlesError,
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticledetailFail,
} = articleSlice.actions;
export default articleSlice.reducer;
