import AdminLayout from "@/components/Layout/AdminLayout";
import { adminToken } from "@/http/admin";
import AdminApplicants from "@/modules/admin/dashboard/applicants/Applicants";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

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
  return (
    <AdminLayout>
      <Head>
        <title>Applicants</title>
      </Head>
      <AdminApplicants />
    </AdminLayout>
  );
};

export default Index;
