import React from "react";
import "./testimonial.css";
function Testimonial() {
  return (
    <div className="testimonial_section">
      <span
        style={{
          color: "#313453",
          fontFamily: "Philosopher, Helvetica, Arial, Lucida, sans-serif",
          fontSize: 54,
          fontWeight: "bold",
        }}
      >
        Testimonial
      </span>
      <div className="testimonial_row_10">
        <div className="testimonial_passthrough">
          <div className="testimonial_image">
            <span>
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/portrait-square-02.jpg"
                alt=""
              />
            </span>
          </div>
          <div className="testimonial_text_13">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
