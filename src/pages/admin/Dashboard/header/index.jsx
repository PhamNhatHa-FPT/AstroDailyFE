import { Link } from "react-router-dom";
import styles from "./headerAmin.module.css";
export default function HeaderAdmin() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.menu}>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileList}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to={`/`}>
                <div className={styles.profileIcon}>
                  <img
                    className="w_km"
                    alt="profile"
                    src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
                  />
                </div>
                <div>
                  <span>username</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
