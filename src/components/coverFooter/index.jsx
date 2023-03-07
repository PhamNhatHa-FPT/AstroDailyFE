import React from 'react'
import { Link } from 'react-router-dom';
import AppButton from '../../common/button';
import TextInner from '../textInner';

function CoverFooter() {
  return (
    <div className="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular">
      <div className="et_pb_row et_pb_row_10">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_13 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <TextInner child="Get Started" last="Book an appointment" />
          <div className="et_pb_module et_pb_text et_pb_text_17 et_pb_text_align_center et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          <div className="et_pb_button_module_wrapper et_pb_button_6_wrapper et_pb_button_alignment_center et_pb_module">
            <AppButton children="get started" btnType="button_1" htmlType="a" />
          </div>
        </div>
      </div>
      <div className="et_pb_row et_pb_row_11">
        <div className="et_pb_with_border et_pb_column_1_3 et_pb_column et_pb_column_14 et_pb_css_mix_blend_mode_passthrough">
          <div className="et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_text_align_center et_pb_blurb_position_top et_pb_bg_layout_light">
            <div className="et_pb_blurb_content">
              <div className="et_pb_blurb_container">
                <h4 className="et_pb_module_header">
                  <span>email</span>
                </h4>
                <div className="et_pb_blurb_description">
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      hello@diviastrologist.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="et_pb_with_border et_pb_column_1_3 et_pb_column et_pb_column_15 et_pb_css_mix_blend_mode_passthrough">
          <div className="et_pb_module et_pb_blurb et_pb_blurb_1 et_pb_text_align_center et_pb_blurb_position_top et_pb_bg_layout_light">
            <div className="et_pb_blurb_content">
              <div className="et_pb_blurb_container">
                <h4 className="et_pb_module_header">
                  <span>phone</span>
                </h4>
                <div className="et_pb_blurb_description">
                  <p>
                    <span style={{ fontWeight: 400 }}>(255) 352-6258</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="et_pb_column et_pb_column_1_3 et_pb_column_16 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_blurb et_pb_blurb_2 et_pb_text_align_center et_pb_blurb_position_top et_pb_bg_layout_light">
            <div className="et_pb_blurb_content">
              <div className="et_pb_blurb_container">
                <h4 className="et_pb_module_header">
                  <span>social media</span>
                </h4>
              </div>
            </div>
          </div>
          <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0 clearfix et_pb_text_align_center et_pb_bg_layout_light">
            <li className="et_pb_social_media_follow_network_0 et_pb_social_icon et_pb_social_network_link et-social-instagram">
              <Link to="/" className="icon et_pb_with_border" target="_blank">
                <span
                  className="et_pb_social_media_follow_network_name"
                  aria-hidden="true"
                >
                  Follow
                </span>
              </Link>
            </li>
            <li className="et_pb_social_media_follow_network_1 et_pb_social_icon et_pb_social_network_link et-social-twitter">
              <Link to="/" className="icon et_pb_with_border" target="_blank">
                <span
                  className="et_pb_social_media_follow_network_name"
                  aria-hidden="true"
                >
                  Follow
                </span>
              </Link>
            </li>
            <li className="et_pb_social_media_follow_network_2 et_pb_social_icon et_pb_social_network_link et-social-facebook">
              <Link to="/" className="icon et_pb_with_border" target="_blank">
                <span
                  className="et_pb_social_media_follow_network_name"
                  aria-hidden="true"
                >
                  Follow
                </span>
              </Link>
            </li>
            <li className="et_pb_social_media_follow_network_3 et_pb_social_icon et_pb_social_network_link et-social-youtube">
              <Link to="/" className="icon et_pb_with_border" target="_blank">
                <span
                  className="et_pb_social_media_follow_network_name"
                  aria-hidden="true"
                >
                  Follow
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoverFooter