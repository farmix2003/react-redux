const Input = ({ label, type = "text", state, setState }) => {
  return (
    <div className="form-floating mb-1">
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        class="form-control"
        id="floatingInput"
        placeholder={label}
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
