import React from "react";
import styles from "../Dashboard/dashboard.module.css";
import { FcSearch } from "react-icons/fc";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import AppInput from "../../../common/input";
import AppButton from "../../../common/button";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { getQuote } from "../../../store/actions/user.action";
function QuoteManagement() {
  const dispatch = useDispatch();
  const [listHouse, setListHouse] = useState(null);
  // const [loadingInfo, setlLoadingInfo] = useState(null);
  const [text, setText] = useState("");
  const [name, setName] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    script:"",
    status: "save",
  });
  //const { quote } = useSelector((state) => state.user);

      useEffect(() => {
        dispatch(getQuote());
        // eslint-disable-next-line
      }, []);
  const update = (data) => {
    setName(data.id);
    setFormData({
      id: data.id,
      script:data.script,
      status: "update",
    });
  };
  const Delete = (data) => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}/Quote/${data.id}`,
    })
      .then((res) => {
        setListHouse(listHouse.filter((f) => f.id !== data.id));
        NotificationManager.success("success");
      })
      .catch((err) => {
        console.log(err);
        NotificationManager.error("error");
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/Quote/`,
      })
        .then((res) => {
          setListHouse(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData();
  }, [text]);
  function handleChanges(key) {
    return (evt) => {
      setFormData({
        ...formData,
        [key]: evt.target.value,
      });
    };
  }
  const token = JSON.parse(localStorage.getItem("token"));
  const submit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    axios({
      method: formData.status !== "update" ? "POST" : "PUT",
      url:
        formData.status !== "update"
          ? `${process.env.REACT_APP_API_URL}/Quote/create`
          : `${process.env.REACT_APP_API_URL}/Quote/${name}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { script: formData.script },
    })
      .then((res) => {
        let indexUpdate = "";
        indexUpdate = listHouse.findIndex((data) => data.id === formData.id);
        formData.status !== "update"
          ? setListHouse([...[res.data], ...listHouse])
          : (listHouse[indexUpdate] = {
              id: formData.id,
              script: formData.script,
            });

        setFormData({
          id: "",
          script: "",
          status: "save",
        });
        setLoading(false);
        NotificationManager.success("success");
      })
      .catch((err) => {
        setLoading(false);
        NotificationManager.error("error");
      });
    // dispatch(getSelf(formData, setFormData, setPlace, setText, setLoading));
  };
  return (
    <div className={styles.container}>
      <div className={styles.col_7}>
        <div className={styles.white_box}>
          <div style={{ flex: "1 1 0%" }}>
            <div className={styles.list_header}>
              <div className={styles.main_title}>
                <h3>Quote Management</h3>
              </div>
              <div className={styles.search_field}>
                <form>
                  <div>
                    <input
                      type="text"
                      placeholder="Search here..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ border: "none", background: "transparent" }}
                  >
                    <FcSearch />
                  </button>
                </form>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th style={{ borderRadius: "30px 0 0 30px" }}>ID</th>
                  <th>script</th>
                  <th style={{ borderRadius: "0px 30px 30px 0px" }}>action</th>
                </tr>
              </thead>
              <tbody>
                {false ? (
                  <tr>
                    <td style={{ textAlign: "end" }}></td>
                  </tr>
                ) : (
                  listHouse && (
                    <>
                      {listHouse.length > 0 ? (
                        <>
                          {listHouse.map((quote, index) => {
                            return (
                              <tr key={index}>
                                <th>
                                  <p>{quote.id}</p>
                                </th>
                                <th>
                                  <p>{quote.script}</p>
                                </th>
                                <th>
                                  <div style={{ display: "flex" }}>
                                    <AppButton
                                      children="Update"
                                      btnType="button_2"
                                      isSizeLarge={true}
                                      htmlType="a"
                                      onClick={() => update(quote)}
                                    />
                                    <div style={{ padding: "5px" }}></div>
                                    <AppButton
                                      children="Delete"
                                      btnType="button_1"
                                      isSizeLarge={true}
                                      htmlType="a"
                                      onClick={() => Delete(quote)}
                                    />
                                  </div>
                                </th>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        "trống trơn"
                      )}
                    </>
                  )
                )}
              </tbody>
            </table>
          </div>
          {/* <Pagination value={page} range={totalPages} onChange={setPage} /> */}
        </div>
      </div>
      <div className={styles.col_5}>
        <div className={styles.white_box_5}>
          <div className="dailyPrediction_text_21">
            <form className="et_pb_contact_form clearfix" onSubmit={submit}>
              <AppInput
                type="text"
                children="Script"
                onChange={handleChanges("script")}
                value={formData.script}
              />
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
                    children={formData.status !== "update" ? "SAVE" : "UPDATE"}
                    btnType="button_1"
                    disabled={Loading}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default QuoteManagement;
