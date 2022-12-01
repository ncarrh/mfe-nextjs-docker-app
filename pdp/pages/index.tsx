import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "../components/image";

function Home() {
  return (
    <div
      style={{
        margin: 10,
        padding: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "lightcoral",
          width: "100vw",
          height: "10rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "blue" }}>Product Page Title</h2>
      </div>
      <div style={{ width: "100vw" }}>
        <Image />
      </div>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  return {};
};

export default Home;
