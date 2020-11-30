import React from "react";
import ReactDOM from "react-dom";
import books from "./books";
import Book from "./Book";
//CSS
import "./index.css";

//React.createElement('html tag',{},'message')
// <> refers to React.Fragment
const Index = () => {
  const body = {
    data: [
      {
        event_name: "Purchase",
        event_time: 1606739006,
        user_data: {
          em:
            "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068",
          ph: null,
        },
        custom_data: {
          currency: "USD",
          value: "140.99",
        },
      },
    ],
    test_event_code: "TEST65559",
  };
  const sendFbPostRequest = async () => {
    const url = `https://graph.facebook.com/v9.0/218089216368019/events?access_token=EAAEa64vjbq4BANMqx1JD6w2tVfP1oriTFCZAmU51FDRAh6DNJrEd4kBfp9div6okpWepKPV3VW6JsGbww0Ce0JIJVWIink37DXJPO6uSf3WMK5nWLL1JceiYdxEM1ZClKJ7iD2SNjxHP03InoZA5F3T7YieSdVZB96zUf8n59GTwAGSonS2W`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: body.data,
    });

    const resData = await response.json();
    console.log(resData);
  };
  return (
    <>
      <section className="bookList">
        {books.map((book, index) => (
          <Book key={index} {...book}></Book>
        ))}
      </section>
      <button onClick={() => sendFbPostRequest()}> Click me</button>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
