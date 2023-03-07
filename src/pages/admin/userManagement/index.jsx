import { FcSearch } from "react-icons/fc";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import avatar from "../assets/image/21-avatar-flat (1).gif";
import location from "../assets/image/18-location-pin-flat.gif";
import globe from "../assets/image/27-globe-flat.gif";
import photo from "../assets/image/54-photo-picturelandscape-gallery-flat.gif";
import styles from "../Dashboard/dashboard.module.css";
// import ProfileUser from "./profileUser";
// import Pagination from "./pagination";
// import UserTrip from "./userTrip";
// import TableAdmin from "./table";
function UserManagement() {
  return (
    <div className={styles.container}>
      <div className={styles.col_dash}>
        <div className={styles.quick}>
          <div className={styles.single_quick}>
            <div className={styles.icon}>
              <img src={avatar} alt="img" />
            </div>
            <div className={styles.count_content}>
              <h3>
                <span>35</span>
              </h3>
              <p>Users</p>
            </div>
          </div>
          <div className={styles.single_quick}>
            <div className={styles.icon}>
              <img src={globe} alt="img" />
            </div>
            <div className={styles.count_content}>
              <h3>
                <span>65</span>
              </h3>
              <p>Trips</p>
            </div>
          </div>
          <div className={styles.single_quick}>
            <div className={styles.icon}>
              <img src={location} alt="img" />
            </div>
            <div className={styles.count_content}>
              <h3>
                <span>105</span>
              </h3>
              <p>VisitPlaces</p>
            </div>
          </div>
          <div className={styles.single_quick}>
            <div className={styles.icon}>
              <img src={photo} alt="img" />
            </div>
            <div className={styles.count_content}>
              <h3>
                <span>130</span>
              </h3>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.col_7}>
        <div className={styles.white_box}>
          <div style={{ flex: "1 1 0%" }}>
            <div className={styles.list_header}>
              <div className={styles.main_title}>
                <h3>User Management</h3>
              </div>
              <div className={styles.search_field}>
                <form>
                  <div>
                    <input type="text" placeholder="Search here..." />
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
            {/* <TableAdmin
              loadingInfo={loadingInfo}
              userList={userList}
              setUsername={setUsername}
              setHandleGrant={setHandleGrant}
            /> */}
          </div>
          {/* <Pagination value={page} range={totalPages} onChange={setPage} /> */}
        </div>
      </div>
      <div className={styles.col_5}>
        {/* {users == null ? (
          <></>
        ) : loading ? (
          <div className={styles.white_box_5}>
            <Load />
          </div>
        ) : (
          <div className={styles.white_box_5}>
            <ProfileUser users={users} />
          </div>
        )} */}
        <div className={styles.white_box_5}></div>
      </div>
      <div className={styles.col_dash}>
        <div className={styles.white_box_5}>
          {/* <UserTrip userList={users.trips} /> */}
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default UserManagement;
