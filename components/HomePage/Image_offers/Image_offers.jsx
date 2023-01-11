import styles from "./Image_offers.module.scss";
import useWindowDimensions from "../../Window/window";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import styles2 from "../Destinations/Destinations.module.scss";
import {text} from "@fortawesome/fontawesome-svg-core";
function Home() {
  const [pageChecker, SetPageChecker] = useState(false);
  const [ButtonOne, SetButtonOne] = useState(false);
  const [ButtonTwo, SetButtonTwo] = useState(false);
  const [ButtonThree, SetButtonThree] = useState(false);
  const [isShown1, SetisShown1] = useState(false);
  const [isShown2, SetisShown2] = useState(false);
  const [isShown3, SetisShown3] = useState(false);
  const [shadowCruise, setShadowCruise] = useState(false);
  const [shadowRental, setShadowRental] = useState(false);
  const [shadowRest, setShadowRest] = useState(false);
  const {width, height} = useWindowDimensions();
  console.log(pageChecker);
  const TextSlider = ({title, text, Button}) => {
    return (
      <motion.p className={styles.text}>
        {{Button} ? (
          <motion.p
            initial={{x: 600, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5}}
            className={styles.text}
            exit={{
              opacity: 0,
              x: 600,
              transition: {
                duration: "0.4",
              },
            }}
          >
            <h3>{title}</h3>
            {text}
          </motion.p>
        ) : null}
      </motion.p>
    );
  };

  const text = {
    0: {
      cruiseTitle: "Cruise Trip",
      cruiseText:
        "Cruises from the old or the new port of Skiathos! Theone-day cruises that we have chosen for you, are theassurance of the best proposals that exist on the island of Skiathos! Cruises with sailing, traditional, motorboats! Our experience, the research of the offers but also our interest to offer you the best choice for you and your family, is the answer to your expectations! The choice of a cruise that departs from the port of Skiathos and has as its destination the enchanting beaches of the island, as well as the neighboring islands of Skopelos and Tsougria, but even the fishing village of Pelion - Katigiorgis, is the most for all lovers of the sea beautiful and exciting way to spend one of the best days of your vacation. Choose the cruise that suits you best, enjoy your day and live the experience!",
    },
    1: {
      rentalTitle: "Rental",
      rentalText:
        " If you want to explore by car or motorbike the incomparablebeauty of the island, the famous nature of its pine cones andpines, its mysterious and well-known beaches (numbering about60) we suggest you some of the businessmen in the field of carrental always guided by the responsibility and immediateservice of their services! After research we did for you andthey stand out in prices - variety - service! If you want to explore by car or motorbike the incomparable beauty of theisland, the famous nature of its pine cones and pines, its mysterious and well-known beaches (numbering about 60) we suggest you some of the businessmen in the field of car rentalalways guided by the responsibility and immediate service oftheir services! After research we did for you and they stand out in prices - variety - service!",
    },
    2: {
      restaurantTitle: "Reservation",
      restaurantText:
        "What you eat, how they serve you, how much it will costyou can affect your day or your vacation! So trust us, we know, we have tasted for you, we have checked for you! Restaurants, traditional Greek taverns, overlooking the Aegean or located in the alleys of the island, inside oroutside the city.! What you eat, how they serve you, howmuch it will cost you can affect your day or yourvacation! So trust us, we know, we have tasted for you, wehave checked for you! Restaurants, traditional Greektaverns, overlooking the Aegean or located in the alleysof the island, inside or outside the city.! What you eat, how they serve you, how much it will cost you can affect your day or your vacation! So trust us, we know, we havetasted for you, we have checked for you! located in city!",
    },
  };

  return (
    <div className={styles.Services}>
      <div className={styles.header}>
        <h1>Choose one of our services.</h1>
        <div className={styles.flex_cont}>
          <div className={styles.Servicescol}>
            <span className={styles.image}>
              <img src="/skiathos/cruiseTrip.jpg"></img>
              {width < 1300 ? (
                <button onClick={() => setShadowCruise(!shadowCruise)}>
                  Details
                </button>
              ) : null}
              {shadowCruise ? (
                <div className={styles.shadow}>
                  <h2>{text[0].cruiseTitle}</h2>
                  <h5> {text[0].cruiseText}</h5>
                </div>
              ) : null}
            </span>
            {width > 1300 ? (
              <AnimatePresence exitBeforeEnter>
                <motion.p
                  initial={{x: -300, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 0.5}}
                  className={styles.text}
                  exit={{
                    opacity: 0,
                    x: -300,
                    transition: {
                      duration: "0.4",
                    },
                  }}
                >
                  <h3>Rental</h3>
                  If you want to explore by car or motorbike the incomparable
                  beauty of the island, the famous nature of its pine cones and
                  pines, its mysterious and well-known beaches (numbering about
                  60) we suggest you some of the businessmen in the field of car
                  rental always guided by the responsibility and immediate
                  service of their services! After research we did for you and
                  they stand out in prices - variety - service! If you want to
                  explore by car or motorbike the incomparable beauty of the
                  island, the famous nature of its pine cones and pines, its
                  mysterious and well-known beaches (numbering about 60) we
                  suggest you some of the businessmen in the field of car rental
                  always guided by the responsibility and immediate service of
                  their services! After research we did for you and they stand
                  out in prices - variety - service!
                </motion.p>
              </AnimatePresence>
            ) : (
              <span className={styles.image}>
                <img src="/rental.jpg"></img>
                <button onClick={() => setShadowRental(!shadowRental)}>
                  Details
                </button>
                {shadowRental ? (
                  <div className={styles.shadow}>
                    <h2>{text[1].rentalTitle}</h2>
                    <h5> {text[1].rentalText}</h5>
                  </div>
                ) : null}
              </span>
            )}

            <span className={styles.image}>
              <img src="/restaurrant.jpg"></img>
              {width < 1300 ? (
                <button onClick={() => setShadowRest(!shadowRest)}>
                  Details
                </button>
              ) : null}
              {shadowRest ? (
                <div className={styles.shadow}>
                  <h2>{text[2].restaurantTitle}</h2>
                  <h5> {text[2].restaurantText}</h5>
                </div>
              ) : null}
            </span>
          </div>
          {width > 1300 ? (
            <>
              {" "}
              <div className={styles.ImageButton}>
                <div className={styles.stick}></div>
                <button
                  onMouseEnter={() => SetButtonOne(true)}
                  onMouseLeave={() => SetButtonOne(false)}
                  onClick={() => SetisShown1(!isShown1)}
                >
                  {ButtonOne ? (
                    <motion.span
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{duration: 0.3}}
                    >
                      Click Me!
                    </motion.span>
                  ) : null}
                </button>
                <button
                  onMouseEnter={() => SetButtonTwo(true)}
                  onMouseLeave={() => SetButtonTwo(false)}
                  onClick={() => SetisShown2(!isShown2)}
                >
                  {ButtonTwo ? (
                    <motion.span
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{duration: 0.5}}
                    >
                      Click Me!
                    </motion.span>
                  ) : null}
                </button>
                <button
                  onMouseEnter={() => SetButtonThree(true)}
                  onMouseLeave={() => SetButtonThree(false)}
                  onClick={() => SetisShown3(!isShown3)}
                >
                  {ButtonThree ? (
                    <motion.span
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{duration: 0.5}}
                    >
                      Click Me!
                    </motion.span>
                  ) : null}
                </button>
              </div>
              <div className={styles.RightSide}>
                <span className={styles.image}>
                  <AnimatePresence exitBeforeEnter>
                    <motion.p
                      initial={{x: -300, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.5}}
                      className={styles.text}
                      exit={{
                        opacity: 0,
                        x: -300,
                        transition: {
                          duration: "0.4",
                        },
                      }}
                    >
                      <h3>Cruise Trip</h3>
                      Cruises from the old or the new port of Skiathos! The
                      one-day cruises that we have chosen for you, are the
                      assurance of the best proposals that exist on the island
                      of Skiathos! Cruises with sailing, traditional, motor
                      boats! Our experience, the research of the offers but also
                      our interest to offer you the best choice for you and your
                      family, is the answer to your expectations! The choice of
                      a cruise that departs from the port of Skiathos and has as
                      its destination the enchanting beaches of the island, as
                      well as the neighboring islands of Skopelos and Tsougria,
                      but even the fishing village of Pelion - Katigiorgis, is
                      the most for all lovers of the sea beautiful and exciting
                      way to spend one of the best days of your vacation. Choose
                      the cruise that suits you best, enjoy your day and live
                      the experience!
                    </motion.p>
                  </AnimatePresence>
                </span>

                <span className={styles.image}>
                  <img src="/rental.jpg"></img>
                </span>

                <span className={styles.image}>
                  <AnimatePresence exitBeforeEnter>
                    <motion.p
                      initial={{x: 600, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.5}}
                      className={styles.text}
                      exit={{
                        opacity: 0,
                        x: 600,
                        transition: {
                          duration: "0.4",
                        },
                      }}
                    >
                      <h3>Reservation</h3>
                      What you eat, how they serve you, how much it will cost
                      you can affect your day or your vacation! So trust us, we
                      know, we have tasted for you, we have checked for you!
                      Restaurants, traditional Greek taverns, overlooking the
                      Aegean or located in the alleys of the island, inside or
                      outside the city.! What you eat, how they serve you, how
                      much it will cost you can affect your day or your
                      vacation! So trust us, we know, we have tasted for you, we
                      have checked for you! Restaurants, traditional Greek
                      taverns, overlooking the Aegean or located in the alleys
                      of the island, inside or outside the city.! What you eat,
                      how they serve you, how much it will cost you can affect
                      your day or your vacation! So trust us, we know, we have
                      tasted for you, we have checked for you! Restaurants,
                      traditional Greek taverns, overlooking the Aegean or
                      located in the alleys of the island, inside or outside the
                      city.!
                    </motion.p>
                  </AnimatePresence>
                </span>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
