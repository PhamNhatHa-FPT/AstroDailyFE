import React from 'react'
import AppCard from '../../../common/card';
import CardService from '../../../common/cardService';
import CoverFooter from '../../../components/coverFooter';
import TextInner from '../../../components/textInner';

function WhatIsAstrology() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3 section_sticky">
      <TextInner child="What is astrology?" htmlType="h1" />
      <div
        className="et_pb_section et_pb_section_1 et_section_regular"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="et_pb_row et_pb_row_1">
          <CardService
            textInner="Back in school, you were taught the Sun was at the center of the solar system."
            img="https://www.costarastrology.com/e1e538c5ef0fba31c75ab9a8209de032.gif"
          />
          <CardService
            children="Until the 1700s, the study of the stars' motion (now known as astronomy) was the same as the study of the stars' effects (now known as astrology). Astrology places a human's lived experience into the context of an enormous, endlessly moving universe."
            textInner="Astrology & astronomy were a single discipline for thousands of years."
          />
          <CardService
            textInner="But until the 1500s, humans thought of Earth as the center of the solar system."
            img="https://www.costarastrology.com/08b709025c836d22f74fa89862137485.gif"
          />
        </div>
      </div>
      <div className="et_pb_row et_pb_row_3">
        <AppCard
          children="There are dozens of other constellations, but these are the ones that the planets appear to move through."
          img="https://www.costarastrology.com/c296754e1d8bfe79f1b1dd120ec1bc24.png"
          text="The zodiac is a ring of constellations at the same latitude as our solar system."
          textInner="Orb Study"
          bg="#fff"
          cardType="child"
          btnType="button_0"
        />
        <AppCard
          children="Over days (or months, depending on the planet), each planet moves across the sky, appearing in front of first one zodiac sign, and then another. From our perspective on Earth, it completes one full circle once it has moved through all twelve zodiac signs, and starts back at the beginning."
          text="From the perspective of Earth, each planet appears to be in front of one of these constellations at all times."
          textInner="Orb Study"
          color="#fff"
          cardType="column_8"
          btnType="button_1"
        />
    </div>
    <CoverFooter />
    </div>
  );
}

export default WhatIsAstrology