import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import styles from "./tryme.module.scss";
import {supabase} from "../../../utils/supabaseCreate";

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length;
  const [cruise, setCruise] = useState();
  const Router = useRouter();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const get_cruise_by_id = async () => {
    const {data} = await supabase
      .from("cruises")
      .select()
      .match({id: Router.query?.id});

    let images = JSON.parse(data[0].images);
    data[0].parse_images = images;
    console.log(data[0].parse_images);
    setCruise(data[0].parse_images);
  };
  useEffect(() => {
    (async () => {
      Router.query?.id && (await get_cruise_by_id());
    })();
  }, [Router.query?.id]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.left_arrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={styles.right_arrow}
        onClick={nextSlide}
      />
      {cruise?.map((slide, index) => {
        return (
          <div
            className={
              index === current ? `${styles.slider_active}` : `${styles.slider}`
            }
            key={index}
          >
            {index === current && (
              <img src={slide} alt="travel image" className={styles.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
