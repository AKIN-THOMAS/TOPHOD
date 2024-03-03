import React from "react";
import Nav from "@/components/Nav";
import LoginForm from "@/modules/auth/LoginForm";
import Head from "next/head";

const MemberLogin = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <header>
        <Nav />
      </header>
      <LoginForm />
    </>
  );
};

export default MemberLogin;
