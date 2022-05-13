import { Datepicker, START_DATE } from "@datepicker-react/styled";
import React from "react";
import { DateWidgetDrop } from "../customStyle";

const DateWidgetBox = (props) => {
 
  return (
    <DateWidgetDrop >
      <Datepicker
        exactMinBookingDays={props.trip === "ONEWAY" ? true : false}
        showClose={false}
        showResetDates={false}
        onDatesChange={props.onDateChange}
        minBookingDate={new Date()}
        startDate={props.state.startDate}
        endDate={props.state.endDate}
        focusedInput={
          props.trip === "ONEWAY" ? START_DATE : props.state.focusedInput
        }
        // tripType==="ONEWAY"?START_DATE:props.state.focusedInput
        numberOfMonths={2}
        firstDayOfWeek={0}
        minBookingDays={1}
        unavailableDates={[]}
      />
    </DateWidgetDrop>
  );
};

export default DateWidgetBox;
