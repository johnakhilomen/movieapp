import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Container } from "react-bootstrap";
import Header from "../components/Header";

export default function MainView() {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        axios
        .get("https://notflixapi.herokuapp.com/catalog/movies", {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then((res) => {
          setMovies(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

  return <div> 
      <Header />
      <center>
      <Container fluid>
        <div style={{display: 'grid', 'gridGap': '25px', 'gridTemplate': 'auto / repeat(auto-fit, minmax(300px, 1fr))'}} >
    {
        
        movies.map((movie, index) => (
            <MovieCard style={{width: '100%', borderRadius: '8px', overflow: 'hidden', padding: '15px', backgroundColor: 'gray'}} key={index} movie={movie} />
        ))
    }
    </div>
    </Container>
    </center>
  </div>;
}