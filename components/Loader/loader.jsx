import React from "react";
import styles from "./loader.module.scss";

function loader() {
  return (
    <div className={styles.body}>
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default loader;
