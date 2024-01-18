import DashboardLayout from "@/components/Layout/DashboardLayout";
import { token } from "@/http";
import Attendance from "@/modules/dashboard/att/Attendance";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();
  const checkToken = () => {
    if (!token) {
      router.push("/auth");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <DashboardLayout>
      <Head>
        <title>Attendance</title>
      </Head>
      <Attendance />
    </DashboardLayout>
  );
};

export default index;
