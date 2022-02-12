import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [ Username, setUsername ] = useState("");
    const [ Password, setPassword ] = useState("");
    const [ Email, setEmail ] = useState("");
    const [ BirthDate, setBirthDate ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://notflixapi.herokuapp.com/users/register', {Username, Password, Email, BirthDate})
        .then(response=>{
            if(response.status === 201)
            {
                alert('Registration successful!');
                navigate("/");
            }
           
        })
        .catch(err=>console.log(err));
      };

    return (
        <div style={{marginTop: '15%'}}>
            <center>
       <Form>
         <h2> Registration form </h2>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" required value={Username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required value={Password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" required value={Email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" required value={BirthDate} onChange={e => setBirthDate(e.target.value)} />
      </Form.Group>
      <Button variant="danger" type="submit" onClick={handleSubmit}>Register</Button>
      <Button variant="danger" type="submit" onClick={()=>window.location.replace("/")}>Login</Button>
    </Form> 
    
    </center>

    </div>
    
    );
}
