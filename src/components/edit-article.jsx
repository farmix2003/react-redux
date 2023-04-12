import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticledetailFail,
  postArtcileFail,
  postArticleSuccess,
  postArtilceStart,
} from "../slice/article";
import ArticleService from "../service/article";
import { useNavigate, useParams } from "react-router-dom";
import ArticleForm from "./article-form";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();

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

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArtilceStart());
    try {
      await ArticleService.EditArticle(slug, article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArtcileFail());
    }
  };

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
