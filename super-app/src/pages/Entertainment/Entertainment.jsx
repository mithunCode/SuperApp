import React, { useEffect, useState } from "react";
import dp from "../../assets/dp.png";
import "./entertainment.css";
import axios from "axios";
const Entertainment = () => {
  const [ent, setEnt] = useState([]);
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: { genre: "Romance" },
    headers: {
      "X-RapidAPI-Key": "46993aa5e2mshf424e4034124846p139af6jsn063932f3b74a",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getRecommendations = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setEnt(localStorage.getItem("selectedGenre"));
    getRecommendations();
  }, []);

  return (
    <>
      <div className="ent-header">
        <h2 className="super-app ent-super ">Super App</h2>
        <div className="ent-profile">
          <img
            src={dp}
            height={40}
            width={40}
            alt="ProfilePicture"
            className="ent-profile"
          />
        </div>
      </div>
      <div className="ent">
        <h3 className="ent-choice">Entertainment according to your choice</h3>
      </div>
      <div className="movie-container">
        {movies.map((film, i) => {
          return film.primaryImage?.url ? (
            <div className="movies" key={i}>
              <img
                src={film.primaryImage?.url}
                width={200}
                height={150}
                alt=""
              />
            </div>
          ) : null;
        })}
      </div>
    </>
  );
};

export default Entertainment;
