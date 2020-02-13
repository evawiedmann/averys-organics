import React from 'react';
import Header from './components/Header';
import { Row, Col, Container } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarketSchedule from './components/MarketSchedule';
import Home from './components/Home';
import NewMarketScheduleForm from './components/NewMarketScheduleForm';
import AvailableProducts from './components/AvailableProducts'
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';

function App() {
  return (
    <div id='bodyDiv'>

    <Header/>
    <Switch>
       <Route exact path='/home' component={Home} />
       <Route path='/availableproducts' component={AvailableProducts} />
       <Route path='/marketschedule' component={MarketSchedule} />
       <Route path='/newmarketschedule' component={NewMarketScheduleForm} />
       <Route component={Error404} />
     </Switch>

    </div>
  );
}

export default App;
