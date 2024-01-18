import AdminLayout from "@/components/Layout/AdminLayout";
import AdminAnnoucements from "@/modules/admin/dashboard/annoucements/Annoucements";
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { adminToken } from "@/http/admin";


const index = () => {

  const router = useRouter();
  const checkToken = () => {
    if (!adminToken) {
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <AdminLayout>
      <Head>
        <title>Annoucement</title>
      </Head>
      <AdminAnnoucements />
    </AdminLayout>
  );
};

export default index;
