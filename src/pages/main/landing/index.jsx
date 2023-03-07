import React from 'react'
import Banner from '../../../components/banner';
import Sticky from '../../../components/sticky';
import Testimonial from '../../../components/testimonial';
import Zodiac from '../../../components/zodiac';

function Landing() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <Banner />
      <Sticky/>
      <Zodiac />
      <Testimonial/>
    </div>
  );
}

export default Landing