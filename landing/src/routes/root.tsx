import { LatBar } from "./latBar/LatBar";
import { Outlet } from "react-router-dom";

import styles from "./root.module.css";
import { TopBar } from "./topBar/TopBar";

export default function Root() {
  return (
    <>
      <div className="">
        <div className={styles.sidebar}>
          <LatBar />
        </div>

        <div className={styles.top}>
          <TopBar />
        </div>

        <div className={styles.view} id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
