import { useState, useEffect, useRef } from "react";
import { supabase } from "../../utils/supabaseCreate";
import styles from "./Cruises.module.scss";
import Cardholder from "./CardHolder/CardHolder";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useWindowDimensions from "../Window/window";
import Loader from "../Loader/loader";
import { useRouter } from "next/router";
import React from "react";
import useStore from "../DataStorage";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia3Vyb3Nha2lyYWt1bjEiLCJhIjoiY2wyM2F1aHVuMW84MTNjbHBndnJieDR3dCJ9.lczoc6bcyIbLZGSKkqbQrA",
});

function CruisePage() {
  const router = useRouter();
  const [cruise, setCruise] = useState();
  const [cruiseImage, setCruiseImage] = useState();
  const { height, width } = useWindowDimensions();
  const [imageCounter, setImageCounter] = useState(0);
  const [shadow, setShadow] = useState(false);
  const cruiseID = useStore((state) => state.cruiseID);
  const preview = useStore((state) => state.preview);
  const previewPhone = useStore((state) => state.previewPhone);
  const fetchCruises = async () => {
    const { data, error } = await supabase
      .from("cruises")
      .select()
      .order("id", { ascending: true });
    setCruise(data);

    if (error) {
      console.log(error);
    }
    console.log(cruise);
  };
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  useEffect(() => {
    (async () => {
      await fetchCruises();
    })();
  }, []);

  if (cruise) {
    cruise.sort();
  }
  const get_cruise_by_id = async (id) => {
    const { data } = await supabase.from("cruises").select().match({ id: id });

    let images = JSON.parse(data[0]?.images);
    data[0].parse_images = images;
    console.log(data[0], "hello");
    setCruiseImage(data[0]);
  };
  useEffect(() => {
    console.log("hello");

    get_cruise_by_id(cruiseID).then(function () {
      setImageCounter(0);
    });
  }, [cruiseID]);

  const imageSlider = (arrayImages, arrow) => {
    length = arrayImages.length;
    if (arrow == 0) {
      if (imageCounter >= length) {
        setImageCounter(imageCounter + 1);
      } else {
        setImageCounter(0);
      }
    } else {
      if (imageCounter == 0) {
        setImageCounter(length - 1);
      } else {
        setImageCounter(imageCounter - 1);
      }
    }
  };

  return cruise ? (
    <div className={styles.page}>
      <div className={styles.heading}>
        <div className={styles.leftBgImages}></div>
        <div className={styles.textHeading}>
          {" "}
          <h1> Premium Cruise Reservation in Skiathos</h1>
          <h2>
            Have the option to choose the best Cruises for a daily trip or for a
            private reservation with the best prices in skiathos.<br></br> For
            private Reservations pleace contact us.
          </h2>
        </div>

        <div className={styles.RightBgImages}></div>
      </div>
      <div className={styles.filter_Map}>
        <div className={styles.filterContainer}>
          <div className={styles.bookContainer}>
            <div className={styles.location}>
              <div className={styles.locationBox}>
                {" "}
                <i class="fa-duotone fa-location-dot"></i>
              </div>
              <div className={styles.text}>
                <h4>Location</h4>
                <h3>Skiathos,Greece</h3>
              </div>
            </div>

            <div className={styles.date}>
              <div className={styles.dateBox}>
                {" "}
                <i class="fa-light fa-calendar"></i>
              </div>
              <div className={styles.text}>
                <h4>Date</h4>
                <h3>
                  {" "}
                  {year}/{month < 10 ? `0${month}` : `${month}`}/{date}
                </h3>
              </div>
            </div>
            <div className={styles.price}>
              <div className={styles.priceBox}>
                {" "}
                <i class="fa-solid fa-money-check-dollar"></i>
              </div>
              <div className={styles.text}>
                <h4>Average Price</h4>
                <h3>€40 - €60</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <Map
            style="mapbox://styles/kurosakirakun1/cl23jl8nj000l14nv9qgc0cr1/draft"
            containerStyle={{
              height: "20vh",
              width: "100%",
              border: "1px solid black",
              position: "sticky",
              top: "10px",
              borderRadius: "20px",
            }}
            center={[23.448161, 39.173261]}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
            ></Layer>
          </Map>
        </div>
      </div>
      <div className={styles.Booking}>
        <div className={styles.cruise}>
          {cruise?.map((cruise, index) => (
            <Cardholder
              image={cruise.image}
              title={cruise.title}
              body={cruise.Short_text}
              id={cruise.id}
              key={index}
            />
          ))}
        </div>
        {width > 850 ? (
          <div className={styles.previewer}>
            {" "}
            <div className={styles.imageSlider}>
              <img src={cruiseImage?.parse_images[imageCounter]} />
              <i
                id="0"
                class="fa-solid fa-circle-arrow-right"
                onClick={() => imageSlider(cruiseImage?.parse_images)}
              ></i>
              <i
                id="1"
                class="fa-solid fa-circle-arrow-left"
                onClick={() => imageSlider(cruiseImage?.parse_images)}
              ></i>
              <button onClick={() => setShadow(!shadow)}>
                {" "}
                {shadow ? "Exit " : "Details"}
              </button>
              <div className={shadow ? styles.detailshadow : null}>
                <h2> {shadow ? cruiseImage?.title : null}</h2>
                <h3>{shadow ? cruiseImage?.text : null}</h3>
                <span>
                  {shadow ? <div> {cruiseImage?.price}$</div> : null}{" "}
                </span>
              </div>
            </div>
          </div>
        ) : preview ? (
          <div className={styles.previewPhone}>
            {" "}
            <div className={styles.imageSlider}>
              {" "}
              <i
                id="X"
                onClick={() => previewPhone(!preview)}
                class="fa-solid fa-xmark"
              ></i>
              <img src={cruiseImage?.parse_images[imageCounter]} />
              <i
                id="0"
                class="fa-solid fa-circle-arrow-right"
                onClick={() => imageSlider(cruiseImage?.parse_images)}
              ></i>
              <i
                id="1"
                class="fa-solid fa-circle-arrow-left"
                onClick={() => imageSlider(cruiseImage?.parse_images)}
              ></i>
              <button onClick={() => setShadow(!shadow)}>
                {" "}
                {shadow ? "Exit " : "Details"}
              </button>
              <div className={shadow ? styles.detailshadow : null}>
                <h2> {shadow ? cruiseImage?.title : null}</h2>
                <h3>{shadow ? cruiseImage?.text : null}</h3>
                <span>
                  {shadow ? <div> {cruiseImage?.price}$</div> : null}{" "}
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default CruisePage;
