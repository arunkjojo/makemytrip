import React, { useState } from "react";
import { FareTypeDiv, FareItems, RedioItem, LabelItem } from "../customStyle";

const TripWidget = (props) => {
  const [tripId, setTripId] = useState(0);
  return (
    <FareTypeDiv>
      {props.title.map((v, i) => (
        <FareItems active={i === tripId} onClick={() => setTripId(i)} key={i}>
          <RedioItem id={i} checked={i === tripId} />
          <LabelItem htmlFor={i}>{v.value}</LabelItem>
        </FareItems>
      ))}
    </FareTypeDiv>
  );
};

export default TripWidget;
