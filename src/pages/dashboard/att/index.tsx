import DashboardLayout from "@/components/Layout/DashboardLayout";
// import { token } from "@/http";
import Attendance from "@/modules/dashboard/att/Attendance";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('userToken');
      if (!token) {
        router.push("/auth");
      }
    }
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

export default Index;
