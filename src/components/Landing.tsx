import React from "react";
import Nav from "./Nav";
import styles from "@/styles/Home.module.css";

const Landing = () => {
  return (
    <section className={styles.all}>
      <header>
        <Nav />
      </header>
      <section></section>
    </section>
  );
};

export default Landing;
