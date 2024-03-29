import "../styles/global.css";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
