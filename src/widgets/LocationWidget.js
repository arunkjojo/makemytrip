import React, { useEffect, } from "react";
import LocationList from "./LocationWidget/LocationList";
import { useSelector, useDispatch } from "react-redux";
import { changeFromLocation, changeToLocation } from "../redux/locationSlice";
import {
  WidgetDiv,
  WidgetLabel,
  WidgetSpan,
  WidgetValue,
  LocationDropDiv,
  ErrorSection,
  ErrorIcon,
  ErrorMessage,
} from "../customStyle";
import useComponentVisible from "../helper/useComponentVisible";
import { changeLocations } from "../redux/flightSlice";

const LocationWidget = (props) => {
  const locations = useSelector(state => state.location);
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);
  // const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const locationFixHandler = (data) => {
    // setVisible(false);
    if (props.primaryKey === "from") {
      let from = {
        id: data.id,
        name: data.name,
        country: data.country,
        description: data.description,
        code: data.code,
        countryCode: data.countryCode,
        icon: data.icon,
      };
      dispatch(changeFromLocation(from));

    } else if (props.primaryKey === "to") {
      let to = {
        id: data.id,
        name: data.name,
        country: data.country,
        description: data.description,
        code: data.code,
        countryCode: data.countryCode,
        icon: data.icon,
      };
      dispatch(changeToLocation(to));
    } else{
      let intermediate = {
        id: data.id,
        name: data.name,
        country: data.country,
        description: data.description,
        code: data.code,
        countryCode: data.countryCode,
        icon: data.icon,
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

  useEffect(()=>{
    setIsComponentVisible(props.expand);
  },[props, setIsComponentVisible]);
  
  function showChildComp() {
    // console.log("showChildComp location");
    props.onClick();
  }
  return (
    <WidgetDiv 
      widthValue={props.widthValue}
      ref={ref} 
      onFocus={showChildComp} 
      tabIndex={0}
      style={props.label === 'To'?{marginLeft: "-18px"}:null}
    >
      <WidgetLabel 
        htmlFor={props.label}
      >
        <WidgetSpan active={isComponentVisible}>{props.label}</WidgetSpan>
        
        <WidgetValue style={{ fontWeight: 900 }} >
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
      {/* {visible && isComponentVisible && ( */}
      {props.expand && isComponentVisible && (
        <LocationDropDiv>
          <LocationList
            keyValue={props.primaryKey}
            locationFixed={locationFixHandler}
          />
        </LocationDropDiv>
      )}
    </WidgetDiv>
  );
};

export default LocationWidget;
