const Input = ({ label, type = "text", state, setState }) => {
  return (
    <div className="form-floating mb-1">
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="form-control"
        id="floatingInput"
        placeholder={label}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
