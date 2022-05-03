import React from "react";
import { FareTypeDiv, FareItems, RedioItem, LabelItem } from "../customStyle";
import { useSelector, useDispatch } from "react-redux";
import { changeTrip } from "../redux/tripSlice";
const TripWidget = (props) => {
  const tripData = useSelector(state => state.tripType);
  const dispatch = useDispatch();
  const tripChange = (v) => {
    dispatch(changeTrip({
      id:v.id,
      value: v.value
    }));
  }
  return (
    <FareTypeDiv>
      {props.title.map((v, i) => (
        <FareItems key={v.id} active={v.id === tripData.id} onClick={(e)=>{
          e.preventDefault();
          tripChange(v);
        }}>
          <RedioItem key={i} checked={v.id === tripData.id} />
          <LabelItem htmlFor={i}>{v.value}</LabelItem>
        </FareItems>
      ))}
    </FareTypeDiv>
  );
};

export default TripWidget;
