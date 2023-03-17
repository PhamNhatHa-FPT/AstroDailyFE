import React from "react";
import styles from "../Dashboard/dashboard.module.css";
import { FcSearch } from "react-icons/fc";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function HouseManagement() {
  const [listHouse, setListHouse] = useState(null);
  const [loadingInfo, setlLoadingInfo] = useState(null);
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      text.trim()
        ? axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/House/${text.trim()}`,
          })
            .then((res) => {
              setListHouse(res.data);
            })
            .catch((err) => {
              console.log(err);
            })
        : axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/House`,
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
  return (
    <div className={styles.container}>
      <div className={styles.col_dash}>
        <div className={styles.white_box}>
          <div style={{ flex: "1 1 0%" }}>
            <div className={styles.list_header}>
              <div className={styles.main_title}>
                <h3>House Management</h3>
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
                  <th
                    style={{ textAlign: "left", borderRadius: "30px 0 0 30px" }}
                  >
                    User Name
                  </th>
                  <th style={{ width: 120 }}>Name</th>
                  <th style={{ width: 120 }}>Name</th>
                  <th style={{ width: 120, borderRadius: "0px 30px 30px 0px" }}>
                    Name
                  </th>
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
                                  <div className={styles.align_items_center}>
                                    <p>{houses.name}</p>
                                  </div>
                                </th>
                                <td>
                                  <p>{houses.name}</p>
                                </td>
                                <td>
                                  <p>{houses.name}</p>
                                </td>
                                <td>
                                  <p>{houses.name}</p>
                                </td>
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
      {/* <div className={styles.col_dash}>
        <div className={styles.white_box_5}>
          <UserTrip userList={users.trips} />
        </div>
      </div> */}
      <NotificationContainer />
    </div>
  );
}

export default HouseManagement;
