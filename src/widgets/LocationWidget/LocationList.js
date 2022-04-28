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
                  key={data.id}
                  onClick={() =>
                    props.locationFixed({
                      id:data.id,
                      name: data.name,
                      contry:data.contry,
                      description: data.description,
                      code: data.code,
                    })
                  }
                >
                  <LocationNameLabel>
                    <LocationName>
                      {data.name},{data.contry}{" "}
                    </LocationName>
                    <LocationLabel>{data.description} </LocationLabel>
                  </LocationNameLabel>
                  <LocationSName>{data.code} </LocationSName>
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
