import React from "react";
import styles from "./Main.module.scss";
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import axios from "axios";

function Home() {
  const videoEl = useRef(null);
  const [weatherData, SetWeatherData] = useState();
  const current = new Date();
  const [time, setTime] = useState();
  const [seconds, setSeconds] = useState();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  console.log(time);
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
  );
}

export default Home;
