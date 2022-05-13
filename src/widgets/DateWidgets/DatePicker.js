import React, { useState } from "react";
import { Datepicker, START_DATE } from "@datepicker-react/styled";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../redux/dateSlice";

const DatePickerComponent = (props) => {
  const tripType = useSelector((state) => state.tripType.tripType);
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });
  const dispatch = useDispatch();
  function handleDatesChange(data) {
    if (!data.focusedInput) {
      setState({
        ...data,
        focusedInput: START_DATE,
      });
    } else {
      setState(data);
    }
    if(data.startDate !== null && data.endDate !== null){
      dispatch(
        changeDate({
          departure: data.startDate,
          return: data.endDate,
        })
      );
      props.onChanged(data);
    }
  }
  return (
    <Datepicker
      showClose={false}
      showResetDates={false}
      onDatesChange={handleDatesChange}
      minBookingDate={new Date()}
      startDate={state.startDate}
      endDate={state.endDate}
      focusedInput={tripType==="ONEWAY"?START_DATE:state.focusedInput} // tripType==="ONEWAY"?START_DATE:
      numberOfMonths={2}
      firstDayOfWeek={0}
      minBookingDays={1}
      unavailableDates={[]}

      exactMinBookingDays={tripType === "ONEWAY"? true: false}
    />
  );
};

export default DatePickerComponent;
