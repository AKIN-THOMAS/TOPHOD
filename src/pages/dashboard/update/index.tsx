import DashboardLayout from "@/components/Layout/DashboardLayout";
import UpdateInfo from "@/modules/dashboard/update/UpdateInfo";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Update Information</title>
      </Head>
      <UpdateInfo />
    </DashboardLayout>
  );
};

export default index;
