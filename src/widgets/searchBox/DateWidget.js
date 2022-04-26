import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "./DateWidget/DatePicker";
const DateDiv = styled("div")`
  width: 158px;
  height: 112px;
  border-right: solid 1px #e7e7e7;
`;
const DivLabel = styled.label`
  padding: 10px 19px;
  color: gray;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const Span = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 5px;
`;

const DivInput = styled.input.attrs({
  type:'hidden',
  readonly:true
})`
  border: 0;
  outline: 0;
  background: none;
  min-width: 140px;
  max-height: 36px;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
`;
const DivValue = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;

  color: #000;
  font-family: Lato;
  .date{
    font-weight: 900;
    font-size:30px;
  }
  .month, .year{
    font-size:20px;
    font-weight: 200;
  }
  .day {
    color: gray;
  }
`;

const DateDropDiv = styled.div`
  width: 625px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  position: absolute;
  right: 0;
  top: 30px;
  z-index: 999999;
`;

const DateWidget = (props) => {
  // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const [showDate, setShowDate] = useState(false);
  const [dateValue, setDateValue] = useState({
    date: props.date,
    dt:props.date.toLocaleString('en-us', { day: '2-digit' }),
    mt:props.date.toLocaleString('en-us', { month: 'short' }),
    yr:props.date.toLocaleString('en-us', { year: '2-digit' }),
    dy:props.date.toLocaleString('en-us', { weekday: 'long' })
  });
  const dateHandler = (data) => {
    // console.log(data.startDate,data.endDate);
    if(data.startDate !== null){
      setDateValue({
        dt: data.startDate.toLocaleString('en-us', { day: '2-digit' }),
        mt: data.startDate.toLocaleString('en-us', { month: 'short' }),
        yr: data.startDate.toLocaleString('en-us', { year: '2-digit' }),
        dy:data.startDate.toLocaleString('en-us', { weekday: 'long'})
      });
      setShowDate(false);
    }
  }
  return (
    <DateDiv>
      <DivLabel onClick={()=> setShowDate(!showDate)} htmlFor={props.label}>
        <Span onClick={()=> setShowDate(!showDate)}>{props.label}</Span>
        <DivInput />
        <DivValue>
          <span className="date">{dateValue.dt} </span>
          <span className="month">{dateValue.mt}</span>
          <span className="year">{"'"+dateValue.yr}</span>
        </DivValue>
        <DivValue>
          <span className="day">{dateValue.dy}</span>
        </DivValue>
      </DivLabel>
      {showDate && (
        <DateDropDiv>
          <DatePicker dateChangeHandler={dateHandler} currentDate={dateValue.date} />
        </DateDropDiv>
      )}
    </DateDiv>
  );
};

export default DateWidget;
