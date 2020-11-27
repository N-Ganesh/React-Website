import React from "react";
import ReactDOM from "react-dom";
import books from "./books";
import Book from "./Book";
//CSS
import "./index.css";

//React.createElement('html tag',{},'message')
// <> refers to React.Fragment

const Index = () => {
  return (
    <section className="bookList">
      {books.map((book, index) => (
        <Book key={index} {...book}></Book>
      ))}
    </section>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
