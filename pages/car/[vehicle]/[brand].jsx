import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {supabase} from "../../../utils/supabaseCreate";
import styles from "./id.module.scss";
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {loadStripe} from "@stripe/stripe-js";
import Loader from "../../../components/Loader/loader";
import "react-datepicker/dist/react-datepicker.css";
import useWindowDimensions from "../../../components/Window/window";
import Cardholder from "./CardHolder/CardHolder";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia3Vyb3Nha2lyYWt1bjEiLCJhIjoiY2wyM2F1aHVuMW84MTNjbHBndnJieDR3dCJ9.lczoc6bcyIbLZGSKkqbQrA",
});
const PUBLIC_KEY =
  "pk_live_51L54TYDQfCO6pMu10BuCK2QWoWDgVRrcbyghvkxz5tOBXL7jqgOFQJ6V3EtqOfl5NGKsodFK7VhEXspkKiYKnb1g004igf4Rqa";

const stripePromise = loadStripe(PUBLIC_KEY);
function Brand() {
  const Router = useRouter();
  const {height, width} = useWindowDimensions();
  const [vehicle, setVehicle] = useState();
  const [vehicle_image, setVehicle_image] = useState();

  const get_vehicle_by_brand = async () => {
    const {data} = await supabase
      .from(Router.query?.vehicle)
      .select()
      .match({brand: Router.query?.brand})
      .order("id", {ascending: true});
    setVehicle(data);
    setVehicle_image(data[0].image);
    console.log(data);
  };

  useEffect(() => {
    (async () => {
      Router.query?.brand && (await get_vehicle_by_brand());
    })();
  }, [Router.query?.brand]);

  return vehicle ? (
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
          <img src={vehicle_image}></img>
        </div>
      </div>
      <div className={styles.holder}>
        <div className={styles.cruise}>
          {vehicle?.map((cruise, index) => (
            <Cardholder
              image={cruise.image}
              title={cruise.title}
              body={cruise.Short_text}
              brand={cruise.brand}
              key={index}
              vehicle={cruise.vehicle}
              id={cruise.id}
            />
          ))}
        </div>

        {width >= 1000 ? (
          <div className={styles.map}>
            <Map
              style="mapbox://styles/kurosakirakun1/cl23jl8nj000l14nv9qgc0cr1/draft"
              containerStyle={{
                height: "96vh",
                width: "45vw",
                position: "-webkit-sticky",
                position: "sticky",
                paddingTop: "20px",
                top: "10px",
              }}
              center={[23.448161, 39.173261]}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{"icon-image": "marker-15"}}
              ></Layer>
            </Map>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Brand;
