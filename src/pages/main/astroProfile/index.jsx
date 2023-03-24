import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardService from "../../../common/cardService";
import DailyPrediction from "../../../components/dailyPrediction";
import TextInner from "../../../components/textInner";
import { getAstroProfile } from "../../../store/actions/user.action";

function AstroProfile() {
  const dispatch = useDispatch();
  const { user, astroProfile, selfAstroProfile } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getAstroProfile(user));
    // eslint-disable-next-line
  }, []);
  const zodiac = {
    img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-01.png",
    place: "image_1",
    name: "Aquarius",
    symbol: "The water bearer",
    dates: "January 20 – February 17 for 2023",
    element: "Air",
    modality: "Fixed",
    rulingPlanet: "Uranus",
    traits: [
      "Purposefully esoteric",
      "No feelings, just concepts",
      "Actually believes in conspiracy theories",
      "More in love with humanity as a whole than individuals",
      "Always feels like an outcast",
      "Fetishizes personal freedom",
    ],
    famous: "Angela Davis",
    best: "Professional dilettante",
    about: {
      personality:
        "Intelligence, to them, means the ability to formulate the most unpopular opinion possible. If they were white sheep, they’d dye their wool black just to prove a point. They are destined to live their lives in direct opposition to the current world. In fact, they are world-builders. An entire universe exists in their heads, and this universe adheres to its own set of logic that doesn’t map onto reality. They aren't anarchists. They are utopians. They are not cold. They are rational. To them, emotions are just holes in their idealistic vessels. Why succumb to sensitivity when there is so much knowledge to acquire, so many problems to be solved, worlds to invent?",
      weaknesses:
        "Aquarians are always running little tests. They live their lives as one big science experiment, using the element of surprise to collect reactions and construct theories about the intricacies of human nature. They are walking abstract art pieces, shattering traditional perspectives with their complete disregard for convention. They are martyrs to the cause of humanity. Freedom is their only demand.",
    },
  };

  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="Seft" htmlType="h1" />
      <DailyPrediction profile={true} />
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
      {selfAstroProfile ? (
        <>
          {selfAstroProfile && (
            <div className="testimonial_section">
              <img
                src={selfAstroProfile.wheel}
                alt=""
                style={{ width: "40%" }}
              />
              <h1
                style={{
                  color: "#313453",
                  fontFamily:
                    "Philosopher, Helvetica, Arial, Lucida, sans-serif",
                  fontSize: 54,
                  fontWeight: "bold",
                }}
              >
                {selfAstroProfile.profile.name}
              </h1>
              <div className="testimonial_row_10">
                <div className="testimonial_passthrough">
                  <div className="testimonial_image">
                    <span>
                      <img src={zodiac.img} alt="" />
                    </span>
                  </div>
                  <table
                    style={{
                      width: "100%",
                      color: "aliceblue",
                      border: "1px solid",
                    }}
                  >
                    <tr>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        Birthdate
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        CityName
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        Long
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        RealLat
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        RealLong
                      </th>
                    </tr>
                    <tr>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {/* {selfAstroProfile.profile.birthdate.date} */}
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {selfAstroProfile.profile.cityName}
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {selfAstroProfile.profile.long}
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {selfAstroProfile.profile.realLat}
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {selfAstroProfile.profile.realLong}
                      </th>
                    </tr>
                  </table>
                  <div
                    className="testimonial_text_13"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <div style={{ width: "50%", border: "1px solid" }}>
                      <div style={{ color: "#fe7f5c" }}>Elements</div>
                    </div>
                    <div style={{ width: "50%" }}>
                      {selfAstroProfile.elements.map((z, i) => (
                        <div style={{ border: "1px solid" }} key={i}>
                          {z.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="testimonial_text_13"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <div style={{ width: "50%", border: "1px solid" }}>
                      <div style={{ color: "#fe7f5c" }}>Housecusps</div>
                    </div>
                    <div style={{ width: "50%", border: "1px solid" }}>
                      {selfAstroProfile.housecusps.map((z, i) => (
                        <div style={{ border: "1px solid" }} key={i}>
                          {z.houseName}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="testimonial_text_13"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <div style={{ width: "50%", border: "1px solid" }}>
                      <div style={{ color: "#fe7f5c" }}>ZodiacPoints</div>
                    </div>
                    <div style={{ width: "50%", border: "1px solid" }}>
                      {selfAstroProfile.zodiacPoints.map((z, i) => (
                        <div style={{ border: "1px solid" }} key={i}>
                          {z.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial_text_13">
                    {selfAstroProfile.selfPlanet &&
                      selfAstroProfile?.selfPlanet.map((s, i) => (
                        <div key={i}>
                          <h3 style={{ fontSize: "22px", color: "#fe7f5c" }}>
                            {s.name}
                          </h3>
                          <p>{s.description}</p>
                        </div>
                      ))}
                    {selfAstroProfile.selfZodiac &&
                      selfAstroProfile?.selfZodiac.map((s, i) => (
                        <div key={i}>
                          <h3 style={{ fontSize: "22px", color: "#fe7f5c" }}>
                            {s.name}
                          </h3>
                          <p>{s.description}</p>
                        </div>
                      ))}
                    {selfAstroProfile.selfHouse &&
                      selfAstroProfile?.selfHouse.map((s, i) => (
                        <div key={i}>
                          <h3 style={{ fontSize: "22px", color: "#fe7f5c" }}>
                            {s.name}
                          </h3>
                          <p>{s.description}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {astroProfile && (
            <div className="testimonial_section">
              <img src={astroProfile.Wheel} alt="" style={{ width: "40%" }} />
              <h1
                style={{
                  color: "#313453",
                  fontFamily:
                    "Philosopher, Helvetica, Arial, Lucida, sans-serif",
                  fontSize: 54,
                  fontWeight: "bold",
                }}
              >
                {astroProfile.Name}
              </h1>
              <div className="testimonial_row_10">
                <div className="testimonial_passthrough">
                  <div className="testimonial_image">
                    <span>
                      <img src={zodiac.img} alt="" />
                    </span>
                  </div>
                  <table
                    style={{
                      width: "100%",
                      color: "aliceblue",
                      border: "1px solid",
                    }}
                  >
                    <tr>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        Birthdate
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        CityName
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        Long
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        RealLat
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        RealLong
                      </th>
                    </tr>
                    <tr>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {/* {selfAstroProfile.profile.Birthdate} */}
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {astroProfile.CityName}
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {astroProfile.Long}
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {astroProfile.RealLat}
                      </th>
                      <th
                        style={{
                          width: "50%",
                          border: "1px solid",
                          color: "#FFF",
                        }}
                      >
                        {astroProfile.RealLong}
                      </th>
                    </tr>
                  </table>
                  <div
                    className="testimonial_text_13"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <div style={{ width: "50%", border: "1px solid" }}>
                      <div style={{ color: "#fe7f5c" }}>Elements</div>
                    </div>
                    <div style={{ width: "50%" }}>
                      {astroProfile.Elements.$values.map((z, i) => (
                        <div style={{ border: "1px solid" }} key={i}>
                          {z.Name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="testimonial_text_13"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <div style={{ width: "50%", border: "1px solid" }}>
                      <div style={{ color: "#fe7f5c" }}>Housecusps</div>
                    </div>
                    <div style={{ width: "50%", border: "1px solid" }}>
                      {astroProfile.Housecusps.$values.map((z, i) => (
                        <div style={{ border: "1px solid" }} key={i}>
                          HouseName
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="testimonial_text_13"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <div style={{ width: "50%", border: "1px solid" }}>
                      <div style={{ color: "#fe7f5c" }}>ZodiacPoints</div>
                    </div>
                    {/* <div style={{ width: "50%", border: "1px solid" }}>
                  {astroProfile.ZodiacPoints.$values.map((z, i) => (
                    <div style={{ border: "1px solid" }} key={i}>
                      {z.name}
                    </div>
                  ))}
                </div> */}
                  </div>
                  <div className="testimonial_text_13">
                    {astroProfile.SelfPlanets &&
                      astroProfile?.SelfPlanets.$values.map((s, i) => (
                        <div key={i}>
                          <h3 style={{ fontSize: "22px", color: "#fe7f5c" }}>
                            {s.Name}
                          </h3>
                          <p>{s.Description}</p>
                        </div>
                      ))}
                    {astroProfile.SelfZodiacs &&
                      astroProfile?.SelfZodiacs.$values.map((s, i) => (
                        <div key={i}>
                          <h3 style={{ fontSize: "22px", color: "#fe7f5c" }}>
                            {s.Name}
                          </h3>
                          <p>{s.Description}</p>
                        </div>
                      ))}
                    {astroProfile.SelfHouses &&
                      astroProfile?.SelfHouses.$values.map((s, i) => (
                        <div key={i}>
                          <h3 style={{ fontSize: "22px", color: "#fe7f5c" }}>
                            {s.Name}
                          </h3>
                          <p>{s.Description}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AstroProfile;
