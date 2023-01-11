import React from "react";
import styles from "./Destinations.module.scss";

function Home4() {
  return (
    <div className={styles.Destinations}>
      <h2>Επιλεξτε μια απο τις παρακατω τοποθεσιες!</h2>
      <div className={styles.ImageContainer}>
        <div className={styles.container1}>
          <img src="/skopelos.jpg" />
          <div className={styles.overlay}>
            <div className={styles.text}>Skopelos</div>
          </div>
        </div>
        <div className={styles.container2}>
          <img src="/αλοννησος.jpg" />
          <div className={styles.overlay}>
            <div className={styles.text}>Alonnhsos</div>
          </div>
        </div>
        <div className={styles.container3}>
          <img src="/skiathos/Skiathos.png" />
          <div className={styles.overlay}>
            <div className={styles.text}>Skiathos</div>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
        blanditiis ipsum sequi aspernatur alias quo nesciunt esse impedit,
        incidunt quisquam? Illo, maxime commodi adipisci ullam quas distinctio
        labore esse laudantium. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit.
      </p>
      {/* <h1>Our Destinations</h1>
      <p>This are some of our destinations.</p>
      <div className={styles.flex_cont}>
        <div className={styles.Destinationscol}>
          <div className={styles.image}>
            <a>
              <img src="/skopelos.jpg" />
            </a>
          </div>

          <h3>
            <a>Skopelos</a>
          </h3>
          <p>
            Skopelos is the greenest island of Greece, the green of the pine
            trees and the dense forest are mixed with the endless blue of the
            sea and the sky!
          </p>
        </div>
        <div className={styles.Destinationscol}>
          <a>
           
          </a>

          <h3>
            <a>Alonnisos</a>
          </h3>
          <p>
            Alonnisos is considered an ideal destination for relaxing holidays
            in nature, by the sea!
          </p>
        </div>
        <div className={styles.Destinationscol}>
          <a>
            <img src="/skiathos/aaa.png" />
          </a>

          <h3>
            <a>
              <a>Skiathos</a>
            </a>
          </h3>
          <p>
            Skiathos invites you to enter its climate as it is the closest
            island of Sporades to mainland Greece!
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Home4;
