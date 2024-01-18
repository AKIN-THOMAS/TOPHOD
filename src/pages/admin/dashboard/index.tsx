import AdminLayout from "@/components/Layout/AdminLayout";
import AdminMain from "@/modules/admin/dashboard/main/Main";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, []);
  return (
    <AdminLayout>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <AdminMain />
    </AdminLayout>
  );
};

export default index;
