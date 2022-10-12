import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';
import Tictactoe from './Game/Tictactoe';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About Me</Link>
            <Link className="nav-link" to="/tictactoe">Tic Tac Toe</Link>
          </Container>
        </Navbar><br />
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tictactoe" element={<Tictactoe />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
