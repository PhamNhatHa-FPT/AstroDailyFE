import "./textInner.css";

function TextInner({ child, last, color, htmlType, isSizeLarge }) {
  if (htmlType === "h1") {
    return (
      <div className="pb_section">
        <div className="pb_section_inner">
          <h1>{child}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="text_align_inner">
      <div className="text_inner">
        <h3
          style={{
            fontSize: `${isSizeLarge ? "18px" : "22px"}`,
          }}
        >
          {child}
        </h3>
        <h2
          style={{
            fontSize: `${isSizeLarge ? "36px" : "54px"}`,
            color: color,
          }}
        >
          {last}
        </h2>
      </div>
    </div>
  );
}

export default TextInner;