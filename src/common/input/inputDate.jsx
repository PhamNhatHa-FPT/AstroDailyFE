import "./input.css";

function AppInputDate({ type, children, value, onChange, style }) {
  return (
    <div className="input-group" style={style}>
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

export default AppInputDate;
