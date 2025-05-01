import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  console.log(category);

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
    }
  };
  

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  console.log(apiData);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Populor on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {[...apiData].reverse().map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + card.backdrop_path}
              alt=""
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
