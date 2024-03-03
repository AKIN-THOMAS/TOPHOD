import styles from "@/styles/UserDashboard.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/assets/logo.svg";
import { ToggleSide } from "@/@types";
import { useState } from "react";

const Sidebar = ({ toggleSidebar }: ToggleSide) => {
  const [active, setActive] = useState(false);
  return (
    <div className={toggleSidebar ? styles.sidebarHide : styles.sidebar}>
      <div className={styles.dashLogo}>
        <Link href="/">
          <Image className={styles.logoImg} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={styles.dashItems}>
        <a href={"/dashboard"}>
          <div className={styles.item}>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </a>
        <Link href={""}>
          <div className={styles.item}>
            <div>
              <p>Team Leaders</p>
            </div>
          </div>
        </Link>
        <a href={"/dashboard/annoucements"}>
          <div className={styles.item_hignlight}>
            <div>
              <p>Announcement</p>
            </div>
          </div>
        </a>
        <Link href={"/dashboard/att"}>
          <div className={styles.item}>
            <div>
              <p>Attendance</p>
            </div>
          </div>
        </Link>
        <Link href={"/dashboard/change"}>
          <div className={styles.item}>
            <div>
              <p>Change Password</p>
            </div>
          </div>
        </Link>
        <Link href={"/dashboard/update"}>
          <div className={styles.item}>
            <div>
              <p>Update Information</p>
            </div>
          </div>
        </Link>
        <div className={styles.start_playing}>
          <div>
            <div className={styles.quizes}>
              <p>
                We are more than a thousand men, we are greater than a nation!!
              </p>
            </div>
            <div className={styles.people}>
              <p>One Spirit One Sound</p>
            </div>
            <div className={styles.start_btn}>
              <button>IT Team</button>
            </div>
          </div>
        </div>
        <div>
          <Link href={""}>
            <div className={styles.item}>
              <div>
                {/* <Image src={logout} alt="home" /> */}
                <p>Logout</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
