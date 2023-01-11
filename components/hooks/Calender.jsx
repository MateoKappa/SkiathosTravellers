import React, { useState } from "react";
import Datepicker from "react-datepicker";

import styles from "./Calendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";

export default function Datepick() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={styles.date}>
      <Datepicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
      />
    </div>
  );
}
