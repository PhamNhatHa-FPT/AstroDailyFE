import "./input.css";

function AppInput({ children }) {
  return (
    <div className="input-group">
      <input required type="text" name="text" className="input" />
      <label className="user-label">{children}</label>
    </div>
  );
}

export default AppInput;
