import React, { ReactNode, useState } from "react";
import { DashLayoutProps } from "@/@types";
import styles from "@/styles/DashComp.module.css";
import { Box, Flex } from "@chakra-ui/react";
import AdminSidebar from "@/modules/admin/dashboard/components/AdminSidebar";
import AdminNav from "@/modules/admin/dashboard/components/AdminNav";

const AdminLayout: React.FC<DashLayoutProps> = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const onClose = () => {
    setToggleSidebar(!toggleSidebar);
    console.log(toggleSidebar);
  };
  return (
    <Flex background="#f0f0f0">
      <AdminSidebar toggleSidebar={toggleSidebar} />
      <Flex
        direction="column"
        ml="70px"
        p="4"
        w="100%"
        background={"#f0f0f0"}
        h="100%"
      >
        <Box>
          <AdminNav setToggleSidebar={() => onClose()} />
        </Box>
        <div className={toggleSidebar ? styles.sectionFull : styles.section}>
          {children}
        </div>
      </Flex>
    </Flex>
  );
};

export default AdminLayout;
