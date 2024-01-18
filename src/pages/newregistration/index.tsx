import React from "react";
import styles from "@/styles/Registration.module.css";
import Register from "@/modules/registration/Register";
import Nav from "@/components/Nav";
import Head from "next/head";

const index = () => {
  return (
    <div className={styles.all}>
      <Head>
        <title>Registration</title>
        <meta
          name="description"
          content="Greater than a thousand men, Stronger than a nation. One Spirit One Sound"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
      </header>
      <div>
        <Register reghead="New Members Registration" type={0} />
      </div>
    </div>
  );
};

export default index;
