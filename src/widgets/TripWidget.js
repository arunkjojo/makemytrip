import React from "react";
import { FareTypeDiv, FareItems, RedioItem, LabelItem } from "../customStyle";
import { useSelector, useDispatch } from "react-redux";
import { changeTrip } from "../redux/tripSlice";
const TripWidget = (props) => {
  const tripData = useSelector(state => state.tripType.tripType);
  const dispatch = useDispatch();
  const tripChange = (value) => {
    dispatch(changeTrip({
      tripType:value
    }));
  }
  return (
    <FareTypeDiv>
      {props.title.map((value, i) => (
        <FareItems key={i} active={value === tripData} onClick={(e)=>{
          e.preventDefault();
          tripChange(value);
        }}>
          <RedioItem key={i} checked={value === tripData} />
          <LabelItem htmlFor={i}>{value}</LabelItem>
        </FareItems>
      ))}
    </FareTypeDiv>
  );
};

export default TripWidget;
