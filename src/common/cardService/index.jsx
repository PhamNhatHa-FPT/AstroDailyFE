import "./cardService.css";

function CardService({
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

  return (
    <div
      className="et_pb_column et_pb_column_1_3 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough"
      {...restProps}
    >
      <div className="et_pb_module et_pb_image et_pb_image_0">
        <span className="et_pb_image_wrap ">
          <img src={img} alt="" />
        </span>
      </div>
      <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light">
        <div className="et_pb_text_inner">
          <h3>{textInner}</h3>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default CardService;
