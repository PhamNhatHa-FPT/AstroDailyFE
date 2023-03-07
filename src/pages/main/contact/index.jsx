import React from "react";
import AppButton from "../../../common/button";
import AppInput from "../../../common/input";
import TextInner from "../../../components/textInner";

function Contact() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="Contact" htmlType="h1" />
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_1">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <p>Contact Us</p>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <p>(255) 352-6258</p>
                <p>hello@astrologist.com</p>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <p>Hours</p>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <p>Monday-Friday: 8am-5pm</p>
                <p>Sunday: 9am-2pm</p>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_5  et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <p>Address</p>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_6  et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <p>1234 Divi St. #1000</p>
                <p>San Francisco, CA 94220</p>
              </div>
            </div>
          </div>
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div
              id="et_pb_contact_form_0"
              className="et_pb_module et_pb_contact_form_0 et_pb_contact_form_container clearfix"
            >
              <h1 className="et_pb_contact_main_title">Send a Message</h1>
              <div className="et-pb-contact-message" />
              <div className="et_pb_contact">
                <form className="et_pb_contact_form clearfix">
                  <AppInput children="Name" />
                  <AppInput children="Email" />
                  <AppInput children="Messenger" />
                  <div className="et_contact_bottom_container">
                    <AppButton
                      children="send Message"
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

export default Contact;
