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
function ZodiacManagement() {
  const [listHouse, setListHouse] = useState(null);
  const [loadingInfo, setlLoadingInfo] = useState(null);
  const [text, setText] = useState("");
  const [name, setName] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    status: "save",
  });
  const update = (data) => {
    setName(data.name);
    setFormData({
      id: data.id,
      name: data.name,
      description: data.description,
      status: "update",
    });
  };
  const Delete = (data) => {
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}/Zodiac/${data.name}/delete`,
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
      text.trim()
        ? axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/Zodiac/${text.trim()}`,
          })
            .then((res) => {
              setListHouse(res.data);
            })
            .catch((err) => {
              console.log(err);
            })
        : axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/Zodiac`,
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
          ? `${process.env.REACT_APP_API_URL}/Zodiac/`
          : `${process.env.REACT_APP_API_URL}/Zodiac/${name}/update`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { name: formData.name, description: formData.description },
    })
      .then((res) => {
        let indexUpdate = "";
        indexUpdate = listHouse.findIndex((data) => data.id === formData.id);
        formData.status !== "update"
          ? setListHouse([...[res.data], ...listHouse])
          : (listHouse[indexUpdate] = {
              id: formData.id,
              name: formData.name,
              description: formData.description,
            });

        setFormData({
          id: "",
          name: "",
          description: "",
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
                <h3>Zodiac Management</h3>
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
                  <th>Name</th>
                  <th>description</th>
                  <th style={{ borderRadius: "0px 30px 30px 0px" }}>action</th>
                  {/* <th style={{ width: 120, borderRadius: "0px 30px 30px 0px" }}>
            Delete
          </th> */}
                </tr>
              </thead>
              <tbody>
                {loadingInfo ? (
                  <tr>
                    <td style={{ textAlign: "end" }}></td>
                  </tr>
                ) : (
                  listHouse && (
                    <>
                      {listHouse.length > 0 ? (
                        <>
                          {listHouse.map((houses, index) => {
                            return (
                              <tr key={index}>
                                <th>
                                  {/* <div className={styles.align_items_center}>
                                    
                                  </div> */}
                                  <p>{houses.id}</p>
                                </th>
                                <th>
                                  <p>{houses.name}</p>
                                </th>
                                <th>
                                  <p>{houses.description}</p>
                                </th>
                                <th>
                                  <div style={{ display: "flex" }}>
                                    <AppButton
                                      children="Update"
                                      btnType="button_2"
                                      isSizeLarge={true}
                                      htmlType="a"
                                      onClick={() => update(houses)}
                                    />
                                    <div style={{ padding: "5px" }}></div>
                                    <AppButton
                                      children="Delete"
                                      btnType="button_1"
                                      isSizeLarge={true}
                                      htmlType="a"
                                      onClick={() => Delete(houses)}
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
              <div style={{ display: "flex" }}>
                <AppInput
                  type="text"
                  children="Name"
                  onChange={handleChanges("name")}
                  value={formData.name}
                />
              </div>
              <AppInput
                type="text"
                children="Description"
                onChange={handleChanges("description")}
                value={formData.description}
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

export default ZodiacManagement;
