import React from "react";
import TripWidget from "../../widgets/TripWidget";
import { TripDiv, TripDesc, Description } from "../../customStyle";
import { tripLabel } from "../../DB";
const SearchTrip = (props) => {
  let filteredTrip = tripLabel.filter((_,i) => i < props.limit); //f.id <= props.limit
  return (
    <TripDiv>
      <TripWidget title={filteredTrip} />
      <TripDesc>
        <Description>{props.description}</Description>
      </TripDesc>
    </TripDiv>
  );
};

export default SearchTrip;
