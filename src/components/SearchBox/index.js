import React from "react";
import DateWidget from "../../widgets/DateWidget";
import LocationWidget from "../../widgets/LocationWidget";
import TravellerWidget from "../../widgets/TravellerWidget";
import { SearchBoxDiv, SpinCircle, SpinIcon } from "../../customStyle";
import { useSelector, useDispatch } from "react-redux";
import { toggleLocation } from "../../redux/locationSlice";
import MultiCity from "./MultiCity";

const SearchBox = () => {
  const dispatch = useDispatch();
  const tripType = useSelector(state => state.tripType.tripType);
  const locationValue = useSelector(state => state.location);
  const dateValue = useSelector(state => state.date);
  
  const toggleLocationHandler = () => {
    dispatch(toggleLocation(locationValue));
  }

  function locationChangeHandler(type, location){
    // console.log(type, location);
  }

  return (
    tripType=== 'MULTI CITY' 
    ? (
      <MultiCity />
    )
    : (
      <SearchBoxDiv>
        <LocationWidget
          label="From"
          widthValue="300px"
          primaryKey="from"
          id={locationValue.from.id}
          name={locationValue.from.name}
          country={locationValue.from.country}
          description={locationValue.from.description}
          code={locationValue.from.code}
          onLocationChange={(data)=>locationChangeHandler('from', data)}
        />

        <SpinCircle onClick={(e)=>{
          e.preventDefault();
          toggleLocationHandler()
        }}>
          <SpinIcon/>
        </SpinCircle>

        <LocationWidget
          label="To"
          widthValue="300px"
          primaryKey="to"
          id={locationValue.to.id}
          name={locationValue.to.name}
          country={locationValue.to.country}
          description={locationValue.to.description}
          code={locationValue.to.code}
          onLocationChange={(data)=>locationChangeHandler('to', data)}
        />

        <DateWidget primaryKey="from" label="Departure" date={new Date(dateValue.departure)} widthValue="158px" />

        <DateWidget disAble={tripType === "ONEWAY"} primaryKey="to" label="Return" date={new Date(dateValue.return)} widthValue="158px" />

        <TravellerWidget widthValue="260px"/>
      </SearchBoxDiv>
    )
  );
};
export default SearchBox;
