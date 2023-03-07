import React from "react";
import AppButton from "../../../common/button";
import AppInput from "../../../common/input";
import TextInner from "../../../components/textInner";

function Blog() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="My Blog" htmlType="h1" />
      <div className="et_pb_section et_pb_section_2 et_section_regular">
        <div className="et_pb_row et_pb_row_2">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <TextInner child="Subscribe" last="Join My Newsletter" />
            <div className="et_pb_module et_pb_signup_0 et_pb_newsletter_layout_top_bottom et_pb_newsletter et_pb_subscribe clearfix  et_pb_text_align_left et_pb_bg_layout_dark et_pb_no_bg et_pb_newsletter_description_no_title et_pb_newsletter_description_no_content">
              <div className="et_pb_newsletter_description et_multi_view_hidden" />
              <div className="et_pb_newsletter_form">
                <form>
                  <div className="et_pb_newsletter_result et_pb_newsletter_error" />
                  <div className="et_pb_newsletter_fields">
                    <AppInput children="Name" />
                    <AppInput children="Email" />
                    <AppButton
                      children="Subscribe"
                      btnType="button_1"
                      htmlType="a"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
