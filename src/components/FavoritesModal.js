import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import jwt_decode from 'jwt-decode';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';


export default function FavoritesModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token)  {
            navigate("/");
        }
        var user = jwt_decode(token);
        axios
        .get(`https://notflixapi.herokuapp.com/users/${user.Username}/favorites`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then((res) => {
           setMovies(res.data.Favorites);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

    return (
        <>
          <button onClick={handleShow}>
            View Favorite Movies
          </button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Favorites</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    movies.map((movie, index) => (
                        <MovieCard className="movieCard" key={index} movie={movie} />
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}
