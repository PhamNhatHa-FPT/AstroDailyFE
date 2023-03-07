import "./tag.css";
import AppButton from "../button";

function AppTag({
  children,
  cardType,
  classStyle,
  text,
  img,
  bg,
  color,
  textInner,
  btnType,
  childrenBtn,
  ...restProps
}) {

  return (
    <div
      className="pricing_table"
      {...restProps}
      style={{ backgroundColor: bg, color: color }}
    >
      <div className="pricing_heading">
        <h2 className="pricing_title">{text}</h2>
      </div>
      <div className="pricing_content_top">
        <span className="et_price">
          {/* <span className="dollar_sign" style={{ marginLeft: "-35.7px" }}>
            $
          </span> */}
          <span className="sum" style={{fontSize: '35px'}}>{children}</span>
        </span>
      </div>
      <div className="pricing_content">
        <ul className="pricing">
          <li>
            <span>{textInner}</span>
          </li>
          {/* <li>
            <span>Sit amet consectetur</span>
          </li>
          <li>
            <span>Adipiscing elit</span>
          </li> */}
        </ul>
      </div>
      {btnType && (
        <div className="button_wrapper">
          <AppButton children={childrenBtn} btnType={btnType} htmlType="a" />
        </div>
      )}
    </div>
  );
}

export default AppTag;
