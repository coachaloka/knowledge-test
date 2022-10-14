import React from "react";
import './Book.css';

const Book = ({ book }) => {
  // console.log(book)
  const { name, logo, total } = book;
  return (
    <div className="book-container">
      <img src={logo} alt="pic" />
      <div>
        <h2>{name}</h2>
        <h4>{total}</h4>
      </div>
    </div>
  );
};

export default Book;
