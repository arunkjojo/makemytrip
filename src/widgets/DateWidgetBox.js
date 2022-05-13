import { Datepicker, START_DATE } from "@datepicker-react/styled";
import React, {useEffect, useRef, useState} from "react";
import { DateWidgetDrop } from "../customStyle";

const DateWidgetBox = (props) => {

    const [state, setState] = useState({
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
      });
    const singleDateHandler = (event) => {
        setState(event);
        console.log("single",event);

        props.onDateChange(event);
    }
    const doubleDateHandler = (event) => {
        if (!event.focusedInput) {
            setState({
                ...event,
                focusedInput: START_DATE,
            });
        } else {
            setState(event);
        }
        if(event.startDate !== null && event.endDate !== null){
            console.log("double",event);
            props.onDateChange(event);
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });
    let datepickerWrapperRef = useRef(null);
    const [visible, setVisible] = useState(true);
    const handleClickOutside = (event) => {
        if (datepickerWrapperRef.current && !datepickerWrapperRef.current.contains(event.target)) {
            setVisible(false);
            props.visible(false)
        }
    };

    return (
        visible &&
        <DateWidgetDrop ref={datepickerWrapperRef}>
            {props.trip === "ONEWAY"?(
                <Datepicker
                    exactMinBookingDays={true}
                    showClose={false}
                    showResetDates={false}
                    onDatesChange={(e)=>singleDateHandler(e)}
                    minBookingDate={new Date()}
                    startDate={state.startDate}
                    endDate={state.endDate}
                    focusedInput={START_DATE}
                    numberOfMonths={2}
                    firstDayOfWeek={0}
                    minBookingDays={1}
                />
            ):(
                <Datepicker
                    showClose={false}
                    showResetDates={false}
                    onDatesChange={e => doubleDateHandler(e)}
                    minBookingDate={new Date()}
                    startDate={state.startDate}
                    endDate={state.endDate}
                    focusedInput={state.focusedInput}
                    numberOfMonths={2}
                    firstDayOfWeek={0}
                    minBookingDays={1}
                />
            )}
        </DateWidgetDrop>
  );
};

export default DateWidgetBox;
