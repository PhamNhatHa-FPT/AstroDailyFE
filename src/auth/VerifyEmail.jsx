import { useAuthValue } from "./AuthContext";
import { useState, useEffect } from "react";
import { sendEmailVerification } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../configs/firebase.configs";
import AppButton from "../common/button";
function VerifyEmail() {
  let history = useHistory();
  const { currentUser } = useAuthValue();
  const [time, setTime] = useState(60);
  const { timeActive, setTimeActive } = useAuthValue();

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser
        ?.reload()
        .then(() => {
          if (currentUser?.emailVerified) {
            clearInterval(interval);
            history.push("/login");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }, 1000);
  }, [history, currentUser]);

  useEffect(() => {
    let interval = null;
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeActive(false);
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive]);

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setTimeActive(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <div className="section_sticky">
        <div className="row_0 row">
          <div className="column_0 column">
            <div className="image_sticky">
              <span>
                <img
                  decoding="async"
                  src="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrology-illustrations-05-copy.png"
                  alt=""
                />
              </span>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>Verify your Email Address</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  <strong>A Verification email has been sent to:</strong>
                  <br />
                  <span>{currentUser?.email}</span>
                </p>
                <span>
                  Follow the instruction in the email to verify your account
                </span>
              </div>
              <AppButton
                children={`Resend Email ${timeActive && time}`}
                btnType="button_1"
                htmlType="a"
                onClick={resendEmailVerification}
                disabled={timeActive}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
