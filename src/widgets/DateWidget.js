import React from "react";
import { useDispatch } from "react-redux";
import {
  WidgetDiv,
  WidgetLabel,
  WidgetSpan,
  WidgetValue,
  CloseIcon,
  ErrorSection,
  ErrorIcon,
  ErrorMessage,
} from "../customStyle";
import { changeTrip } from "../redux/tripSlice";

const DateWidget = (props) => {
  const dispatch = useDispatch();

  let errorMessage = null;
  
  if(props.error > 30) {
    errorMessage = `You are booking for more than 30 days`;
  }
  function showChildComp() {
    // console.log("showChildComp date");
    props.onClick()
  }
  return (
    <WidgetDiv
      widthValue={props.widthValue}
      // ref={ref}
      onClick={showChildComp}
      onFocus={showChildComp} 
      tabIndex={props.disAble?'-1':'0'}
    >
      <WidgetLabel htmlFor={props.label}>
        <WidgetSpan dropDown active={props.expand} >{props.label}</WidgetSpan>
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

            {/* <Input onFocus={onFocus} tabIndex={props.disAble?-1:0} onBlur={onBlur} readOnly={true} value={props.date} /> */}

            <WidgetValue >
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
            {errorMessage !== null && (
              <ErrorSection>
                <ErrorIcon />
                <ErrorMessage>
                  {errorMessage}
                </ErrorMessage>
              </ErrorSection>
            )}
          </>
        )}
      </WidgetLabel>
      {/* {visible && isComponentVisible && (
        <DateWidgetDrop>
          <DatePicker onChanged={(date)=> dateChangeHandler(date) }/>
        </DateWidgetDrop>
      )} */}
    </WidgetDiv>
  );
};

export default DateWidget;
