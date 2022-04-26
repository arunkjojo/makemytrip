import React from "react";
import moment from "moment";
// import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import styled from "styled-components";

const StyledDatePickerWrapper = styled.div`
  & .SingleDatePicker,
  .SingleDatePickerInput {
    width:240px;
    height:112px;
    .DateInput {
      .DateInput_input {
        font-size: 1.3rem;
        border-bottom: 0;
        padding: 12px 16px 14px;
      }
    }

    .SingleDatePickerInput__withBorder {
      border-radius: 4px;
      overflow: hidden;

      :hover{
        border: 1px solid red;
      }

      .CalendarDay__selected {
        height:112px;
        background: blue;
        border: blueviolet;
      }
    }

    .SingleDatePicker_picker.SingleDatePicker_picker {
      top: 43px;
      left: 2px;
    }
  }
`;
const now = moment();
export default class DatePickerWidget extends React.Component {
  state = {
    date: now,
    dateFocused: false,
  };

  onDateChange = (date) => {
    this.setState(() => ({ date }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ dateFocused: focused }));
  };
  render() {
    return (
      <StyledDatePickerWrapper 
      >
        <SingleDatePicker
          onFocusChange={this.onFocusChange}
          focused={this.state.dateFocused}
          date={this.state.date}
          min={new Date()}
          onDateChange={this.onDateChange}
        >
          {moment(this.state.date).format('dd MMM yy')}
        </SingleDatePicker>
      </StyledDatePickerWrapper>
    );
  }
}
