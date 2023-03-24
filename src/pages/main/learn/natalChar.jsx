import React from "react";
import StickyVer2 from "../../../components/sticky/StickyVer2";
import TextInner from "../../../components/textInner";
import Zodiac from "../../../components/zodiac";

function NatalChar() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="Natal Chart ?" htmlType="h1" />
      <StickyVer2
        h2="The part of astrology that you’re probably most familiar with is the Sun Sign. When you say “I am a Pisces”, you are referring to your Sun Sign being in Pisces."
        p="It corresponds to the zodiac sign the Sun appeared to be in front of when you are born. Because the Earth completes one revolution around the Sun each year, the Sun moves through all the Zodiac Sun Signs in the same order every year. For example, everyone born right before the Spring Equinox (currently in early March) is always a Pisces.
*Note that there is an offset between Sun Signs in the Tropical and Sidereal zodiacs; we use the Tropical zodiac."
      />
      <Zodiac />
      <div className="pb_section" style={{ padding: "2% 0" }}>
        <div className="pb_section_inner">
          <h1 style={{ fontSize: "40px" }}>
            In astrology, every combination of planet and constellation – or
            zodiac sign – has a specific meaning.
          </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingBottom: "40px",
        }}
      >
        <div>
          <div className="pb_section" style={{ padding: "2% 0" }}>
            <div className="pb_section_inner">
              <h1 style={{ fontSize: "40px", color: "#313453" }}>
                The planets are the verbs.
              </h1>
            </div>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-744da.appspot.com/o/Screenshot%202023-03-24%20231732.png?alt=media&token=9bda41bd-7d18-4739-b67f-fa08af6c4ede"
            alt=""
          />
        </div>
        <div>
          <div className="pb_section" style={{ padding: "2% 0" }}>
            <div className="pb_section_inner">
              <h1 style={{ fontSize: "40px", color: "#313453" }}>
                The signs are the adverbs.
              </h1>
            </div>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-744da.appspot.com/o/Screenshot%202023-03-24%20231802.png?alt=media&token=2f167c02-295e-4efc-884f-c0b57e032174"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NatalChar;
