import React, { useState } from "react";
import TravellersClassList from "./TravellerWidget/TravellersClassList";
import styled from "styled-components";
const WidgetDiv = styled("div")`
  height: 112px;
  border-right: solid 1px #fff;
`;
const DivLabel = styled.label`
  padding: 10px 19px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color:gray;
`
const Span = styled.span`
text-transform: uppercase;
font-weight: 700;
margin-bottom: 5px;
`;

const DivValue = styled.span`
  font-family: Lato;
  line-height: 36px;
  border: 0;
  outline: 0;
  color:#000;
  background: none;
  min-width: 140px;
  max-height: 36px;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
  font-size: 30px;
`

const TravellerDropDiv = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  position: absolute;
  right: 0;
  top: 35px;
  width: 410px;
  padding: 20px 40px;
  z-index: 11;
  width: 610px !important;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;

  font-size: 12px;
  line-height: 12px;
`;
const TravellerWidget = (props) => {
  const [showTraveller, setShowTraveller] = useState(false);
  const [traveller, setTraveller] = useState(1);
  const totalTravellerHandlrer = (dt) => {
    setShowTraveller(false);
    setTraveller(dt);
  }
  return (
    <>
      <WidgetDiv onClick={()=>setShowTraveller(!showTraveller)} widthValue={props.widthValue}>
        <DivLabel>
          <Span>Travellers & Class</Span>
          <DivValue>
            {traveller?traveller+`Traveller`:props.value+`Traveller`}
          </DivValue>
        </DivLabel>
      </WidgetDiv>
      {showTraveller && (
        <TravellerDropDiv>
          <TravellersClassList totalTraveller ={totalTravellerHandlrer} />
        </TravellerDropDiv>
      )}
    </>
  );
};

export default TravellerWidget;
