import React from "react";
import ServicesHome from "../../../components/servicesHome";
import TextInner from "../../../components/textInner";

function Aspects() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="Aspects ?" htmlType="h1" />
      <div className="container feature">
        <img
          className="feature-image-desktop feature-image-desktop-chart"
          src="https://www.costarastrology.com/a470c65c6af19ca4f7d627b215f2efcd.png"
          alt=""
        />
        <div className="et_pb_row et_pb_row_0" style={{ padding: "100px" }}>
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>Understand your birth chart</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Unlike the broad and vague magazine horoscopes that only use
                  your sun sign, we use a complete picture of the sky when and
                  where you were born to generate your full birth chart.
                  <span style={{ fontSize: 16 }}>&nbsp;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesHome
        h3="When two planets are at two corners of a square, they are said to make a Square to each other."
        h2="Here are the most important aspects:"
      />
    </div>
  );
}

export default Aspects;
