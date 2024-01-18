import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import styles from "@/styles/UserDashboard.module.css";
import { CgMenuLeft } from "react-icons/cg";
import { ToggleSide2 } from "@/@types";
import { Button } from "@chakra-ui/react";

const AdminNav = ({ setToggleSidebar }: ToggleSide2) => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Button onClick={() => setToggleSidebar()}>
          <CgMenuLeft className={styles.sidebar_visible} />
        </Button>
        <h1>Admin Dashboard</h1>
      </div>
      <div className={styles.user_wrapper}>
        <div className={styles.img}>
          <IoPersonCircleOutline />
        </div>
        <div>
          <h5>Choir Management</h5>
        </div>
      </div>
    </header>
  );
};

export default AdminNav;
