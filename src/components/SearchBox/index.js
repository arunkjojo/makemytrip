import React, { useState } from "react";
import DateWidget from "../../widgets/DateWidget";
import LocationWidget from "../../widgets/LocationWidget";
import TravellerWidget from "../../widgets/TravellerWidget";
import { SearchBoxDiv, SpinCircle, SpinIcon,  } from "../../customStyle";
import { useSelector, useDispatch } from "react-redux";
import { toggleLocation } from "../../redux/locationSlice";
import { changeTrip } from "../../redux/tripSlice";
import { changeDate } from "../../redux/dateSlice";
import MultiCity from "./MultiCity";
import DateWidgetBox from "../../widgets/DateWidgetBox";
import { START_DATE } from '@datepicker-react/styled'


const SearchBox = () => {
  const dispatch = useDispatch();
  const tripType = useSelector(state => state.tripType.tripType);
  const locationValue = useSelector(state => state.location);
  const dateValue = useSelector(state => state.date);
  const [dateVisibility, setDateVisibility] = useState(false);
  const [fromVisibility, setFromVisibility] = useState(false);
  const [toVisibility, setToVisibility] = useState(false);

  const [dateActive, setDateActive] = useState({
    deparure:false,
    reurns:false
  });

  const toggleLocationHandler = () => {
    dispatch(toggleLocation(locationValue));
  }

  const returnDateHandler = ()=> {
    setDateActive({
      deparure:false,
      returns:true
    });
    dispatch(changeTrip({
      tripType:"ROUND TRIP"
    }));
    setDateVisibility(true);
    setFromVisibility(false);
    setToVisibility(false);
  }
  const depatureDateHandler = ()=> {
    setDateActive({
      deparure:true,
      returns:false
    });
    setDateVisibility(true);
    setFromVisibility(false);
    setToVisibility(false);
  }

  function locationChangeHandler(type, location){
    // console.log(type, location);
    if(type==='from'){
      setFromVisibility(false);
      setToVisibility(true);
    }
    if(type==='to'){
      setDateVisibility(true);
      setFromVisibility(false);
      setToVisibility(false);
    }
  }

  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });
  function dateHandler(data) {
    console.log("date", data);
    if (!data.focusedInput) {
      setState({
        ...data,
        focusedInput: START_DATE,
      });
    } else {
      setState(data);
    }
    if(data.startDate !== null && data.endDate !== null){
      setDateVisibility(false);
      dispatch(
        changeDate({
          departure: data.startDate,
          return: data.endDate,
        })
      );
    }
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
          expand={fromVisibility}
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
          expand={toVisibility}
          onLocationChange={(data)=>locationChangeHandler('to', data)}
        />
        <DateWidget 
          primaryKey="from" 
          label="Departure" 
          expand={dateActive.deparure}
          onClick={depatureDateHandler} 
          date={new Date(dateValue.departure)} 
          widthValue="158px"
        />

        <DateWidget 
          disAble={tripType === "ONEWAY"} 
          primaryKey="to" 
          label="Return" 
          expand={dateActive.returns}
          onClick={returnDateHandler} 
          date={new Date(dateValue.return)} 
          widthValue="158px" 
        />

        {dateVisibility && (
          <DateWidgetBox trip={tripType} state={state} onDateChange={dateHandler} />
        )}
        <TravellerWidget widthValue="260px"/>
      </SearchBoxDiv>
    )
  );
};
export default SearchBox;
