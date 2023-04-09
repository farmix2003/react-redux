const TextArea = ({ label, state, setState, height = "100px" }) => {
  return (
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder={label}
        id="floatingTextarea2"
        style={{ height: height }}
      ></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  );
};

export default TextArea;
