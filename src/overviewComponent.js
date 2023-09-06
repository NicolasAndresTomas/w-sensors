//import libaries
import React from 'react';
import './index.css'; 

//import images
import graph from './images/graph.png'

//overview function
function OverviewComponent() {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <p>Access your data from our device</p>
      
      <div className="overview-component">
        <h1>Heart Rate</h1>
        <img src={graph} alt="Graph" />
      </div> 

      <div className="overview-component">
        <h1>Sweat Level</h1>
        <img src={graph} alt="Graph" />
      </div> 

      <div className="overview-component">
        <h1>Distance (km)</h1>
        <img src={graph} alt="Graph" />
      </div> 
    </div>
  );
}

export default OverviewComponent;