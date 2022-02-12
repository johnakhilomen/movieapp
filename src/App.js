import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainView from './pages/MainView';
import MovieView from './pages/MovieView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/main' element={<MainView />} />
        <Route path='/movieView' element={<MovieView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
