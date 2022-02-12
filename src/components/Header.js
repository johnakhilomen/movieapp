import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import FavoritesModal from './FavoritesModal';
import EditUserModal from './EditUserModal';

export default function Header() {
  const navigate = useNavigate();
  const [user, setuser] = useState('');
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token)  {
        navigate("/");
    }
    var user = jwt_decode(token)
    setuser(user); 
  }, []);
  
  const logOut = () => {
    localStorage.setItem('token', '');
    navigate("/");
}

  return <header>
        <h1>Welcome {user.Username}</h1>
        <div style={{float: 'right', marginTop: '-50px'}}>
        <EditUserModal/>
        <FavoritesModal />
        <button onClick={logOut} href='#'>
            Log out
        </button>
        </div>
        <hr width="100%" />
        <br />
      </header>;
}
