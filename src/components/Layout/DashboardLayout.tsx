import React, { ReactNode, useState } from "react";
import { DashLayoutProps } from "@/@types";
import DashNav from "@/modules/dashboard/components/DashNav";
import Sidebar from "@/modules/dashboard/components/Sidebar";
import styles from "@/styles/DashComp.module.css";
import { Box, Flex } from "@chakra-ui/react";

const DashboardLayout: React.FC<DashLayoutProps> = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const onClose = () => {
    setToggleSidebar(!toggleSidebar);
    console.log(toggleSidebar);
  };
  return (
    <Flex background="#f0f0f0">
      <Sidebar toggleSidebar={toggleSidebar} />
      <Flex
        direction="column"
        ml="70px"
        p="4"
        w="100%"
        background={"#f0f0f0"}
        h="100%"
      >
        <Box>
          <DashNav setToggleSidebar={() => onClose()} />
        </Box>
        <div className={toggleSidebar ? styles.sectionFull : styles.section}>
          {children}
        </div>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
