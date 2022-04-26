import React, { useState } from "react";
import { Datepicker, START_DATE } from "@datepicker-react/styled";

const DatePickerComponent = (props) => {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  })

  function handleDatesChange(data) {
    if (!data.focusedInput) {
      setState({...data, focusedInput: START_DATE})
    } else {
      setState(data)
    }
    props.dateChangeHandler(data);
  }

  return (
    <Datepicker
      onDatesChange={handleDatesChange}
      minBookingDate={new Date()}
      startDate={state.startDate} // Date or null
      endDate={state.endDate} // Date or null
      focusedInput={state.focusedInput} // START_DATE, END_DATE or null
      numberOfMonths={2}
      firstDayOfWeek={0}
    />
  )
};

export default DatePickerComponent;
