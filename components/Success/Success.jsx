import { useEffect, useState, useRef } from "react";
import { supabase } from "../../utils/supabaseCreate";
import emailjs from "emailjs-com";

function Success() {
  const [names, setName] = useState("");
  const [surnames, setSurname] = useState("");
  const [numbers, setNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([names, surnames, numbers, selectedDate]);
  const [loading, setLoading] = useState(true);

  const sendEmail = (name, surname, phone, date, email) => {
    emailjs
      .send(
        "service_462g39c",
        "template_zagojfa",
        {
          name: name,
          surname: surname,
          phone: phone,
          date: date,
          email: email,
        },
        "o_vaqleCtcTkAiWrI"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(async () => {
    if (localStorage.getItem("name")) {
      let name_temp = localStorage.getItem("name");
      let surname_temp = localStorage.getItem("surname");
      let number_temp = localStorage.getItem("number");
      let date_temp = localStorage.getItem("selectedDate");
      let email_temp = localStorage.getItem("email");
      setName(name_temp);
      setSelectedDate(date_temp);
      setSurname(surname_temp);
      setNumber(number_temp);
      setEmail(email_temp);
      await insert(name_temp, surname_temp, number_temp, date_temp, email_temp);
      sendEmail(name_temp, surname_temp, number_temp, date_temp, email_temp);
      localStorage.removeItem("name");
      localStorage.removeItem("surname");
      localStorage.removeItem("number");
      localStorage.removeItem("selectedDate");
      localStorage.removeItem("email");
    }
    setLoading(false);
  }, []);

  const insert = async (name, surname, phone, Date, email) => {
    const { data, error } = await supabase.from("costumers").insert(
      [
        {
          type: "hello",
          name,
          surname,
          phone,
          Date,
          email,
        },
      ],
      console.log(data)
    );

    if (error) {
      alert("error");
      console.log(error);
    } else console.log(data);
  };

  return !loading ? (
    <div>
      {names} {surnames}
      {numbers}
      {selectedDate}
      {email}
    </div>
  ) : (
    <p>loading...</p>
  );
}

export default Success;
