import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeShowLocation } from "../redux/locationSlice";
import { changeShowTraveller } from "../redux/travellerSlice";
import {
  changeDate,
  changeShowDate
} from "../redux/dateSlice";
import DatePicker from "./DateWidgets/DatePicker";
import {
  DateWidgetDiv,
  WidgetLabel,
  WidgetSpan,
  WidgetValue,
  DateWidgetDrop,
} from "../customStyle";
const DateWidget = (props) => {
  const departureDate = useSelector((state) => new Date(state.date.departure.date));
  const returnsDate = useSelector((state) => new Date(state.date.returns.date));
  const show = useSelector((state) => state.date.showDate);
  const dispatch = useDispatch();

  const dateHandler = (data) => {
    if (data.startDate !== null && data.endDate !== null) {
      console.log("data.startDate",data.startDate);
      console.log("data.endDate",data.endDate);

      let departure = {
        date: data.startDate.toString()
      };
      let returns = {
        date: data.endDate.toString()
      };

      dispatch((
        changeDate(departure),
        changeDate(returns)
      ));
    }
  };
  const showDateHandler = (e) => {
    e.preventDefault();
    dispatch((
      changeShowLocation(false),
      changeShowTraveller(false),
      changeShowDate(!show)
    ));
  };
  return (
    <DateWidgetDiv onClick={showDateHandler}>
      <WidgetLabel 
          active={show} 
          onClick={showDateHandler} 
          htmlFor={props.label}>
        <WidgetSpan>{props.label}</WidgetSpan>
        <WidgetValue>
          <span className="headTilte">
            {props.primaryKey === "to"
              ? returnsDate.toLocaleString("en-us", { day: "2-digit" })
              : departureDate.toLocaleString("en-us", { day: "2-digit" })
            }{" "}
          </span>
          <span className="subTiitle">
            {props.primaryKey === "to"
              ? returnsDate.toLocaleString("en-us", { month: "short" })
              : departureDate.toLocaleString("en-us", { month: "short" })
            }
          </span>
          <span className="subTiitle">
            '{props.primaryKey === "to"
              ? returnsDate.toLocaleString("en-us", { year: "2-digit" })
              : departureDate.toLocaleString("en-us", { year: "2-digit" })
            }
          </span>
        </WidgetValue>
        <WidgetValue>
          <span className="para">
            {props.primaryKey === "to"
              ? returnsDate.toLocaleString("en-us", { weekday: "long" })
              : departureDate.toLocaleString("en-us", { weekday: "long" })
            }
          </span>
        </WidgetValue>
      </WidgetLabel>
      {show && (
        <DateWidgetDrop>
          <DatePicker
            dateChangeHandler={dateHandler}
            currentDate={props.primaryKey === "to"
              ? returnsDate
              : departureDate
            }
          />
        </DateWidgetDrop>
      )}
    </DateWidgetDiv>
  );
};

export default DateWidget;
