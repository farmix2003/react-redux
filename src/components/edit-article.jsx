import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticledetailFail,
} from "../slice/article";
import ArticleService from "../service/article";
import { useParams } from "react-router-dom";
import ArticleForm from "./article-form";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getArticleDetailStart());
    const getArticleDetail = async () => {
      try {
        const response = await ArticleService.getArticleDetail(slug);
        setTitle(response.article.title);
        setDescription(response.article.description);
        setBody(response.article.body);
        dispatch(getArticleDetailSuccess(response.article));
        console.log(response);
      } catch (error) {
        dispatch(getArticledetailFail());
      }
    };
    getArticleDetail();
  }, []);

  const formSubmit = () => {};
  const ArticleProps = {
    title,
    setTitle,
    body,
    setBody,
    description,
    setDescription,
    formSubmit,
  };
  return (
    <div className="text-center">
      <h1 className="fs-2">Edit Article</h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...ArticleProps} />
      </div>
    </div>
  );
};

export default EditArticle;
