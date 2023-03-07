import React from 'react'
import AppButton from '../../common/button';
import AppCard from '../../common/card';

function ServicesHome({h3,h2}) {
  return (
    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
      <div className="et_pb_row et_pb_row_2">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h3>{h3}</h3>
              <h2>{h2}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_row et_pb_row_3">
        <AppCard
          children="Degrees: 90° Meaning: Conflict Importance: Very important"
          img="/assets/images/illustration-05.png"
          text="Square"
          textInner="Friction / Frustration"
          cardType="child"
        />
        <AppCard
          children="Degrees: 120° Meaning: Harmony Importance: Very important"
          img="/assets/images/astrologist-illustrations-15.png"
          text="Trine"
          textInner="Harmonious & Friendly"
          cardType="lastChild"
        />
      </div>
      <div className="et_pb_row et_pb_row_4">
        <AppCard
          children="Degrees: 60° Meaning: Supportive Importance: Pretty important"
          img="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrologist-illustrations-07.png"
          text="Sextile"
          textInner="Harmonious & Friendly"
          cardType="child"
        />
        <AppCard
          children="Degrees: 30° Meaning: Growth Importance: Not too important"
          img="/assets/images/astrologist-illustrations-08.png"
          text="Semisextile"
          textInner="Harmonious & Friendly"
          cardType="lastChild"
        />
      </div>
      <div className="et_pb_row et_pb_row_3">
        <AppCard
          children="Degrees: 45° Meaning: Friction Importance: Not too important"
          img="/assets/images/illustration-05.png"
          text="Semisquare"
          textInner="Friction / Frustration"
          cardType="child"
        />
        <AppCard
          children="Degrees: 150° Meaning: Adjustment Importance: Not too important"
          img="/assets/images/astrologist-illustrations-15.png"
          text="Quincunx"
          textInner="Friction / Frustration"
          cardType="lastChild"
        />
      </div>
      <div className="et_pb_row et_pb_row_4">
        <AppCard
          children="Degrees: 0° Meaning: Same same Importance: Most important"
          img="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrologist-illustrations-07.png"
          text="Conjunction"
          textInner="Neutral"
          cardType="child"
        />
        <AppCard
          children="Degrees: 180° Meaning: Mirror opposites Importance: Most important"
          img="/assets/images/astrologist-illustrations-08.png"
          text="Opposition"
          textInner="Neutral"
          cardType="lastChild"
        />
      </div>
      <div className="et_pb_row et_pb_row_5">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_center et_pb_module">
            <AppButton
              children="Book a Free Consultation"
              btnType="button_1"
              htmlType="a"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHome