import React from 'react';
import Header from './components/Header';
import { Row, Col, Container } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarketSchedule from './components/MarketSchedule';

function App() {
  return (
    <div>

    <Header/>
    <Container>
    <MarketSchedule/>
    </Container>

    </div>
  );
}

export default App;
