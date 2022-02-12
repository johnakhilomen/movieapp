import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';

export default function MovieCard(props) {
  const [selectedMovie, setselectedMovie] = useState({});
  const navigate = useNavigate();
  let setMovieSelected = (movie) => {
      setselectedMovie(movie);
      navigate('/movieView',{state:{movie}});
  }

    const { movie } = props;
    return (
      <Card style={{width: '350px'}} >
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description.substring(0,40)}...</Card.Text>
        <Button onClick={() => setMovieSelected(movie)} variant="danger">Open</Button>
      </Card.Body>
    </Card>
    )
}
