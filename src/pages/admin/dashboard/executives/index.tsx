import AdminLayout from "@/components/Layout/AdminLayout";
import { adminToken } from "@/http/admin";
import AdminExcos from "@/modules/admin/dashboard/executives/Excos";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
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
        <title>Executives</title>
      </Head>
      <AdminExcos />
    </AdminLayout>
  );
};

export default index;
