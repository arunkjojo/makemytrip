import React, { useState } from "react";
import styledComponents from "styled-components";
const LocationDiv = styledComponents.div`
    top: 35px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
    width: 316px;
    position: relative;
    left: 0;
    top: 23px;
    min-height: 316px;
    // overflow: hidden;
    overflow-y: auto;
    z-index: 999999;
`;
const LocationUl = styledComponents.ul`
    max-height: 270px;
    list-style: none;
    margin: 0;
    padding: 0;
`;
const LocationLi = styledComponents.li`
    padding: 5px 10px;
    margin-bottom: 5px;
    cursor: pointer;
    :hover{
        background: #f2f2f2;
    }
`;
const LocationData = styledComponents.div`
  align-items: center;
  display:flex;
  justify-content: space-between
`;
const LocationNameLabel = styledComponents.div`
`;
const LocationName = styledComponents.p`
    font-size: 14px;
    line-height: 14px;
    color:black;
`;
const LocationLabel = styledComponents.p`
    font-size:10px;
    color:black;
`;
const LocationSName = styledComponents.p`
    font-size:10px;
    color:gray;
    float:right;
`;
const Label = styledComponents.span`
    text-transform: uppercase;
    padding: 10px;
    color: #9b9b9b;
    font-weight: 900;
    font-size: 12px;
    line-height: 12px;
`;
const LocationList = (props) => {
  return (
    <LocationDiv>
      {props.data.map((v, i) => (
        <>
          <Label>{v.itemName}</Label>
          <LocationUl>
            {v.data.map((data, index) => (
              <LocationLi>
                <LocationData onClick={()=>props.locationFixed({
                  name: data.name,
                  label: data.label,
                  code: data.shortName
                })}>
                  <LocationNameLabel>
                    <LocationName>{data.name} </LocationName>
                    <LocationLabel>{data.label} </LocationLabel>
                  </LocationNameLabel>
                  <LocationSName>{data.shortName} </LocationSName>
                </LocationData>
              </LocationLi>
            ))}
          </LocationUl>
        </>
      ))}
    </LocationDiv>
  );
};

export default LocationList;
