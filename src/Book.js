import React from "react";

const Book = (props) => {
  const { author, img, title, children } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1> {title} </h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

export default Book;
