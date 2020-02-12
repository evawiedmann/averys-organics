import React from "react";
import { Link } from 'react-router-dom';
import '../Home.css';

function Home(){
  return (
    <div>
      <div class="image-container">
        <div class="text">AVERY'S ORGANICS</div>
      </div>
     <Link to="/availableproducts">Produce by Season</Link> | <Link to="/marketschedule">Weekly Market Schedule</Link> | <Link to="/newmarketschedule">Staff: Add to Market Schedule</Link>
   </div>
  );
}

export default Home;
