import React from 'react'
import '../App'
import { useAppContext } from "./context/appContext";

const Favorites = () => {

  const { favorites } = useAppContext();
 

  return (
    <div className="book-list">
    {favorites.length > 0 ? favorites.map((favorite) => {
      let { id, title, image_url } = favorite;
      return (
        <div key={id} className="book">
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <img src={image_url} alt={title} />
          </div>
        </div>
      );
    }): <h1 className='empty-favorites'>Add books to your favorites</h1>}
  </div>
  )
}

export default Favorites
