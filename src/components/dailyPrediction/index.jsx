import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AppButton from "../../common/button";
import AppInput from "../../common/input";
import { getSelf, getSelfAstroProfile } from "../../store/actions/user.action";
import "./dailyPrediction.css";

function DailyPrediction({ profile }) {
  const dispatch = useDispatch();
  const [place, setPlace] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    place_id: 0,
  });
  useEffect(() => {
    const getPlace = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/Place?place=${text}`,
      })
        .then((res) => {
          setPlace(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getPlace();
    // eslint-disable-next-line
  }, [text]);
  function handleChanges(key) {
    return (evt) => {
      setFormData({
        ...formData,
        [key]: evt.target.value,
      });
    };
  }
  const submit = async (evt) => {
    evt.preventDefault();
    profile
      ? dispatch(
          getSelfAstroProfile(
            formData,
            setFormData,
            setPlace,
            setText,
            setLoading
          )
        )
      : dispatch(getSelf(formData, setFormData, setPlace, setText, setLoading));
  };
  return (
    <div className="dailyPrediction_section">
      <div className="dailyPrediction_gutters3">
        <div className="dailyPrediction_column_13">
          <div className="dailyPrediction_text_18">
            <h2>Daily Prediction</h2>
          </div>
          <div className="dailyPrediction_image_19">
            <span>
              <img
                src="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrologist-illustrations-26.png"
                alt=""
              />
            </span>
          </div>
          <div className="dailyPrediction_text_19">
            <p>
              Generate your full natal chart and get a personalized horoscope
              reading by email every Monday, for free.
            </p>
          </div>
        </div>
        <div className="dailyPrediction_column_14">
          <div className="dailyPrediction_image_20">
            <span>
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2020/11/astrologist-illustrations-06.png"
                alt=""
              />
            </span>
          </div>
          <div className="dailyPrediction_text_20">
            <h4>Aries Jun 22-Jul 20</h4>
            <h3>Taurus</h3>
          </div>
          <div className="dailyPrediction_text_21">
            <form className="et_pb_contact_form clearfix" onSubmit={submit}>
              <AppInput
                type="text"
                children="Name"
                onChange={handleChanges("name")}
                value={formData.name}
              />
              <div style={{ display: "flex" }}>
                <AppInput
                  style={{ width: "50%" }}
                  type="date"
                  children="Date"
                  onChange={handleChanges("date")}
                  value={formData.date}
                />
                <div style={{ padding: "10px" }}></div>
                <AppInput
                  style={{ width: "50%" }}
                  type="time"
                  children="Time"
                  onChange={handleChanges("time")}
                  value={formData.time}
                />
              </div>
              <AppInput
                type="text"
                children="Place"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              {place && (
                <div className="input-group">
                  <select
                    className="input"
                    name="majorid"
                    onChange={handleChanges("place_id")}
                    value={formData.place_id}
                    required
                  >
                    {place.length &&
                      place.map((place, index) => (
                        <option value={place.id} key={index}>
                          {place.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}
              {Loading ? (
                <div className="et_contact_bottom_container">
                  <AppButton
                    children="Loading ..."
                    btnType="button_1"
                    style={{ opacity: 0.7 }}
                    disabled={Loading}
                  />
                </div>
              ) : (
                <div className="et_contact_bottom_container">
                  <AppButton
                    children="Read more"
                    btnType="button_1"
                    disabled={Loading}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyPrediction;
