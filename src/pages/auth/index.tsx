import React from "react";
import Nav from "@/components/Nav";
import LoginForm from "@/modules/auth/LoginForm";

const MemberLogin = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <LoginForm />
    </>
  );
};

export default MemberLogin;
