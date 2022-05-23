import React, { useEffect, useState } from "react";
import {
  FareWidgetDiv,
  FareWidgetHeading,
  FareWidgetType,
  FareWidgetItems,
  RedioItem,
  LabelItem,
} from "../customStyle";
import { useSelector, useDispatch } from "react-redux";
import { changeTrip, changeFare } from "../redux/tripSlice";
const FareWidget = (props) => {
  const [fareDataId, setFareDataId] = useState(1);
  const tripData = useSelector(state => state.tripType.tripType);
  const dispatch = useDispatch()
  const fareChanger = (v) => {
    setFareDataId(v.id)
    if(v.id === 5 ) {
      dispatch(changeTrip({
        tripType:"ONEWAY"
      }));
    }
    dispatch(changeFare({
      fareType:v.name
    }));
  }
  useEffect(()=>{
    if(tripData !== "ONEWAY" && fareDataId === 5){
      setFareDataId(1);
      dispatch(changeFare({
        fareType:"Regular"
      }));
    }
  },[tripData, fareDataId, dispatch, setFareDataId])
  return (
    <FareWidgetDiv>
      <FareWidgetHeading>Select A Fare Type:</FareWidgetHeading>
      <FareWidgetType tabIndex="-1">
        {" "}
        {props.data.map((value, i) => (
          <FareWidgetItems
            tabIndex="-1"
            active={value.id === fareDataId}
            onClick={(e) => {e.preventDefault(); fareChanger(value)}}
            key={value.id}
            disAble = {value.id === 5 && tripData !== "ONEWAY"}
          >
            <RedioItem id={value.id} checked={value.id === fareDataId} />
            <LabelItem className="labelItem" htmlFor={value.id}>
              {value.name}
              <br/>
              Fares
              {value.newItem && <span className="newItem">New</span>}{" "}
            </LabelItem>
            {value.description && (
              <div className="specialFareTooltip">
                <p className="label">{value.description.label}</p>
                <p className="message">{value.description.message}</p>
              </div>
            )}
          </FareWidgetItems>
        ))}
      </FareWidgetType>
    </FareWidgetDiv>
  );
};

export default FareWidget;
