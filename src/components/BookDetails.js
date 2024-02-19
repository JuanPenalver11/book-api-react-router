import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "../App";
import { useParams } from "react-router";
import { DETAILS_URL } from "./API";


const BookDetails = () => {

  const [book, setBooks] = useState({})
  const {title, image_url, authors, genres,description } = book

  const { id } = useParams();

  useEffect (()=>{
    axios.get(DETAILS_URL + id)
    .then(res => {setBooks(res.data)
    console.log(res.data)})
    .catch(err => console.log(err))
  },[id])

 

  return <div className="book-details">
    <div>
      <h1>{title}</h1>
      <img src={image_url} alt={title} />
    </div>
    <div>
      <p>{description}</p>
    </div>
    <ul>
      <li>{authors}</li>
      <li>{genres}</li>
    </ul>
  </div>
};

export default BookDetails;
