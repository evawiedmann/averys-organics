import React from 'react';
import Header from './components/Header';
import { Row, Col, Container } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarketSchedule from './components/MarketSchedule';

function App() {
  return (
    <div id='bodyDiv'>

    <Header/>
    <Container>
    <Row>
    <Col></Col>
    <Col md={8}>
    <MarketSchedule/>
    </Col>
    </Row>
    </Container>

    </div>
  );
}

export default App;
