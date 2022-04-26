import React, { useState } from "react";
import styledComponents from "styled-components";

const FareDiv = styledComponents.div`
display: flex;
align-items: center;
`
const FareTypeDiv = styledComponents.ul`
  margin-top: 0px;
  display: flex;
  background: #f2f2f2;
  font-weight: 700;
  font-family: Lato;
  font-size: 12px;
  padding: 0px;
  border-radius: 4px;
`;
const FareHeading = styledComponents.span`
  color: #9d9d9c;
  width: 60px;
  display: flex;
  font-weight: 700;
  font-family: Lato;
  font-size: 12px;
  padding-left:0px;
  margin-top: -15px;
`;
const FareItems = styledComponents.li`
  // position: relative;
  padding: 0px 6px 8px 0px;
  cursor: pointer;
  font-size: 12px;
  color: #4a4a4a;
  border-left: solid 1px #fff;
  display: flex;
  align-items: center;
  height: 45px;
  min-width: 80px;
  max-width: 112px;
  line-height: 14px !important;
  border-radius: 4px;

  ${({ active }) =>
    active &&
    `
    border-radius: 4px;
    background: #eaf5ff;
  `}
  
`;
const RedioItem = styledComponents.input.attrs({
  type: "radio",
  name: "fare_type",
})`
  ${({ active }) =>
  active &&
  `
  background: #eaf5ff;
  `}
`;
const LabelItem = styledComponents.div`
  // color: #9b9b9b;
`;

const FareWidget = (props) => {
  const [fareDataId, setFareDataId] = useState(1);
  return (
    <FareDiv>
      <FareHeading>Select A Fare Type:</FareHeading>
      <FareTypeDiv>
        {props.data.map((value, i) => (
          <FareItems active={value.id === fareDataId} onClick={() => setFareDataId(value.id)} key={value.id}>
            <RedioItem id={value.id} checked={value.id === fareDataId} />
            <LabelItem htmlFor={value.id}>
              {value.name}
              {value.newItem && 
              <span style={{color:'red'}}> New</span>}
            </LabelItem>
          </FareItems>
        ))}
      </FareTypeDiv>
    </FareDiv>
  );
};

export default FareWidget;
