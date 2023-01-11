import styles from "./CardHolder.module.scss";

const Cardholder = ({image, title, body, brand, vehicle}) => {
  return (
    <div className={styles.cardholder}>
      <div className={styles.cardcontainer}>
        <div className={styles.imagecontainer}>
          <img src={image} alt="" />
        </div>
        <div className={styles.cardcontent}>
          <div className={styles.cardtitle}>
            <h3>{title}</h3>
          </div>
          <div className={styles.cardbody}>
            <p>{body}</p>
          </div>

          <div className={styles.btn_container}>
            <a href={`/car/${vehicle}/${brand}`}>
              <button>
                <h2>
                  Rent now! <i className="fa-solid fa-cart-shopping"></i>
                </h2>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardholder;
