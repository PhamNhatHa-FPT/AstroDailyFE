import React from 'react'
import CardService from '../../../common/cardService';
import Sticky from '../../../components/sticky';
import TextInner from '../../../components/textInner';

function RisingSign() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="Rising Sign ?" htmlType="h1" />
      <Sticky
        h2="The “rising sign” or “ascendant” is the zodiac sign that was on the eastern horizon when and where you were born."
        p="IT'S CALLED THE RISING SIGN BECAUSE THAT ZODIAC CONSTELLATION IS RISING, OR ASCENDING, INTO THE SKY OVER THE EASTERN HORIZON."
        h3="The rising sign is an important concept in astrology."
        vi="The rising sign changes every two hours."
        Children="Each day, the entire zodiac appears to move across the sky. This means that every two hours, another one of the twelve zodiac signs becomes visible from below the horizon. But they aren’t actually moving around us; Earth itself is moving. Every 24 hours the Earth rotates 360°."
      />
      <div
        className="et_pb_section et_pb_section_1 et_section_regular"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="et_pb_row et_pb_row_1">
          <CardService
            textInner="It does this while the rest of the solar system continues its orbit. So two types of movement are happening:"
            img="https://www.costarastrology.com/e1e538c5ef0fba31c75ab9a8209de032.gif"
          />
          <CardService
            children="If two people are born two hours apart, their charts are basically the same (e.g. Sag Moon, Gem Sun), but their rising signs are one sign different."
            textInner="What changes? Their relative horizons – literally what they see to the east."
          />
          <CardService
            textInner="Their charts are mostly the same, because from the perspective of the Earth, the planets are in front of the same constellations of stars."
            img="https://www.costarastrology.com/08b709025c836d22f74fa89862137485.gif"
          />
        </div>
      </div>
    </div>
  );
}

export default RisingSign