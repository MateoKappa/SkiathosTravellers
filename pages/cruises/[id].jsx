import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {supabase} from "../../utils/supabaseCreate";
import styles from "./id.module.scss";
import ImageSlider from "../../components/hooks/ImageSlider/ImageSlider";
import useWindowDimensions from "../../components/Window/window";
import {loadStripe} from "@stripe/stripe-js";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Contact_us_footer from "../../components/HomePage/Contact_us_footer/Contact_us_footer";
import About_us_footer from "../../components/HomePage/About_us_footer/About_us_footer";
import Loader from "../../components/Loader/loader.jsx";

const PUBLIC_KEY =
  "pk_test_51L54TYDQfCO6pMu1DhF1XNJCrdiLAu5b4niJMkzgPfKNAxrznYqPdO3u2hAgZm9OhbX4sHTfoFEnwPnMFSUMfp3f00J545Nx3x";
// const PUBLIC_KEY =
//   "pk_live_51L54TYDQfCO6pMu10BuCK2QWoWDgVRrcbyghvkxz5tOBXL7jqgOFQJ6V3EtqOfl5NGKsodFK7VhEXspkKiYKnb1g004igf4Rqa";

const stripePromise = loadStripe(PUBLIC_KEY);
function Id() {
  const Router = useRouter();
  const [cruise, setCruise] = useState();
  const [tickets, setTickets] = useState(1);
  const [count_images, setCount_images] = useState(0);
  const [names, setName] = useState("");
  const [surnames, setSurname] = useState("");
  const [numbers, setNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [price, setPrice] = useState();
  const [email, setEmail] = useState("");
  const {height, width} = useWindowDimensions();

  const submit_local_storage = () => {
    localStorage.setItem("name", names);
    localStorage.setItem("surname", surnames);
    localStorage.setItem("number", numbers);
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("email", email);
  };

  // const alerter = () => {
  //   if (selectedDate===""  )
  // }

  useEffect(() => {
    if (cruise) setPrice(cruise.price * tickets);
  }, [tickets]);

  const get_cruise_by_id = async () => {
    const {data} = await supabase
      .from("cruises")
      .select()
      .match({id: Router.query?.id});

    let images = JSON.parse(data[0].images);
    data[0].parse_images = images;
    console.log(data[0]);
    setCruise(data[0]);
  };

  useEffect(() => {
    (async () => {
      Router.query?.id && (await get_cruise_by_id());
    })();
  }, [Router.query?.id]);

  return cruise ? (
    <div className={styles.pages}>
      <div className={styles.page_container}>
        <div className={styles.ticket_container}>
          <div className={styles.image}></div>
          <div className={styles.datepicker}>
            <h2>
              Name
              <input
                type="text"
                placeholder="Name"
                value={names}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </h2>
            <h2>
              Surname
              <input
                type="text"
                placeholder="Surname"
                value={surnames}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </h2>
            <h2>
              Email
              <input
                type="email"
                placeholder="Email"
                value={surnames}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </h2>
            <h2>
              Phone
              <input
                type="text"
                placeholder="Phone number"
                value={numbers}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </h2>
            <div className={styles.Calendar}>
              <h3>Pick a date</h3>
              <div className={styles.date}>
                <Datepicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttoner}>
            <button
              onClick={() =>
                tickets >= 2 ? setTickets(tickets - 1) : setTickets(1)
              }
            >
              <i className="fas fa-minus"></i>
            </button>
            <h1>{tickets}</h1>
            <button
              className={styles.button2}
              onClick={() =>
                tickets < 10 ? setTickets(tickets + 1) : setTickets(1)
              }
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className={styles.islands}>
            <button>
              <a href="/skiathos">
                Skiathos <i className="fas fa-island-tropical"></i>
              </a>
            </button>

            <button>
              <a href="/alonnisos">
                Alonnisos <i className="far fa-island-tropical"></i>
              </a>
            </button>

            <button>
              <a href="/skopelos">
                Skopelos <i className="fal fa-island-tropical"></i>
              </a>
            </button>
          </div>
        </div>

        <div className={styles.checkouts}>
          <form
          // action={`/api/checkout_sessions/${cruise.stripe_id}?quantity=${tickets}`}
          // method="POST"
          >
            <section className={styles.section1}>
              <button
                // onClick={() => submit_local_storage()}
                // type="submit"
                // stripe={stripePromise}
                className={styles.checkout}
                onClick={() => {
                  alert("Unavailable");
                }}
              >
                Unvailable
              </button>
            </section>
            <style jsx>
              {`
                section {
                  display: flex;
                  flex-direction: column;

                  border-radius: 6px;
                  justify-content: space-between;
                }
                button {
                  background: red;
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
    </div>
  ) : (
    <Loader />
  );
}

export default Id;
