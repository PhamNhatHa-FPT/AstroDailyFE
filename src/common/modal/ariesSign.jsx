import React from "react";
// import { useDispatch } from "react-redux";
// import { CLOSE_MODAL } from "../../store/constants/modal.const";
import "./modal.css"
const ModalSign = ({ zodiac }) => {
//   const dispatch = useDispatch();
//   const closeModal = () => {
//     dispatch({
//       type: CLOSE_MODAL,
//     });
//   };

  return (
    <div className="testimonial_section">
      <h1
        style={{
          color: "#313453",
          fontFamily: "Philosopher, Helvetica, Arial, Lucida, sans-serif",
          fontSize: 54,
          fontWeight: "bold",
        }}
      >
        {zodiac.name}
      </h1>
      <div className="testimonial_row_10">
        <div className="testimonial_passthrough">
          <div className="testimonial_image">
            <span>
              <img src={zodiac.img} alt="" />
            </span>
          </div>
          <table
            style={{ width: "100%", color: "aliceblue", border: "1px solid" }}
          >
            <tr>
              <th>SYMBOL</th>
              <th>DATES</th>
              <th>ELEMENT</th>
              <th>MODALITY</th>
              <th>RULING PLANET</th>
            </tr>
            <tr>
              <th>{zodiac.symbol}</th>
              <th>{zodiac.dates}</th>
              <th>{zodiac.element}</th>
              <th>{zodiac.modality}</th>
              <th>{zodiac.rulingPlanet}</th>
            </tr>
          </table>
          <div
            className="testimonial_text_13"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div style={{ width: "50%", border: "1px solid" }}>
              <div style={{ color: "#fe7f5c" }}>Traits</div>
            </div>
            <div style={{ width: "50%" }}>
              {zodiac.traits.map((z, i) => (
                <div style={{ border: "1px solid" }} key={i}>
                  {z}
                </div>
              ))}
            </div>
          </div>
          <div
            className="testimonial_text_13"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div style={{ width: "50%", border: "1px solid" }}>
              <div style={{ color: "#fe7f5c" }}>Famous</div>
            </div>
            <div style={{ width: "50%", border: "1px solid" }}>
              {zodiac.famous}
            </div>
          </div>
          <div
            className="testimonial_text_13"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div style={{ width: "50%", border: "1px solid" }}>
              <div style={{ color: "#fe7f5c" }}>Best</div>
            </div>
            <div style={{ width: "50%", border: "1px solid" }}>
              {zodiac.best}
            </div>
          </div>
          <div className="testimonial_text_13">
            <h3 style={{ fontSize: "22px", color: "#fe7f5c" }}>
              What is the personality of an {zodiac.name}?
            </h3>
            <p>{zodiac.about.personality}</p>
            <h3 style={{ fontSize: "22px", color: "#fe7f5c" }}>
              What are a {zodiac.name}'s weaknesses?
            </h3>
            <p>{zodiac.about.weaknesses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSign;
