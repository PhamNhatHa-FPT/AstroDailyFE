import React from 'react'
import Sticky from '../../../components/sticky';
import TextInner from '../../../components/textInner';
import Zodiac from '../../../components/zodiac';

function NatalChar() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="Natal Chart ?" htmlType="h1" />
      <Sticky
        h2="The part of astrology that you’re probably most familiar with is the Sun Sign. When you say “I am a Pisces”, you are referring to your Sun Sign being in Pisces."
        p="It corresponds to the zodiac sign the Sun appeared to be in front of when you are born. Because the Earth completes one revolution around the Sun each year, the Sun moves through all the Zodiac Sun Signs in the same order every year. For example, everyone born right before the Spring Equinox (currently in early March) is always a Pisces.
*Note that there is an offset between Sun Signs in the Tropical and Sidereal zodiacs; we use the Tropical zodiac."
      />
      <Zodiac />
    </div>
  );
}

export default NatalChar