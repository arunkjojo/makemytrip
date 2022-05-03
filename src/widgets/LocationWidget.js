import React, { useState } from "react";
import LocationList from "./LocationWidget/LocationList";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFromLocation,
  changeToLocation,
} from "../redux/locationSlice";
import {
  WidgetDiv,
  WidgetLabel,
  WidgetSpan,
  WidgetValue,
  LocationDropDiv,
  ErrorSection,
  ErrorIcon,
  ErrorMessage
} from "../customStyle";
import { locationData } from "../DB";
import useComponentVisible from "../helper/useComponentVisible";

import {
  changeLocations
} from "../redux/flightSlice";

const LocationWidget = (props) => {
  const locations = useSelector(state => state.location);
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const locationFixHandler = (data) => {
    setVisible(false);
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
    } else{
      let intermediate = {
        id: data.id,
        name: data.name,
        contry: data.contry,
        description: data.description,
        code: data.code,
      };

      dispatch(changeLocations({
        primaryIndex: props.countNumber,
        from: intermediate,
        to: intermediate,
        departure: new Date().toDateString(),
        return: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toDateString(),
      }));
    }

    props.onLocationChange(data);
  };
  return (
    <WidgetDiv 
      widthValue={props.widthValue}
      ref={ref} 
      onClick={(e) =>{
        e.preventDefault();
        setVisible(true);
        setIsComponentVisible(true);
      }}
    >
      <WidgetLabel 
        htmlFor={props.label}
      >
        <WidgetSpan active={isComponentVisible}>{props.label}</WidgetSpan>
        <WidgetValue
          style={{ fontWeight: 900 }}
        >
          <span className="headTilte">{props.name}</span>
        </WidgetValue>
        <WidgetValue>
          <span className="para">{props.code}{props.code!==''?',':null} {props.description}</span>
        </WidgetValue>

        {props.primaryKey=== 'to' && locations.from.id === locations.to.id && (
          <ErrorSection>
            <ErrorIcon />
            <ErrorMessage>
              From & To airports cannot be the same
            </ErrorMessage>
          </ErrorSection>
        )}
      </WidgetLabel>
      {visible && isComponentVisible && (
        <LocationDropDiv>
          <LocationList
            data={locationData}
            locationFixed={locationFixHandler}
          />
        </LocationDropDiv>
      )}
    </WidgetDiv>
  );
};

export default LocationWidget;
