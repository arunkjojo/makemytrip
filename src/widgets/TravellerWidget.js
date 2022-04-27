import React, { useState } from "react";
import TravellersClassList from "./TravellerWidget/TravellersClassList";
import { WidgetDiv, DivLabel, Span, DivValue, TravellerDropDiv } from "../customStyle";

const TravellerWidget = (props) => {
  const [showTraveller, setShowTraveller] = useState(false);
  const [traveller, setTraveller] = useState(1);
  const totalTravellerHandlrer = (dt) => {
    setShowTraveller(false);
    setTraveller(dt);
  };
  return (
    <>
      <WidgetDiv
        onClick={() => setShowTraveller(!showTraveller)}
        widthValue={props.widthValue}
      >
        <DivLabel>
          <Span>Travellers & Class</Span>
          <DivValue>
            {traveller ? traveller + `Traveller` : props.value + `Traveller`}
          </DivValue>
        </DivLabel>
      </WidgetDiv>
      {showTraveller && (
        <TravellerDropDiv>
          <TravellersClassList totalTraveller={totalTravellerHandlrer} />
        </TravellerDropDiv>
      )}
    </>
  );
};

export default TravellerWidget;
