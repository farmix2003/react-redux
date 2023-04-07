import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticledetailFail,
} from "../slice/article";
import moment from "moment/moment";
import { Loader } from "../ui";
const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);
  const { getArticleDetail, isLoading } = useSelector((state) => state.article);
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
  return isLoading ? (
    <Loader />
  ) : (
    getArticleDetail !== null && (
      <div>
        <div className="p-5 bg-body-tertiary mb-4 rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{getArticleDetail.title}</h1>
            <p className="col-md-8 fs-4">{getArticleDetail.description}</p>
          </div>
          <div className="d-flex gap-5">
            <p className="text-muted">
              <span className="fw-bold">Created at:</span>{" "}
              {moment(getArticleDetail.createdAt).format("DD MMM, YYYY")}
            </p>
          </div>
          <div class="col-md-8 bg-light">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">
                  {getArticleDetail.author.username}
                </strong>

                <p class="card-text mb-auto">{getArticleDetail.description}</p>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <img
                    src="https://api.realworld.io/images/demo-avatar.png"
                    alt="J"
                  />
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                </svg>
              </div>
            </div>
          </div>
          <div>{getArticleDetail.body}</div>
        </div>
      </div>
    )
  );
};

export default ArticleDetail;
