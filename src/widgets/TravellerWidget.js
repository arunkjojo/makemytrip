import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeShowLocation } from "../redux/locationSlice";
import { changeShowDate } from "../redux/dateSlice";
import { changeShowTraveller } from "../redux/travellerSlice";
import TravellersClassList from "./TravellerWidget/TravellersClassList";
import { WidgetDiv, DivLabel, Span, TravellerDropDiv, WidgetValue } from "../customStyle";

const TravellerWidget = (props) => {
  const travellerData = useSelector(state => state.traveller);
  const dispatch = useDispatch();
  const showTravellerHandler = (e) => {
    e.preventDefault();
    dispatch((
      changeShowLocation(false),
      changeShowDate(false),
      changeShowTraveller(!travellerData.showTraveller)
    ));
  };
  return (
    <>
      <WidgetDiv
        onClick={showTravellerHandler}
        widthValue={props.widthValue}
      >
        <DivLabel>
          <Span>Travellers & Class</Span>
          <WidgetValue>
            <span className="headTilte">{travellerData.count.total} </span>
            <span className="subTiitle">Travellers</span>
          </WidgetValue>
          <WidgetValue>
            <span className="para">{travellerData.classes} </span>
          </WidgetValue>
        </DivLabel>
      </WidgetDiv>
      {travellerData.showTraveller && (
        <TravellerDropDiv>
          <TravellersClassList />
        </TravellerDropDiv>
      )}
    </>
  );
};

export default TravellerWidget;
