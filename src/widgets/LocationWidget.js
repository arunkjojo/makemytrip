import React, { useState } from "react";
import LocationList from "./LocationWidget/LocationList";
import { LocationWidgetDiv, DivLabel, Span, DivValue, LocationDescription, LocationDropDiv } from "../customStyle"
import { locationData } from "../DB";

const LocationWidget = (props) => {
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState({
    name: props.name,
    label: props.desc,
    code: props.code,
  });
  const locationFixHandler = (data) => {
    setLocation({ name: data.name, label: data.label, code: data.code });
  };
  return (
    <LocationWidgetDiv onClick={() => setShowLocation(!showLocation)}>
      <DivLabel
        onClick={() => setShowLocation(!showLocation)}
        htmlFor={props.label}
      >
        <Span>{props.label}</Span>
        <DivValue 
          style={{fontWeight: 900}}
          id={props.label}
          type="text"
          readOnly=""
          value={location.name}
        >{location.name}</DivValue>
        <LocationDescription>
          {location.code}, {location.label}
        </LocationDescription>
      </DivLabel>
      {showLocation && (
        <LocationDropDiv>
          <LocationList data={locationData} locationFixed={locationFixHandler} />
        </LocationDropDiv>
      )}
    </LocationWidgetDiv>
  );
};

export default LocationWidget;
