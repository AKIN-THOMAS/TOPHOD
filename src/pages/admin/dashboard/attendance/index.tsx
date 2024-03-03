import AdminLayout from "@/components/Layout/AdminLayout";
import { adminToken } from "@/http/admin";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Head from "next/head";
import Attendance from "@/modules/dashboard/att/Attendance";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, []);
  return(
    <AdminLayout>
      <Head>
        <title>Attendance</title>
      </Head>
      <Attendance />
    </AdminLayout>
  );
};

export default Index;
