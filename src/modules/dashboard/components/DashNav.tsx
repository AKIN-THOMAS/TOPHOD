import React, { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import styles from "@/styles/UserDashboard.module.css";
import { CgMenuLeft } from "react-icons/cg";
import { ToggleSide2, UserProfileProps } from "@/@types";
import { Button } from "@chakra-ui/react";
import { UserProfile } from "@/http";

const DashNav = ({ setToggleSidebar }: ToggleSide2) => {
  const [profileData, setProfileData] = useState<UserProfileProps | null>(null);
  useEffect(() => {
    getProfile()
  }, []);
  const getProfile = async () => {
    const profileResponse = await UserProfile()
    setProfileData(profileResponse?.responseData?.data?.profile || null)
    console.log(profileData?.middlename)
  }
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Button onClick={() => setToggleSidebar()}>
          <CgMenuLeft className={styles.sidebar_visible} />
        </Button>
        <h1>User Dashboard</h1>
      </div>
      <div className={styles.user_wrapper}>
        <div className={styles.img}>
          <IoPersonCircleOutline />
        </div>
        <div className={styles.details}>
          <div className={styles.names}>
            <h5>{profileData?.firstname}</h5>
            <h5>{profileData?.middlename}</h5>
            <h5>{profileData?.lastname}</h5>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            <small>{profileData?.part}</small>
            <small>{`${profileData?.level} Level`} </small>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashNav;
