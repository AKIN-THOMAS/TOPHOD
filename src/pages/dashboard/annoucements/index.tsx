import DashboardLayout from "@/components/Layout/DashboardLayout";
import Head from "next/head";
import React, { useEffect } from "react";
import Annoucement from "./../../../modules/dashboard/annoucements/Annoucement";
import { useRouter } from "next/router";
// import { token } from "@/http";

const Index: React.FC = () => {
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
        <title>Annoucement</title>
      </Head>
      <Annoucement />
    </DashboardLayout>
  );
};

export default Index;
