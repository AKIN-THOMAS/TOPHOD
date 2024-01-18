import DashboardLayout from "@/components/Layout/DashboardLayout";
import { token } from "@/http";
import ChangePassword from "@/modules/dashboard/change/ChangePassword";
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
        <title>Change Password</title>
      </Head>
      <ChangePassword />
    </DashboardLayout>
  );
};

export default index;
