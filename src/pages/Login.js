import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [ Username, setUsername ] = useState("");
    const [ Password, setPassword ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://notflixapi.herokuapp.com/login', {Username, Password})
        .then(response=>{
            if(response.status === 200)
            {
                alert('Login successful!');
                localStorage.setItem('token', response.data.token);
                navigate("/main");
            }
           
        })
        .catch(err=>console.log(err));
      };

        return (
            <div style={{marginTop: '15%'}}>
            <center>
            <Form>
                <h2>Log in to start</h2>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" value={Username} onChange={e => setUsername(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" value={Password} onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="danger" required type="button" onClick={handleSubmit}>Log in</Button>
              <Button variant="danger" type="submit" onClick={()=>window.location.replace("/register")}>Register</Button>
            </Form>
            </center>
            </div>
          );
}
 