import React from 'react'
import AppButton from '../../../common/button';
import TextInner from '../../../components/textInner';

function HouseSystems() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="House Systems ?" htmlType="h1" />
      <div className="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular section_sticky">
        <div className="et_pb_row et_pb_row_6">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_11 et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>
                  There are many different ways of calculating houses. Porphyry
                  is our favorite way of doing it (and the way we showed you).
                </h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_image et_pb_image_5 et_pb_image_sticky">
              <span className="et_pb_image_wrap">
                <img
                  decoding="async"
                  src="https://www.costarastrology.com/e41aa421f3869a9c63e0be60365eabec.gif"
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
                <h4>Placidus</h4>
                <h3>Whole Sign</h3>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_13 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Porphyry is the default house system used at Co–Star. At the
                  time of birth, the precise degree of the sign corresponding
                  with the MC, or Midheaven — aka, where the highest point of
                  the Sun’s path through the sky (the ecliptic) intersects with
                  the meridian — is determined, as is the precise degree of the
                  sign rising on the Eastern Horizon (the Ascendant). The degree
                  of the sign corresponding with the MC marks the cusp of the
                  10th house. The degree of the Ascendant marks the cusp of the
                  1st house. The rest of the space between the MC and the
                  Ascendant is divided into three equal parts.
                </p>
              </div>
            </div>
          </div>
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_10 et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_14 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  The Descendant and the IC (Imum Coeli, or “bottom of the sky”)
                  are taken to be 180° from (i.e., directly opposite) the
                  Ascendant and the MC, respectively, and the space between them
                  is also divided into three equal parts. Porphyry prioritizes
                  the angles of the chart (the Ascendant, the Descendant, the
                  IC, and the MC) as the 1st, 7th, 4th, and 10th house cusps,
                  respectively, and then determines the other houses from these.
                  Because many people see these four angles as the most powerful
                  parts of the natal chart, they prefer to use the Porphyry
                  system rather than one like Placidus, in which the angles may
                  fall between houses.
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
    </div>
  );
}

export default HouseSystems