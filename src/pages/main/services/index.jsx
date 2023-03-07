import React from "react";
import CardService from "../../../common/cardService";
import TextInner from "../../../components/textInner";

function Services() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="Services" htmlType="h1" />
      <div
        className="et_pb_section et_pb_section_1 et_section_regular"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="et_pb_row et_pb_row_1">
          <CardService
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            textInner="Horoscope"
            img="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrologist-illustrations-15.png"
          />
          <CardService
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            textInner="Horoscope"
            img="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrologist-illustrations-16.png"
          />
          <CardService
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            textInner="Horoscope"
            img="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrologist-illustrations-14.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
