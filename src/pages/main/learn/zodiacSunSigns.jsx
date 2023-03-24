import React from "react";
import TextInner from "../../../components/textInner";
import Zodiac from "../../../components/zodiac";

function ZodiacSunSigns() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3 section_sticky">
      <TextInner child="Zodiac Sun Signs ?" htmlType="h1" />
      <div className="container feature">
        <img
          className="feature-image-desktop feature-image-desktop-update"
          src="https://www.costarastrology.com/5ac8531ee33f602dbb1ec50aa0d66a4b.png"
          alt=""
        />
        <div className="et_pb_row et_pb_row_0" style={{ padding: "100px" }}>
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>Real-time insights, as the planets move</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  We use NASA data to know exactly where the stars are, and
                  proprietary technology to generate super-accurate horoscopes.
                  Know what to look for as the stars move—starting now.
                  <span style={{ fontSize: 16 }}>&nbsp;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Zodiac />
    </div>
  );
}

export default ZodiacSunSigns;
