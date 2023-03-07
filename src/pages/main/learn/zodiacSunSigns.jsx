import React from 'react'
import CoverFooter from '../../../components/coverFooter';
import TextInner from '../../../components/textInner';
import Zodiac from '../../../components/zodiac';

function ZodiacSunSigns() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="Zodiac Sun Signs ?" htmlType="h1" />
      <Zodiac />
      <CoverFooter />
    </div>
  );
}

export default ZodiacSunSigns