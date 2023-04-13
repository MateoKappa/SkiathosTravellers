import Navbar1 from "../Navbar/Navbar";
import styles from "../About/About.module.scss";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <div className={styles.aboutus}>
          <h1> About us</h1>
          <h2>Welcome to the First Ever Skiathos Service Website!</h2>
        </div>
        <div className={styles.who}>
          <h1>Who are we and what experiences do we offer?</h1>
          <h2>
            Skiathos Travellers started in 2021 when we saw from many travelers
            coming to the Sporades have a big gap in information about the daily
            cruises, the routes they make, and the options they have where to
            have a nice dinner and what vehicle to rent. Through a quick search
            and many discussions with travelers and service providers, we
            realized how difficult it is for tourists to find and book things
            they can do at their destination, as well as find out where to go
            and what places to visit. So we designed a booking system for daily
            cruises and boat rentals and various service offerings that were
            targeted at travelers. Our goal is to serve all these needs because
            our activity in the market has allowed us to come close to these
            people and help them so that they can make a daily cruise to
            Sporades unforgettable and with many experiences. Here you can find
            all the information about the beaches, the sights, the activities
            and the daily cruises for the island.
          </h2>
          <h1>Our vision?</h1>
          <h2>
            To provide quality services that exceed the expectations of our
            valuable clients.
          </h2>
          <h1>Our mission?</h1>
          <h2>
            To provide excellent customer service through our dedication to the
            sea and love for our beautiful land. We hope to build long term
            relationships with customers who will return to their next trip to
            Sporades.
          </h2>
          <h1>Our team?</h1>
          <h2>
            Our team is highly qualified and has many years of experience in
            Greek waters. Having explored and grown in the Sporades. We would
            like to present you all the beauty of Sporades along with the
            experiences we have experienced. All this enjoying the magical
            experience of daily cruises and the wonderful restaurants that the
            island provides.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
