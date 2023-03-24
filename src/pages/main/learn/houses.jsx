import React from "react";
import AppTag from "../../../common/tag/tag";
import TextInner from "../../../components/textInner";

function Houses() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3 section_sticky">
      <TextInner child="Houses ?" htmlType="h1" />
      <div>
        <div className="container feature">
          <img
            className="feature-image-desktop feature-image-desktop-compat"
            src="https://www.costarastrology.com/006d5aaabac593fb87b8b65628ec1a51.png"
            alt=""
          />
          {/* <img
            className="feature-image-mobile feature-image-mobile-compat"
            src="https://www.costarastrology.com/24a634302b539b9588bfa02701f839f4.png"
            alt=""
          /> */}
          <div className="section_sticky">
            <div className="row_0 row">
              <div className="column_0 column">
                <div className="image_sticky">
                  <span>
                    <img
                      decoding="async"
                      src="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrology-illustrations-05-copy.png"
                      alt=""
                    />
                  </span>
                </div>
                <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                  <div className="et_pb_text_inner">
                    <h2>Better together</h2>
                  </div>
                </div>
                <div
                  className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light"
                  style={{ padding: "20px 100px" }}
                >
                  <p>
                    Keep track of your friends, see what's up with them
                    astrologically if they’re having a bad day, and, of course,
                    see whether you’re fated to fall in love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_row et_pb_row_4">
        <h3>They're the context, or the nouns.</h3>
        <div style={{ width: "100%", padding: "1.75rem 0px" }} />
        <table className="">
          <tbody>
            <tr className>
              <td>1ST HOUSE</td>
              <td>Self-image, the impressions you make on others</td>
            </tr>
            <tr className>
              <td>2ND HOUSE</td>
              <td>
                Your personal resources, what makes you feel safe and secure
              </td>
            </tr>
            <tr className>
              <td>3RD HOUSE</td>
              <td>
                What you know and your everyday surroundings, including siblings
                and familiar patterns
              </td>
            </tr>
            <tr className>
              <td>4TH HOUSE</td>
              <td>
                Home life, family, close relationships, the past and its effect
                on you
              </td>
            </tr>
            <tr className>
              <td>5TH HOUSE</td>
              <td>Pleasure &amp; creativity, self-expression, fun, children</td>
            </tr>
            <tr className>
              <td>6TH HOUSE</td>
              <td>Productivity, service, routines</td>
            </tr>
            <tr className>
              <td>7TH HOUSE</td>
              <td>
                Partnership and committed relationships, what you bring into
                your world through other people
              </td>
            </tr>
            <tr className>
              <td>8TH HOUSE</td>
              <td>
                How you relate to other people’s resources and things out of
                your control, including beginnings and endings, transformations,
                crises
              </td>
            </tr>
            <tr className>
              <td>9TH HOUSE</td>
              <td>
                Open-mindedness, philosophy, exchange of culture and ideas,
                expanded consciousness, travel
              </td>
            </tr>
            <tr className>
              <td>10TH HOUSE</td>
              <td>
                Your public self and commitments, career, how you wanted to be
                remembered, your legacy
              </td>
            </tr>
            <tr className>
              <td>11TH HOUSE</td>
              <td>
                Your social world, friends &amp; acquaintances, how you relate
                to groups of people
              </td>
            </tr>
            <tr className>
              <td>12TH HOUSE</td>
              <td>Your unconscious, dreams, fantasies</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_1">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_with_border et_pb_module et_pb_pricing_tables_0 et_pb_pricing clearfix et_pb_pricing_3 et_pb_second_featured">
              <div className="et_pb_pricing_table_wrap">
                <AppTag
                  bg="#313453"
                  color="#fff"
                  children="PRIVATE / PUBLIC "
                  text="1st House / 7th House"
                  textInner="How you function in close relationships, and how you use those relationships to learn about yourself"
                />
                <AppTag
                  bg="#fff"
                  color="#313453"
                  children="PRIVATE / PUBLIC "
                  text="2nd House / 8th House"
                  textInner="How you increase what you know, how you expand your horizons, often in a more abstract sense than that of the 3rd house"
                />
                <AppTag
                  bg="#fcf3e4"
                  color="#313453"
                  children="PRIVATE / PUBLIC "
                  text="3rd House / 9th House"
                  textInner="How you increase what you know, how you expand your horizons, often in a more abstract sense than that of the 3rd house"
                />
                <AppTag
                  bg="#fcf3e4"
                  color="#313453"
                  children="PRIVATE / PUBLIC "
                  text="4st House / 10th House"
                  textInner="How you go about achieving your goals, how you work, and what you hope to gain in the future"
                />
                <AppTag
                  bg="#fff"
                  color="#313453"
                  children="PRIVATE / PUBLIC "
                  text="5nd House / 11th House"
                  textInner="Shared goals, idealism, and prioritizing the food of a group above the self"
                />
                <AppTag
                  bg="#313453"
                  color="#fff"
                  children="PRIVATE / PUBLIC "
                  text="6rd House / 12th House"
                  textInner="A more spiritual kind of service, or the work we need to do to protect and strengthen our own psychic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Houses;
