import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./API";
import "../App";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const { addToFavorites, removeFromFavorites, favorites } = useAppContext();

  const navigate = useNavigate();

  console.log(favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => {
        let { id, title, image_url } = book;
        return (
          <div key={id} className="book">
            <div>
              <h2>{title}</h2>
            </div>
            <div>
              <img src={image_url} alt={title} onClick={()=>navigate(`/books/${id}`)}/>
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
