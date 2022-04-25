import React from "react";
import styledComponents from "styled-components";
import TripWidget from "../../widgets/searchTrip/TripWidget";
const TripDiv = styledComponents.div`
  display: flex;
`
const SearchTrip = () => {
  return (
    <TripDiv>
      <TripWidget title={[
        'ONEWAY',
        'ROUND TRIP',
        'MULTI CITY'
      ]} />
      <div style={{marginLeft: 'auto'}}>
        <h1 style={{fontSize: '14px',textAlign: 'center'}}>
          Book International and Domestic Flights
        </h1>
      </div>
    </TripDiv>
  );
};

export default SearchTrip;
