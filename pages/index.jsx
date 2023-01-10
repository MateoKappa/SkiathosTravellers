import Main from "../components/HomePage/Main/Main";
import Offers from "../components/HomePage/Offers/Offers";
import Image_offers from "../components/HomePage/Image_offers/Image_offers";
import Destinations from "../components/HomePage/Destinations/Destinations";
import Contact_us_footer from "../components/HomePage/Contact_us_footer/Contact_us_footer";
import About_us_footer from "../components/HomePage/About_us_footer/About_us_footer";
import {useRef, useEffect, useState} from "react";
export default function MyApp() {
  const videoEl = useRef(null);
  return (
    <div style={{overflow: "hidden"}}>
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
      <div style={{position: "relative"}}>
        <Main />
        <Offers />
        <Image_offers />
        <Destinations />
        <Contact_us_footer />
        <About_us_footer />
      </div>
    </div>
  );
}
