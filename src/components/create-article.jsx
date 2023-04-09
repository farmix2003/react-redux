import { useState } from "react";
import { Input } from "../ui";
import { Form } from ".";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="text-center">
      <h1 className="fs-2">Create Article</h1>
      <div className="w-75 mx-auto">
        <Input label={"Title"} state={title} setState={setTitle} />
        <Form />
      </div>
    </div>
  );
};

export default CreateArticle;
