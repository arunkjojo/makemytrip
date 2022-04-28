import React from "react";
import LocationList from "./LocationWidget/LocationList";
import { useSelector, useDispatch } from "react-redux";
import { changeShowDate } from "../redux/dateSlice";
import { changeShowTraveller } from "../redux/travellerSlice";
import {
  changeFromLocation,
  changeToLocation,
  changeShowLocation,
} from "../redux/locationSlice";
import {
  LocationWidgetDiv,
  // DivLabel,
  WidgetLabel,
  // Span,
  WidgetSpan,
  //DivValue,
  WidgetValue,
  //LocationDescription,
  LocationDropDiv,
} from "../customStyle";
import { locationData } from "../DB";

const LocationWidget = (props) => {
  const locationValue = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const locationFixHandler = (data) => {
    if (props.primaryKey === "from") {
      let from = {
        id: data.id,
        name: data.name,
        contry: data.contry,
        description: data.description,
        code: data.code,
      };
      dispatch(changeFromLocation(from));
    } else if (props.primaryKey === "to") {
      let to = {
        id: data.id,
        name: data.name,
        contry: data.contry,
        description: data.description,
        code: data.code,
      };
      dispatch(changeToLocation(to));
    }
  };

  const showLocationHandler = () => {
    dispatch((
      changeShowTraveller(false),
      changeShowDate(false),
      changeShowLocation(!locationValue.showLocation)
    ));
  };
  return (
    <LocationWidgetDiv onClick={showLocationHandler}>
      <WidgetLabel 
        active={locationValue.showLocation}
        onClick={showLocationHandler} 
        htmlFor={props.label}
      >
        <WidgetSpan>{props.label}</WidgetSpan>
        <WidgetValue
          style={{ fontWeight: 900 }}
        >
          <span className="headTilte">{props.name}</span>
        </WidgetValue>
        <WidgetValue>
          <span className="para">{props.code}, {props.description}</span>
        </WidgetValue>
      </WidgetLabel>
      {locationValue.showLocation && (
        <LocationDropDiv>
          <LocationList
            data={locationData}
            locationFixed={locationFixHandler}
          />
        </LocationDropDiv>
      )}
    </LocationWidgetDiv>
  );
};

export default LocationWidget;
