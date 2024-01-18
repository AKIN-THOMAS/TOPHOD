import React from "react";
import Nav from "@/components/Nav";
import AdminLogin from "@/modules/admin/login/AdminLogin";

const index = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <AdminLogin />
    </>
  );
};

export default index;
