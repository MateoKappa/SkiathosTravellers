import {useState, useEffect} from "react";
import styles from "./Navbar.module.scss";
import {useRouter} from "next/router";
import Window from "../Window/window";
import {motion, AnimatePresence} from "framer-motion";
function Navbar({props}) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const {height, width} = Window();
  const LinkAnimation = ({link, name}) => {
    return (
      <motion.a
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4}}
        key={menuOpen}
        exit={{
          opacity: 0,
          transition: {opacity: 0, duration: "0.3"},
        }}
        href={link}
      >
        {name}
      </motion.a>
    );
  };
  console.log(router.pathname);
  return width > 900 ? (
    <header className={styles.navbar}>
      <div className={styles.navlinks}>
        <div className={styles.logo}>
          <div>
            {router.path == "/cruises" || router.path == "/vehicle" ? (
              <img src="/logo.png" />
            ) : (
              <img src="/logo2.png" />
            )}
          </div>
        </div>
        <nav className={styles.nav}>
          <div
            className={
              router.pathname == "/vehicle" ? styles.linksV : styles.links
            }
          >
            <a href="/">Home</a>
            <a href="/cruises">Cruise trip</a>
            <a href="/vehicle">Rental</a>
            <a href="/contact"> Contact</a>
            <a href="/about">About</a>
          </div>
        </nav>
      </div>
    </header>
  ) : (
    <div className={styles.phoneNavbar}>
      <i onClick={() => setMenuOpen(!menuOpen)} class="fa-solid fa-bars"></i>
      {router.path == "/cruises" || router.path == "/vehicle" ? (
        <img src="/logo.png" />
      ) : (
        <img src="/logo2.png" />
      )}
      <AnimatePresence exitBeforeEnter>
        {menuOpen ? (
          <motion.div
            initial={{width: 0, opacity: 0}}
            animate={{width: "100vw", opacity: 1}}
            transition={{duration: 0.4}}
            key={menuOpen}
            exit={{
              width: 0,
              opacity: 0,
              transition: {opacity: 0, duration: "0.4"},
            }}
            className={styles.links}
          >
            <LinkAnimation link="/" name="Home" />
            <LinkAnimation link="/cruises" name="Cruise trip" />
            <LinkAnimation link="/vehicle" name="Rental" />
            <LinkAnimation link="/island" name="Islands" />
            <LinkAnimation link="/contact" name="Contact" />
            <LinkAnimation link="/about" name="About" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
export default Navbar;
