import { useRef, useEffect, useState } from "react";
import styles from "../styles/index.module.scss";
import axios from "axios";
export default function Index() {
  const videoEl = useRef(null);
  const [weatherData, SetWeatherData] = useState();
  const current = new Date();
  const [time, setTime] = useState();
  const [seconds, setSeconds] = useState();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  useEffect(() => {
    setTimeout(() => {
      setSeconds(current.getSeconds());
      if (current.getMinutes() < 10) {
        const timer = `${current.getHours()}:0${current.getMinutes()}`;
        setTime(timer);
      } else {
        const timer = `${current.getHours()}:${current.getMinutes()}`;
        setTime(timer);
      }
    }, 1000);
  }, [seconds]);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  const Weather = async () => {
    await axios
      .get(
        "https://www.meteosource.com/api/v1/free/point?place_id=skiathos&sections=current%2Chourly&language=en&units=auto&key=52fq7rvhlkkcuzmu1lyxg5oooaevzyaweetd0qxk"
      )
      .then((res) => {
        console.log(res.data);
        let weatherdatatemp = res.data.current;
        SetWeatherData(weatherdatatemp);
        console.log(weatherdatatemp);
      });
  };

  useEffect(() => {
    (async () => {
      await Weather();
      attemptPlay();
    })();
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: "0",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          backgroundImage:
            "linear-gradient(rgba(4, 17, 19, 0.2), rgba(4, 9, 30, 0.5))",
        }}
      ></div>
      <video
        playsInline
        autoPlay={true}
        loop
        muted
        alt="All the devices"
        src="video2.mp4"
        ref={videoEl}
        style={{
          position: "fixed",
          top: 0,
          zIndex: "-1",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          backgroundImage:
            "linear-gradient(rgba(4, 17, 19, 0.2), rgba(4, 9, 30, 0.5))",
        }}
      />

      <div style={{ position: "relative" }}>
        <div className={styles.Homepage}>
          <div className={styles.text}>
            <h1>
              SKIATHOS <br />
              TRAVELLERS
            </h1>
            <div className={styles.weather}>
              {" "}
              <i class="fad fa-cloud"></i>{" "}
              <div className={styles.time}>
                {weatherData?.temperature}°C -{time}
              </div>
            </div>
          </div>
          <button className={styles.herobtn}>Here are our Services</button>
        </div>
        <div className={styles.services}>
          <h2> Locations</h2>
          <div id="right" className={styles.imageText}>
            <p>
              {" "}
              Skiathos is a stunning island located in the Aegean Sea, known for
              its pristine beaches, lush greenery, and vibrant nightlife. This
              beautiful Greek island is the perfect destination for those
              seeking a mix of relaxation and excitement.
              <br />
              With over 60 sandy beaches to choose from, there is no shortage of
              spots to soak up the sun and enjoy the turquoise waters of the
              Aegean Sea. Some of the most popular beaches on the island include
              Koukounaries, Lalaria, and Banana Beach.
            </p>
            <img
              id="right"
              src="https://www.greeka.com/photos/sporades/skiathos/hero/skiathos-island-3-1920.jpg"
            />
          </div>
          <div id="left" className={styles.imageText}>
            <img
              id="left"
              src="https://content.tui.co.uk/adamtui/2017_5/25_9/628aeb33-b30f-4645-942a-a77e0096a852/shutterstock_144299110WebOriginalCompressed.jpg?i10c=img.resize(width:658);img.crop(width:658%2Cheight:370)"
            />
            <p>
              {" "}
              Skopelos is a beautiful and serene island located in the Aegean
              Sea, known for its stunning beaches, lush forests, and charming
              traditional villages. The island boasts crystal clear waters that
              are perfect for swimming, snorkeling, and diving, while its lush
              green landscapes offer endless opportunities for hiking, cycling,
              and exploring.
            </p>
          </div>
          <div id="right_down" className={styles.imageText}>
            <p>
              {" "}
              Skiathos is a stunning island located in the Aegean Sea, known for
              its pristine beaches, lush greenery, and vibrant nightlife. This
              beautiful Greek island is the perfect destination for those
              seeking a mix of relaxation and excitement.
              <br />
              With over 60 sandy beaches to choose from, there is no shortage of
              spots to soak up the sun and enjoy the turquoise waters of the
              Aegean Sea. Some of the most popular beaches on the island include
              Koukounaries, Lalaria, and Banana Beach.
            </p>
            <img
              id="right"
              src="https://static.liberal.gr/photos/2022-07/paththri.jpg"
            />
          </div>
        </div>
        <div className={styles.Destinations}>
          <h2>Choose one of our Services!</h2>
          <div className={styles.ImageContainer}>
            <div className={styles.container1}>
              <img src="https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/hp_cmstest/882075bx-F79-22TDIEURHD_QQ_ePOWER_001_RGB_Eci%201.jpg.ximg.l_full_m.smart.jpg" />
              <div className={styles.overlay}>
                <div className={styles.text}>Rental</div>
              </div>
            </div>
            <div className={styles.container2}>
              <img src="/skiathos/CruiseTrip.jpg" />
              <div className={styles.overlay}>
                <div className={styles.text}>Cruise Trip</div>
              </div>
            </div>
            <div className={styles.container3}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg" />
              <div className={styles.overlay}>
                <div className={styles.text}>Restaurant</div>
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            blanditiis ipsum sequi aspernatur alias quo nesciunt esse impedit,
            incidunt quisquam? Illo, maxime commodi adipisci ullam quas
            distinctio labore esse laudantium. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </p>
        </div>
        <div className={styles.whoAreWe}>
          <div>
            <h1>WHY SAIL WITH SKIATHOS TRAVELLERS?</h1>
            <p>
              Experience exceptional service on our cruise with personalized
              attention, gourmet dining, luxurious amenities, and unforgettable
              entertainment.
            </p>
          </div>
          <div>
            <div className={styles.reasons}>
              <div>
                <h3>
                  EXPERIENCE<i class="fa-solid fa-check"></i>{" "}
                </h3>
                <p>
                  We are committed to creating the ideal scenery for you to
                  enjoy the most unforgettable moments on board of one of our
                  charter yachts.
                </p>
              </div>
              <div>
                {" "}
                <h3>
                  PROFESSIONALISM<i class="fa-solid fa-check"></i>
                </h3>{" "}
                <p>
                  Seven Seas Maritime’s team of experts will oversee the
                  smallest details of the most challenging tasks to ensure
                  quality vacations for all our clients.
                </p>
              </div>
              <div>
                {" "}
                <h3>
                  SAFETY<i class="fa-solid fa-check"></i>
                </h3>{" "}
                <p>
                  We focus on building strong and long-lasting relationships
                  with our clients. We value their safety and comfort before and
                  above anything.
                </p>
              </div>
              <div>
                {" "}
                <h3>
                  SERVICE<i class="fa-solid fa-check"></i>
                </h3>{" "}
                <p>
                  Experience exceptional service on our cruise with personalized
                  attention, gourmet dining, luxurious amenities, and
                  unforgettable entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <h1>
            Contact us for any Cruise Rental for the day<br></br>Anywhere From
            The World
          </h1>
          <div href="" className={styles.herobtn}>
            <a>CONTACT US</a>
          </div>
        </div>
        <div className={styles.footer}>
          <h4>About Us</h4>
          <p>
            Skiathos Travellers is a new age online travel service and the
            widest travel guide for the island of Skiathos, with unsurpassed
            local knowledge and best prices! We inspire you with locations and
            services that meet any need and mood, from where to go for a daily
            excursion and party to where to eat and rent your perfect car to
            explore the island!
          </p>
        </div>
      </div>
    </div>
  );
}
