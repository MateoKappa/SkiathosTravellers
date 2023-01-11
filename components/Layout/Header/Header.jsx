import React from "react";

function Header() {
  return (
    <div className={styles.navbar}>
      <motion.div className={styles.logo}>
        <a href="/">
          <img src="/logo.png" />
        </a>
      </motion.div>
      <div className={styles.links}>
        <a href="/">Home</a>
        <a href="/cruises">Cruise trip</a>
        <a href="/vehicle">Rental</a>
        <a href="/restaurant">Restaurant</a>
        <a href="/island">Islands</a>
        <a href="/contact"> Contact</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
}

export default Header;
