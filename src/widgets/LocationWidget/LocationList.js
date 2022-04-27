import React from "react";
import {
  LocationDiv,
  Label,
  LocationUl,
  LocationLi,
  LocationData,
  LocationNameLabel,
  LocationName,
  LocationLabel,
  LocationSName,
} from "../../customStyle";

const LocationList = (props) => {
  return (
    <LocationDiv>
      {props.data.map((v, i) => (
        <div key={i}>
          <Label>{v.itemName}</Label>
          <LocationUl>
            {v.data.map((data, index) => (
              <LocationLi key={index}>
                <LocationData
                  onClick={() =>
                    props.locationFixed({
                      name: data.name,
                      label: data.label,
                      code: data.shortName,
                    })
                  }
                >
                  <LocationNameLabel>
                    <LocationName>
                      {data.name},{data.place}{" "}
                    </LocationName>
                    <LocationLabel>{data.label} </LocationLabel>
                  </LocationNameLabel>
                  <LocationSName>{data.shortName} </LocationSName>
                </LocationData>
              </LocationLi>
            ))}
          </LocationUl>
        </div>
      ))}
    </LocationDiv>
  );
};

export default LocationList;
