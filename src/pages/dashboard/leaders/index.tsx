import DashboardLayout from "@/components/Layout/DashboardLayout";
import { token } from "@/http";
import TeamLeaders from "@/modules/dashboard/leaders/TeamLeaders";
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
        <title>Team Leaders</title>
      </Head>
      <TeamLeaders />
    </DashboardLayout>
  );
};

export default index;
