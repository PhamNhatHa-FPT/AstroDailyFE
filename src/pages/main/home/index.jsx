import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import AppButton from "../../../common/button";
// import FlipCard from "../../../common/flipCard";
// import AppTag from "../../../common/tag/tag";
import Banner from "../../../components/banner";
//import ServicesHome from "../../../components/servicesHome";
import Sticky from "../../../components/sticky";
import Testimonial from "../../../components/testimonial";
import Zodiac from "../../../components/zodiac";
import { getWeather } from "../../../store/actions/user.action";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getWeather());
      // eslint-disable-next-line
    }, []);
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <Banner />
      <Sticky />
      <Zodiac />
      <Testimonial />
      {/* <div className="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>
                  Believe in things that can fortunately change your life.
                </h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Curabitur aliquet quam id dui posuere blandit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Vestibulum ac
                  diam sit amet quam vehicula elementum sed sit amet dui.
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Donec sollicitudin molestie malesuada. Sed porttitor
                  lectus nibh. Sed porttitor lectus nibh. Vestibulum ac diam sit
                  amet quam vehicula elementum se
                  <span style={{ fontSize: 16 }}>&nbsp;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="et_pb_row et_pb_row_1">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_1 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_image et_pb_image_0">
              <span className="et_pb_image_wrap">
                <img
                  decoding="async"
                  src="/assets/images/astrologist-illustrations-09.png"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <ServicesHome />
      <div className="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_6">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_11 et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>Telling of the day</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_image et_pb_image_5 et_pb_image_sticky">
              <span className="et_pb_image_wrap">
                <img
                  decoding="async"
                  src="/assets/images/astrologist-illustrations-26.png"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <div className="et_pb_row et_pb_row_7">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_9 et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_text et_pb_text_12 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h4>Aries Jun 22-Jul 20</h4>
                <h3>Taurus</h3>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_13 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_10 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_14 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
            <div className="et_pb_button_module_wrapper et_pb_button_5_wrapper et_pb_button_alignment_left et_pb_module">
              <AppButton
                children="view more horoscope"
                btnType="button_2"
                htmlType="a"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_8">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_11 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_15 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>Pricing</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="et_pb_row et_pb_row_9">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_12 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_with_border et_pb_module et_pb_pricing_tables_0 et_pb_pricing clearfix et_pb_pricing_3 et_pb_second_featured">
              <div
                className="et_pb_pricing_table_wrap"
                style={{ justifyContent: "space-evenly" }}
              >
                <FlipCard />
                <FlipCard />
                <FlipCard />
              </div>
            </div>
          </div>
        </div>
        <div className="et_pb_row et_pb_row_9">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_12 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_with_border et_pb_module et_pb_pricing_tables_0 et_pb_pricing clearfix et_pb_pricing_3 et_pb_second_featured">
              <div className="et_pb_pricing_table_wrap">
                <AppTag
                  bg="#313453"
                  color="#fff"
                  btnType="button_2"
                  childrenBtn="Book now"
                />
                <AppTag
                  bg="#fff"
                  color="#313453"
                  btnType="button_2"
                  childrenBtn="Book now"
                />
                <AppTag
                  bg="#fcf3e4"
                  color="#313453"
                  btnType="button_2"
                  childrenBtn="Book now"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
