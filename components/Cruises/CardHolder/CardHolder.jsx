import styles from "./CardHolder.module.scss";
import {useRouter} from "next/router";
import useStore from "../../DataStorage";
const Cardholder = ({image, title, body, id}) => {
  const router = useRouter();
  const findCruise = useStore((state) => state.findCruise);
  const previewPhone = useStore((state) => state.previewPhone);
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
            <button onClick={() => router.push(`/cruises/${id}`)}>
              Book now! <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.preview}>
        {" "}
        <button
          onClick={() => {
            findCruise(id), previewPhone(true);
          }}
        >
          {" "}
          Preview
        </button>
      </div>
    </div>
  );
};

export default Cardholder;
