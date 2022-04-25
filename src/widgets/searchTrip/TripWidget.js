import React, { useState } from "react";
import styledComponents from "styled-components";
const FareTypeDiv = styledComponents.ul`
  display: flex;
  color: #9b9b9b;
  font-weight: 900;
  padding-left: 0px;
`;
const FareItems = styledComponents.li`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 10px;
  padding: 2px 6px;
  border-radius: 20px;
  color: #4a4a4a;

  ${({ active }) =>
    active &&
    `
    background: #e7e7e7;
    color: #000000;
  `}
`;
const RedioItem = styledComponents.input.attrs({
  type: "radio",
  name: "trip_type",
})`
  ${({ active }) =>
  active &&
  `
  background: #eaf5ff;
  `}
`;
const LabelItem = styledComponents.div`
`;

const TripWidget = (props) => {
  const [tripId, setTripId] = useState(0);
  return (
      <FareTypeDiv>
        {props.title.map((value, i) => (
          <FareItems active={i === tripId} onClick={() => setTripId(i)} key={i}>
            <RedioItem id={i} checked={i === tripId} />
            <LabelItem htmlFor={i}>
              {value}
            </LabelItem>
          </FareItems>
        ))}
      </FareTypeDiv>
  );
};

export default TripWidget;
