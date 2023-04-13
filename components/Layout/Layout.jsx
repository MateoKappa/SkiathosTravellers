import Head from "next/head";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/footer";
function Layout({ children }) {
  return (
    <div className={styles.index}>
      <Head>
        <meta
          name="google-site-verification"
          content="VWqkV4-IAnGC5xfLmN4aYJAHcgxG8bRAR3ChDQSTRo8"
        />
        <link
          href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
        {/* <link rel='icon' type='image/png' href='/logo-white.jpg' /> */}
        {/* <link rel="apple-touch-icon" href="/logo-white.jpg" /> */}
        <title>skiathos island</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <div>
        {" "}
        <Navbar />
        {children}
      </div>
    </div>
  );
}
export default Layout;
