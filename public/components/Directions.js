import React from 'react';

export default class Directions extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header-large">Drive</h1>
        <div className="paragraph-text">
          If you are driving, we recommend using Google Maps to navigate.<br/>
          Parking is available in the Back Bay Garage (222 Berkeley Street)<br/>
          and is $7 for the night with validation.<br/><br/>
          Email us at katiepluswalter(at)gmail(dot)com<br/>
          if you will be parking a car so we can get you a voucher!<br/><br/>
        </div>
        <h1 className="header-large">Fly</h1>
        <div className="paragraph-text">
          The closest airport is Logan International Airport in Boston (15 minute drive).<br/><br/>
        </div>
        <h1 className="header-large">Public Transporation</h1>
        <div className="paragraph-text">
          If you're coming via Amtrak or the MBTA Commuter Rail,<br/>
          the closest station is Back Bay (5 min walk).<br/><br/>
          If you're coming via the T, the closest stations are<br/>
          Back Bay (Orange Line) and Copley (Green Line).<br/><br/>  
        </div><br/>
      </div>
    );
  }
}