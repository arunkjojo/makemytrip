import React from "react";
import { FareTypeDiv, FareItems, RedioItem, LabelItem } from "../customStyle";
import { useSelector, useDispatch } from "react-redux";
import { changeTrip } from "../redux/tripSlice";
// import { changeDate } from "../redux/dateSlice";
const TripWidget = (props) => {
  const tripData = useSelector(state => state.tripType.tripType);
  // const dateData = useSelector(state => state.date);
  const dispatch = useDispatch();
  const tripChange = (value) => {
    dispatch(changeTrip({
      tripType:value
    }));
    // if(value === 'ROUND TRIP' && new Date(dateData.departure).toDateString() === new Date(dateData.return).toDateString()){
    //   dispatch(changeDate({
    //     departure:new Date(dateData.departure).toDateString(),
    //     return: new Date(new Date(dateData.departure).getTime() + 24 * 60 * 60 * 1000).toDateString()
    //   }));
    // }
  }
  return (
    <FareTypeDiv>
      {props.title.map((value, i) => (
        <FareItems tabIndex="-1" key={i} active={value === tripData} onClick={(e)=>{
          e.preventDefault();
          tripChange(value);
        }}>
          <RedioItem tabIndex="-1" key={i} checked={value === tripData} />
          <LabelItem htmlFor={i}>{value}</LabelItem>
        </FareItems>
      ))}
    </FareTypeDiv>
  );
};

export default TripWidget;
