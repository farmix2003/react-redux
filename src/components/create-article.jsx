import { useState } from "react";
import { ArticleForm } from ".";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import {
  postArtcileFail,
  postArticleSuccess,
  postArtilceStart,
} from "../slice/article";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch((state) => state.article);
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArtilceStart());
    try {
      await ArticleService.postArticle(article);
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
      <h1 className="fs-2">Create Article</h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...ArticleProps} />
      </div>
    </div>
  );
};

export default CreateArticle;
