import "./sticky.css";

function Sticky({ h2, h3, p, vi, Children }) {
  return (
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
              <h2>Transits & Orbs</h2>
            </div>
          </div>
          <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <p>
                Transits are time-based patterns that take place at regular
                intervals, based on your chart. An orb is a buffer zone around
                an angle to define what we count as an aspect.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row_1 row">
        <div className="column_1">
          <div className="image_sticky_1" style={{ textAlign: "center" }}>
            <span className="et_pb_image_wrap ">
              <img
                decoding="async"
                src="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrology-illustrations-10.png"
                alt=""
                title="astrology-illustrations-10"
              />
            </span>
          </div>
        </div>
        {/* <div className="column_2 column">
          <div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h3>{h3}</h3>
              <h2>{vi}</h2>
              <p>{Children}</p>
            </div>
          </div>
          <div className="et_pb_module et_pb_blurb et_pb_blurb_0  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
            <div className="et_pb_blurb_content">
              <div className="et_pb_main_blurb_image">
                <span className="et_pb_image_wrap et_pb_only_image_mode_wrap">
                  <img
                    decoding="async"
                    src="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrologist-icon-01.png"
                    alt=""
                    className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-animated"
                  />
                </span>
              </div>
              <div className="et_pb_blurb_container">
                <h4 className="et_pb_module_header">
                  <span>Excepteur sint occaecat cupidatat non proide</span>
                </h4>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sticky;
