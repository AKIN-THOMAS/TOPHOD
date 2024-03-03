import DashboardLayout from "@/components/Layout/DashboardLayout";
import { token } from "@/http";
import TeamLeaders from "@/modules/dashboard/leaders/TeamLeaders";
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
        <title>Team Leaders</title>
      </Head>
      <TeamLeaders />
    </DashboardLayout>
  );
};

export default Index;
