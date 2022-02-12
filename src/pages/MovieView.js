import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import jwt_decode from 'jwt-decode';

export default function MovieView() {
    const navigate = useNavigate();
    const location = useLocation();
    const {movie} = location.state;
    let addToFav = () => {
        const token = localStorage.getItem('token')
        if(!token)  {
            navigate("/");
        }
        var user = jwt_decode(token);
        axios
        .post(`https://notflixapi.herokuapp.com/users/${user.Username}/favorites/${movie._id}`,
        {}, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then((res) => {
          alert(res.data)
        })
        .catch((err) => {
          console.error(err);
        });
    }
  return (
      <div>
    <Header></Header>
  <center>
      <div className="movie-view">
  <div className="movie-poster">
    <img src={movie.ImagePath} />
  </div>
  <div className="movie-title">
    <span className="label">Title: </span>
    <span className="value">{movie.Title}</span>
  </div>
  <div className="movie-genre">
    <span className="label">Genre: </span>
    <span className="value">{movie.Genre.Name}</span>
  </div>
  <div className="movie-director">
    <span className="label">Director: </span>
    <span className="value">{movie.Director.Name}</span>
  </div>
  <div className="movie-description">
    <span className="label">Description: </span>
    <span className="value">{movie.Description}</span>
  </div>
  <button onClick={()=>navigate(-1)}>Back</button>
  <button onClick={addToFav}>Add movie to favorites</button>
</div>
</center>
</div>
    )
}
