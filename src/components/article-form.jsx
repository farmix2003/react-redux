import { useSelector } from "react-redux";
import { TextArea, Input } from "../ui";
const ArticleForm = (props) => {
  const {
    title,
    setTitle,
    body,
    setBody,
    description,
    setDescription,
    formSubmit,
  } = props;
  const { isLoading } = useSelector((state) => state.article);
  return (
    <form onSubmit={formSubmit}>
      <Input label={"Title"} state={title} setState={setTitle} />
      <TextArea
        label={"Description"}
        state={description}
        setState={setDescription}
      />
      <TextArea label={"Body"} state={body} setState={setBody} height="250px" />
      <button
        className="w-100 btn btn-lg mt-2 btn btn-primary"
        disabled={isLoading}
        type={"submit"}
      >
        {isLoading ? "Loading" : "Create"}
      </button>
    </form>
  );
};

export default ArticleForm;
