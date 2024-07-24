import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { bookArray2 } from "./books";
import Book from "./book";

const BookList = () => {
  return (
    <section className="booklist">
      {bookArray2.map((item) => {
        return <Book {...item} key={item.id} />;
      })}
    </section>
  );
};

const react = ReactDOM.createRoot(document.querySelector("#root"));

react.render(<BookList />);
