import React from "react";
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div>
    <h1>Portland Area Farmers Markets</h1>
     <Link to="/availableproducts">Produce by Season</Link> | <Link to="/marketschedule">Weekly Market Schedule</Link> | <Link to="/newmarketschedule">Staff: Add to Market Schedule</Link>
   </div>
  );
}

export default Home;
