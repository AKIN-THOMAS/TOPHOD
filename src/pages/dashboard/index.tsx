import React, { useEffect } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import Head from "next/head";
import Main from "@/modules/dashboard/main/Main";
import { token } from "@/http";
import MemberLogin from "./../auth/index";
import { useRouter } from "next/router";

const Dashboard: React.FC = () => {
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
        <title>Member's Dashboard</title>
      </Head>
      <Main />
    </DashboardLayout>
  );
};

export default Dashboard;
