import {supabase} from "../../../../utils/supabaseCreate";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import styles from "./id.module.scss";
import {loadStripe} from "@stripe/stripe-js";
const Vehicle_shop = () => {
  const [stripe_id, setStripe] = useState();
  const [title, setTitle] = useState();
  const [vehicle_image, setVehicle_image] = useState();
  const Router = useRouter();
  const PUBLIC_KEY =
    "pk_test_51L54TYDQfCO6pMu1DhF1XNJCrdiLAu5b4niJMkzgPfKNAxrznYqPdO3u2hAgZm9OhbX4sHTfoFEnwPnMFSUMfp3f00J545Nx3x";
  const stripePromise = loadStripe(PUBLIC_KEY);
  const [names, setName] = useState("");
  const [surnames, setSurname] = useState("");
  const [numbers, setNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [email, setEmail] = useState("");
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [brand, setBrand] = useState("");

  const submit_local_storage = () => {
    localStorage.setItem("name", names);
    localStorage.setItem("surname", surnames);
    localStorage.setItem("number", numbers);
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("email", email);
  };

  const get_vehicle_by_id = async () => {
    const {data} = await supabase
      .from(Router.query?.vehicle)
      .select()
      .match({id: Router.query?.id})
      .order("id", {ascending: true});
    setStripe(data[0].stripe_id);
    setTitle(data[0].title);
    setVehicle_image(data[0].image);
    console.log(data);
  };

  const get_vehicle_by_brand = async () => {
    const {data} = await supabase
      .from(Router.query?.vehicle)
      .select()
      .match({brand: Router.query?.brand})
      .order("id", {ascending: true});
    setVehicle(Router.query?.vehicle);
    setBrand(Router.query?.brand);
    if (Router.query?.id - data[0].id - 1 < 0) {
      setAfter(data[data.length - 1]);
    } else {
      setAfter(data[Router.query?.id - data[0].id - 1]);
    }
    if (Router.query?.id - data[0].id + 1 >= data.length) {
      setBefore(data[0]);
    } else {
      setBefore(data[Router.query?.id - data[0].id + 1]);
    }

    console.log(data.length);
    console.log(data);
  };

  useEffect(() => {
    (async () => {
      Router.query?.id && (await get_vehicle_by_id());
    })();
  }, [Router.query?.id]);
  useEffect(() => {
    (async () => {
      Router.query?.brand && (await get_vehicle_by_brand());
    })();
  }, [Router.query?.brand]);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.Big_container}>
          <h1>{title}</h1>
          <img src={vehicle_image}></img>
          <h1>CONTACT INFORMATION</h1>
          <div className={styles.row}>
            <div className={styles.column}>
              <h2>Name</h2>
              <input
                type="text"
                placeholder="Ex : Helene"
                value={names}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.column}>
              <h2>Surname</h2>
              <input
                type="text"
                placeholder="Ex : Austein"
                value={surnames}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </div>
            <div className={styles.column}>
              <h2>Phone</h2>
              <input
                type="email"
                placeholder="Ex : +30 69########"
                value={surnames}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={styles.column}>
              <h2>Email</h2>
              <input
                type="text"
                placeholder="Ex : Email@gmail.com"
                value={numbers}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={styles.checkouts}>
            <form
              action={`/api/checkout_sessions/${stripe_id}?quantity=1`}
              method="POST"
            >
              <section className={styles.section1}>
                <button
                  onClick={() => submit_local_storage()}
                  type="submit"
                  role="link"
                  stripe={stripePromise}
                  className={styles.checkout}
                >
                  Checkout
                </button>
              </section>
              <style jsx>
                {`
                  section {
                    background: #ffffff;
                    display: flex;
                    flex-direction: column;

                    border-radius: 6px;
                    justify-content: space-between;
                  }
                  button {
                    background: #556cd6;
                    border-radius: 4px;
                    color: white;
                    border: 0;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
                  }
                  button:hover {
                    opacity: 0.8;
                  }
                `}
              </style>
            </form>
          </div>
        </div>
        <div className={styles.row_it}>
          <div className={styles.small_container_1}>
            <img src={before.image}></img>
            <h2>{before.title}</h2>
            <h3>{before.Short_text}</h3>
            <a href={`/car/${vehicle}/${brand}/${before.id}`}>
              <button>Previous</button>
            </a>
          </div>
          <div className={styles.small_container_2}>
            <img src={after.image}></img>
            <h2>{after.title}</h2>
            <h3>{after.Short_text}</h3>
            <a href={`/car/${vehicle}/${brand}/${after.id}`}>
              <button>Next</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle_shop;
