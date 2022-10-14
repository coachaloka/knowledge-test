import React from "react";
import './Book.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Book = ({ book }) => {
  // console.log(book)
  const { name, logo, total, id } = book;

  return (
    <div className="book-container">
      <img src={logo} alt="pic" />
      <div className="books">
        <h4>{name}</h4>
        <h4>Total: {total}</h4>
        <Link to={`/quizes/${id}`}>
            <button className="btn-practice">
                Start Practice<FontAwesomeIcon className="icon" icon={faArrowRight} />
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
