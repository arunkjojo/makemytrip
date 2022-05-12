import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { changeDate } from "../redux/dateSlice";
import DatePicker from "./DateWidgets/DatePicker";
import {
  WidgetDiv,
  WidgetLabel,
  WidgetSpan,
  WidgetValue,
  DateWidgetDrop,
  CloseIcon,
} from "../customStyle";
import useComponentVisible from "../helper/useComponentVisible";
import { changeTrip } from "../redux/tripSlice";

const DateWidget = (props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <WidgetDiv
      widthValue={props.widthValue}
      ref={ref}
      onClick={(event) => {
        event.stopPropagation();
        setVisible(true);
        setIsComponentVisible(true);
        props.onClick();
      }}
    >
      <WidgetLabel htmlFor={props.label}>
        <WidgetSpan dropDown active={isComponentVisible} >{props.label}</WidgetSpan>
        {props.disAble ? (
          <p>Tap to add a return date for bigger discounts</p>
        ) : (
          <>
            {props.primaryKey === "to"? <CloseIcon onClick={(e)=>{
              e.stopPropagation();
              dispatch(changeTrip({
                tripType:"ONEWAY"
              }));
            }}/>:null}
            <WidgetValue>
              <span className="headTilte">
                {props.date.toLocaleString("en-us", { day: "2-digit" })}
              </span>
              <span className="subTiitle">
                {props.date.toLocaleString("en-us", { month: "short" })}
              </span>
              <span className="subTiitle">
                '
                {props.date.toLocaleString("en-us", { year: "2-digit" })}
              </span>
            </WidgetValue>
            <WidgetValue>
              <span className="para">
                {props.date.toLocaleString("en-us", { weekday: "long" })}
              </span>
            </WidgetValue>
          </>
        )}
      </WidgetLabel>
      {/* {visible && isComponentVisible && (
        <DateWidgetDrop>
          <DatePicker
            currentDate={props.date}
          />
        </DateWidgetDrop>
      )} */}
    </WidgetDiv>
  );
};

export default DateWidget;
