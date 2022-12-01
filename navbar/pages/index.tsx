import React from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Navbar container with hotreload working fine!!
      </h1>
    </div>
  );
}
