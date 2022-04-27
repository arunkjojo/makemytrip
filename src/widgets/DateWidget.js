import React, { useState } from "react";
import DatePicker from "./DateWidgets/DatePicker";
import {
  DateWidgetDiv,
  DateWidgetLabel,
  DateWidgetSpan,
  DateWidgetInput,
  DateWidgetValue,
  DateWidgetDrop,
} from "../customStyle";

const DateWidget = (props) => {
  const [showDate, setShowDate] = useState(false);
  const [dateValue, setDateValue] = useState({
    date: props.date,
    dt: props.date.toLocaleString("en-us", { day: "2-digit" }),
    mt: props.date.toLocaleString("en-us", { month: "short" }),
    yr: props.date.toLocaleString("en-us", { year: "2-digit" }),
    dy: props.date.toLocaleString("en-us", { weekday: "long" }),
  });
  const dateHandler = (data) => {
    if (data.startDate !== null) {
      setDateValue({
        dt: data.startDate.toLocaleString("en-us", { day: "2-digit" }),
        mt: data.startDate.toLocaleString("en-us", { month: "short" }),
        yr: data.startDate.toLocaleString("en-us", { year: "2-digit" }),
        dy: data.startDate.toLocaleString("en-us", { weekday: "long" }),
      });
      setShowDate(false);
    }
  };
  return (
    <DateWidgetDiv>
      <DateWidgetLabel
        onClick={() => setShowDate(!showDate)}
        htmlFor={props.label}
      >
        <DateWidgetSpan onClick={() => setShowDate(!showDate)}>
          {props.label}
        </DateWidgetSpan>
        <DateWidgetInput />
        <DateWidgetValue>
          <span className="date">{dateValue.dt} </span>
          <span className="month">{dateValue.mt}</span>
          <span className="year">{"'" + dateValue.yr}</span>
        </DateWidgetValue>
        <DateWidgetValue>
          <span className="day">{dateValue.dy}</span>
        </DateWidgetValue>
      </DateWidgetLabel>
      {showDate && (
        <DateWidgetDrop>
          <DatePicker
            dateChangeHandler={dateHandler}
            currentDate={dateValue.date}
          />
        </DateWidgetDrop>
      )}
    </DateWidgetDiv>
  );
};

export default DateWidget;
