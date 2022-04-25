import React, { useState } from "react";
import styled from "styled-components";
import LocationList from "./LocationWidget/LocationList";
const LocationDiv = styled("div")`
  width: 300px;
  height: 112px;
  border-right: solid 1px #e7e7e7;
`;
const DivLabel = styled.label`
  padding: 10px 19px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: gray;
`;
const Span = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 5px;
`;

const DivValue = styled.input`
  font-family: Lato;
  line-height: 36px;
  border: 0;
  outline: 0;
  background: none;
  min-width: 140px;
  max-height: 36px;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
  font-size: 30px;

  font-weight: 900;
  font-size: 30px;
`;

const LocationDropDiv = styled.div``;

const DOMMY_DATA = [
  {
    id:'recent_data',
    itemName: 'Recent Search',
    data: [
      {
        id: 1,
        name: "Delhi, India",
        shortName: "DEL",
        label: "Delhi Airport",
      },
      {
        id: 2,
        name: "Mumbai, India",
        shortName: "BOM",
        label: "Chhatrapati Shivaji International Airport",
      },
    ],
  },
  {
    id:'popular_data',
    itemName: 'Popular City',
    data: [
      {
        id: 1,
        name: "Delhi, India",
        shortName: "DEL",
        label: "Delhi Airport",
      },
      {
        id: 2,
        name: "Mumbai, India",
        shortName: "BOM",
        label: "Chhatrapati Shivaji International Airport",
      },
      {
        id: 3,
        name: "Mumbai, India",
        shortName: "BOM",
        label: "Chhatrapati Shivaji International Airport",
      },{
        id: 4,
        name: "Delhi, India",
        shortName: "DEL",
        label: "Delhi Airport",
      },
      {
        id: 5,
        name: "Mumbai, India",
        shortName: "BOM",
        label: "Chhatrapati Shivaji International Airport",
      },{
        id: 6,
        name: "Delhi, India",
        shortName: "DEL",
        label: "Delhi Airport",
      },
      {
        id: 7,
        name: "Mumbai, India",
        shortName: "BOM",
        label: "Chhatrapati Shivaji International Airport",
      },{
        id: 8,
        name: "Delhi, India",
        shortName: "DEL",
        label: "Delhi Airport",
      }
    ],
  }
];
const LocationWidget = (props) => {
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState({name:'',label:'',code:''});
  const locationFixHandler = (data) => {
    setLocation(
      {name:data.name,
      label:data.label,
      code:data.code}
    );
  };
  return (
    <LocationDiv onClick={() => setShowLocation(!showLocation)}>
      <DivLabel
        onClick={() => setShowLocation(!showLocation)}
        htmlFor={props.label}
      >
        <Span>{props.label}</Span>
        <DivValue
          id={props.label}
          type="text"
          readOnly=""
          value={location.name}
        ></DivValue>
        <p style={{position: 'relative'}}>{location.label}</p>
      </DivLabel>
      {showLocation && (
        <LocationDropDiv>
          <LocationList data={DOMMY_DATA} locationFixed={locationFixHandler} />
        </LocationDropDiv>
      )}
    </LocationDiv>
  );
};

export default LocationWidget;
