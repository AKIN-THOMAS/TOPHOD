import AdminLayout from "@/components/Layout/AdminLayout";
import { adminToken } from "@/http/admin";
import Generate from "@/modules/admin/dashboard/generate/Generate";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('adminToken');
      console.log(`Token: ${token}`)
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, []);
  return (
    <AdminLayout>
      <Head>
        <title>Generate usernames and passwords</title>
      </Head>
      <Generate />
    </AdminLayout>
  );
};

export default Index;
