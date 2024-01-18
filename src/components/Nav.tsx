import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CgMenuLeft } from "react-icons/cg";

const Nav = () => {
  return (
    // <div className={styles.all}>
    <div className={styles.header}>
      <div className="logo">
        <Link href={""}>
          <Image className={styles.logoImg} src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<CgMenuLeft />}
            variant="outline"
          />
          <MenuList>
            <Link href={"/auth"}>
              <MenuItem>Login</MenuItem>
            </Link>
            <Link href={"/oldregistration"}>
              <MenuItem>Old members Registration</MenuItem>
            </Link>
            <Link href={"/newregistration"}>
              <MenuItem>New members Registration</MenuItem>
            </Link>
            <Link href={"/admin/login"}>
              <MenuItem>Admin</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
    // </div>
  );
};

export default Nav;
