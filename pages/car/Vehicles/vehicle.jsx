import {useState, useEffect} from "react";
import axios from "axios";
import styles from "./vehicles.module.scss";
import Cardholder from "./CardHolder/CardHolder";
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {supabase} from "../../utils/supabaseCreate";
import {useRouter} from "next/router";
import Loader from "../Loader/loader";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia3Vyb3Nha2lyYWt1bjEiLCJhIjoiY2wyM2F1aHVuMW84MTNjbHBndnJieDR3dCJ9.lczoc6bcyIbLZGSKkqbQrA",
});

function CruisePage() {
  const router = useRouter();
  const [rental1, setRental1] = useState();

  const fetchCruises = async () => {
    const {data, error} = await supabase
      .from("Rentals")
      .select()
      .order("id", {ascending: false});
    setRental1(data);

    if (error) {
      console.log(error);
    }
    console.log(rental1);
  };

  useEffect(() => {
    (async () => {
      await fetchCruises();
    })();
  }, []);

  return rental1 ? (
    <div className={styles.page}>
      <div className={styles.front}>
        <div className={styles.heading}>
          <h1> Premium Rental Vehicle in Skiathos</h1>
          <h2>
            Have the option to choose the best vehicles with the best prices in
            skiathos.<br></br> Rent now from the store of your liking.
          </h2>
        </div>
        <div className={styles.car_image}>
          <img src="/car1.jpg"></img>
        </div>
      </div>
      <h3 style={{textAlign: "center"}}>Coming Soon!</h3>
      {/* <div className={styles.containers}>
        <div className={styles.container1}>
          <h1>CAR HIRE</h1>
          <div className={styles.container1_settings}>
            {rental1?.slice(0, 3).map((cruise, index) => (
              <Cardholder
                image={cruise.image}
                title={cruise.title}
                body={cruise.Short_text}
                brand={cruise.brand}
                key={index}
                vehicle={cruise.vehicle}
              />
            ))}
          </div>
        </div>
        <div className={styles.container1}>
          <h1>AEGEAL CAR RENTAL</h1>

          <div className={styles.container1_settings}>
            {rental1?.slice(3, 6).map((cruise, index) => (
              <Cardholder
                image={cruise.image}
                title={cruise.title}
                body={cruise.Short_text}
                id={cruise.id}
                key={index}
                vehicle={cruise.vehicle}
                brand={cruise.brand}
              />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  ) : (
    <Loader />
  );
}

export default CruisePage;
