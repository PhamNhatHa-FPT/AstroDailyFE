import { FcHighPriority } from "react-icons/fc";
import { MdAdminPanelSettings } from "react-icons/md";
import styles from "../../Dashboard/dashboard.module.css";

function TableAdmin({ loadingInfo, userList, setUsername, setHandleGrant }) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ textAlign: "left", borderRadius: "30px 0 0 30px" }}>
            User Name
          </th>
          <th style={{ width: 120 }}>Country</th>
          <th style={{ width: 120 }}>Grant</th>
          <th style={{ width: 120, borderRadius: "0px 30px 30px 0px" }}>
            Block
          </th>
          {/* <th style={{ width: 120, borderRadius: "0px 30px 30px 0px" }}>
            Delete
          </th> */}
        </tr>
      </thead>
      <tbody>
        {loadingInfo ? (
          <tr>
            <td style={{ textAlign: "end" }}>
            </td>
          </tr>
        ) : (
          userList &&
          userList.map((listUser, index) => {
            return (
              <tr key={index}>
                <th onClick={() => setUsername(listUser.username)}>
                  <div className={styles.align_items_center}>
                    <div style={{ marginRight: "20px" }}>
                      <img
                        src={
                          listUser.profileImageUrl === "" ||
                          listUser.profileImageUrl === null
                            ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                            : listUser.profileImageUrl
                        }
                        alt="img"
                      />
                    </div>
                    <p>{listUser.username}</p>
                  </div>
                </th>
                <td>
                  {listUser.country !== null && listUser.country !== ""
                    ? listUser.country
                    : "Việt Nam"}
                </td>
                <td>
                  {listUser.roles?.length === 2 ? (
                    <button
                    >
                      <MdAdminPanelSettings color="#1E82C8" />
                    </button>
                  ) : (
                    <button
                      style={{ opacity: "50%" }}
                    >
                      <MdAdminPanelSettings color="#1E82C8" />
                    </button>
                  )}
                </td>
                <td>
                  {listUser.status === "ACTIVE" ? (
                    <button
                      style={{ opacity: "50%" }}
                    >
                      <FcHighPriority />
                    </button>
                  ) : (
                    <button
                    >
                      <FcHighPriority />
                    </button>
                  )}
                </td>
                {/* <td>
                  <button>
                    <ImBin color="#F44336" />
                  </button>
                </td> */}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}

export default TableAdmin;
