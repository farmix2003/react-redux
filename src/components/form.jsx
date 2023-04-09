import { useState } from "react";
import { TextArea } from "../ui";
const Form = () => {
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  return (
    <>
      <form>
        <TextArea
          label={"Description"}
          state={description}
          setState={setDescription}
        />
        <TextArea
          label={"Body"}
          state={body}
          setState={setBody}
          height="250px"
        />
        <button
          className="w-100 btn btn-lg mt-2 btn btn-primary"
          type={"submit"}
        >
          Create
        </button>
      </form>
    </>
  );
};

export default Form;
