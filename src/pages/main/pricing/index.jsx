import React from "react";
import AppTag from "../../../common/tag/tag";
import Banner from "../../../components/banner";

function Pricing() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <Banner />
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_1">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
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
      </div>
      <div className="et_pb_section et_pb_section_2 et_section_regular">
        <div className="et_pb_row et_pb_row_2">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h3>FAQ</h3>
                <h2>Frequently Asked</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
              <div className="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_0  et_pb_toggle_open">
                <h5 className="et_pb_toggle_title">
                  Nulla quis lorem ut libero malesuada feugiat?
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce commodo, lectus ut suscipit euismod, quam sapien
                    aliquet sapien, in bibendum sem est nec sem. Phasellus felis
                    turpis, feugiat sed sem nec, consequat molestie lacus.
                  </p>
                </div>
              </div>
              <div className="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_1  et_pb_toggle_close">
                <h5 className="et_pb_toggle_title">
                  Curabitur aliquet quam id dui posuere blandit?
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce commodo, lectus ut suscipit euismod, quam sapien
                    aliquet sapien, in bibendum sem est nec sem. Phasellus felis
                    turpis, feugiat sed sem nec, consequat molestie lacus.
                  </p>
                </div>
              </div>
              <div className="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_2  et_pb_toggle_close">
                <h5 className="et_pb_toggle_title">
                  Lorem ipsum dolor sit amet consectetur?
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce commodo, lectus ut suscipit euismod, quam sapien
                    aliquet sapien, in bibendum sem est nec sem. Phasellus felis
                    turpis, feugiat sed sem nec, consequat molestie lacus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>What to Expect</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  id commodo odio, nec venenatis ipsum. In tristique erat vel
                  ligula feugiat ultrices. Aliquam fermentum quam vitae quam
                  luctus, eget laoreet augue feugiat. Morbi ac vehicula arcu. In
                  convallis, nisl ac ultrices scelerisque, lorem lacus lacinia
                  nisl, sed finibus risus ligula non augue. Donec semper aliquam
                  odio nec tempus.
                </p>
                <p>
                  Quisque porta suscipit pulvinar. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Maecenas semper ut ex sit amet fermentum. Suspendisse
                  potenti. Donec blandit diam urna, id iaculis tellus
                  scelerisque ac.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
