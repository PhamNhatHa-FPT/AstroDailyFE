import "./card.css";
import cls from "classnames";
import AppButton from "../button";
import TextInner from "../../components/textInner";

function AppCard({
  children,
  cardType,
  classStyle,
  text,
  img,
  bg,
  color,
  textInner,
  btnType,
  ...restProps
}) {
  const classes = cls(
    "et_pb_column et_pb_column_1_2",
    { column_8: cardType === "column_8" },
    {
      et_pb_column_4: cardType === "lastChild",
    },
    {
      et_pb_column_5: cardType === "child",
    },
    "et_pb_css_mix_blend_mode_passthrough",
    {
      et_last_child: cardType === "lastChild",
    },
    {
      et_last_child: cardType === "column_8",
    }
  );

  return (
    <div className={classes} {...restProps} style={{ backgroundColor: bg }}>
      <div className="et_pb_module et_pb_image et_pb_image_2">
        <span className="et_pb_image_wrap">
          <img src={img} alt="" />
        </span>
      </div>
      <TextInner
        child={textInner}
        last={text}
        color={color}
        isSizeLarge={true}
      />
      <div className="et_pb_module et_pb_text et_pb_text_6 et_pb_text_align_center et_pb_bg_layout_light">
        <div className="et_pb_text_inner">
          <p style={{ color: color }}>{children}</p>
        </div>
      </div>
      {btnType && (
        <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module">
          <AppButton children="get started" btnType={btnType} htmlType="a" />
        </div>
      )}
    </div>
  );
}

export default AppCard;
