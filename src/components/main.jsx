import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  getArticleSuccess,
  getArticlesError,
  getArticlesStart,
} from "../slice/article";
import ArticleService from "../service/article";

const Main = () => {
  const { articles, isLoading } = useSelector((state) => state.article);
  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await ArticleService.getArticles();
      console.log(response);
      dispatch(getArticleSuccess(response.articles));
    } catch (error) {
      dispatch(getArticlesError());
    }
  };

  const deleteArticle = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug);
      getArticles();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <div className="album py-5">
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((item) => (
              <div className="col" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                  </svg>
                  <div className="card-body m-0">
                    <p className="card-text fw-bold">{item.title}</p>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className=" card-footer d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        onClick={() => navigate(`/article/${item.slug}`)}
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        View
                      </button>
                      {loggedIn && user.username === item.author.username && (
                        <>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteArticle(item.slug)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                    <small className="text-body-secondary py-0 fw-bold text-capitalize">
                      {item.author.username}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
