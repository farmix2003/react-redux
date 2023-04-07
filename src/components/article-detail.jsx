import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticledetailFail,
} from "../slice/article";
const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);
  useEffect(() => {
    dispatch(getArticleDetailStart());
    const getArticleDetail = async () => {
      try {
        const response = await ArticleService.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(response.article));
        console.log(response);
      } catch (error) {
        dispatch(getArticledetailFail());
      }
    };
    getArticleDetail();
  }, [slug]);
  return <div>Id : {slug}</div>;
};

export default ArticleDetail;
