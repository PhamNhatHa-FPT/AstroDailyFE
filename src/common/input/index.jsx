import "./input.css";

function AppInput({ type,children, value, onChange }) {
  return (
    <div className="input-group">
      <input
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        required
      />
      <label className="user-label">{children}</label>
    </div>
  );
}

export default AppInput;
