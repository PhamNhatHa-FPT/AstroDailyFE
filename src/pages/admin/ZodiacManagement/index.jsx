import React from "react";
import styles from "../Dashboard/dashboard.module.css";
import { FcSearch } from "react-icons/fc";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../configs/firebase.configs";
function ZodiacManagement() {
  // const [listHouse, setListHouse] = useState(null);
  const [loadingInfo, setlLoadingInfo] = useState(null);
  // const [text, setText] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     text.trim()
  //       ? axios({
  //           method: "GET",
  //           url: `${process.env.REACT_APP_API_URL}/Zodiac/${text.trim()}`,
  //         })
  //           .then((res) => {
  //             setListHouse(res.data);
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           })
  //       : axios({
  //           method: "GET",
  //           url: `${process.env.REACT_APP_API_URL}/Zodiac`,
  //         })
  //           .then((res) => {
  //             setListHouse(res.data);
  //           })
  //           .catch((err) => {
  //             console.error(err);
  //           });
  //   };
  //   fetchData();
  // }, [text]);
      const [zodiac, setZodiac] = useState("");
      const [zodiacs, setZodiacs] = useState([]);
      const addZodiac = async (e) => {
        e.preventDefault();
        try {
          const docRef = await addDoc(collection(db, "/zodiac"), {
            zodiac: zodiac,
          });
          console.log(docRef.id);
        } catch (e) {
          console.error(e);
        }
      };

      const fetchZodiac = async () => {
        await getDocs(collection(db, "/zodiac")).then((querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setZodiacs(newData);
        });
      };

      useEffect(() => {
        fetchZodiac();
      }, []);
 
  return (
    <div className={styles.container}>
      <div className={styles.col_dash}>
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
                      // value={text}
                      // onChange={(e) => setText(e.target.value)}
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
                  <th>Description</th>
                  <th style={{ width: 120, borderRadius: "0px 30px 30px 0px" }}>
                    Status
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
                  zodiacs && (
                    <>
                      {zodiacs.length > 0 ? (
                        <>
                          {zodiacs.map((zodiac, index) => {
                            return (
                              <tr key={index}>
                                <th>
                                  <div className={styles.align_items_center}>
                                    <p>{zodiac.name}</p>
                                  </div>
                                </th>
                                <td>
                                  <p>{zodiac.description}</p>
                                </td>
                                <td>
                                  <p>{zodiac.status ?"true":"false"}</p>
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
      <NotificationContainer />
    </div>
  );
}

export default ZodiacManagement;
