import DashboardLayout from "@/components/Layout/DashboardLayout";
import Head from "next/head";
import React, { useEffect } from "react";
import Annoucement from "./../../../modules/dashboard/annoucements/Annoucement";
import { useRouter } from "next/router";
import { token } from "@/http";

const index: React.FC = () => {
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
        <title>Annoucement</title>
      </Head>
      <Annoucement />
    </DashboardLayout>
  );
};

export default index;
