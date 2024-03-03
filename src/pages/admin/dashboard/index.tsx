import AdminLayout from "@/components/Layout/AdminLayout";
import AdminMain from "@/modules/admin/dashboard/main/Main";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const adminTok = localStorage.getItem("adminToken")
    console.log("adminTok", adminTok)
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

export default Index;
