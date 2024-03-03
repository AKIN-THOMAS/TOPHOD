import DashboardLayout from "@/components/Layout/DashboardLayout";
import UpdateInfo from "@/modules/dashboard/update/UpdateInfo";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("userToken");
      if (!token) {
        router.push("/auth");
      }
    }
  }, []);
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
