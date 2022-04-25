import React from "react";
import styledComponents from "styled-components";
import TripWidget from "../../widgets/searchTrip/TripWidget";
const TripDiv = styledComponents.div`
  display: flex;
`
const tripLabel = [
  {
    id:1,
    value:'ONEWAY'
  },
  {
    id:2,
    value:'ROUND TRIP'
  },
  {
    id:3,
    value:'MULTI CITY'
  }
];
const SearchTrip = (props) => {
  let filteredTrip = tripLabel.filter(f => f.id <= props.limit);
  return (
    <TripDiv>
      <TripWidget title={filteredTrip} />
      <div style={{marginLeft: 'auto'}}>
        <h1 style={{fontSize: '14px',textAlign: 'center'}}>
          {props.description}
        </h1>
      </div>
    </TripDiv>
  );
};

export default SearchTrip;
