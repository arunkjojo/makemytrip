import React, { useState } from "react";
import { Datepicker, START_DATE } from "@datepicker-react/styled";
// import { DateWrapper, DatePickerHeader, DatePickerMain, CalHeading, DateFeild, DatePara, CalSpan, SelectDateField, DashedSpan, DayWrapper, DayHeader, PreMonth, NxtMonth, MonthPicker, MonthList, DayPickerCaption, DayPickerWeekdays, WeekDays, Day, DayPickerBody, DayPickerWeek} from "../../customStyle";

const DatePickerComponent = (props) => {
  const [state, setState] = useState({
    startDate: null ,// dateValue.departure.full_date,
    endDate: null, //dateValue.returns.full_date,
    focusedInput: START_DATE,
  });

  function handleDatesChange(data) {
    if (!data.focusedInput) {
      setState({ 
        ...data, 
        focusedInput: START_DATE 
      });
    } else {
      setState(data);
    }
    props.dateChangeHandler(data);
  }

  return (
    <>
      <Datepicker
        onDatesChange={handleDatesChange}
        minBookingDate={new Date()}
        startDate= {state.startDate} // Date or null
        endDate= {state.endDate} // Date or null
        focusedInput={state.focusedInput} // START_DATE, END_DATE or null
        numberOfMonths={2}
        firstDayOfWeek={0}
      />
      {/* <DateWrapper>
        <DatePickerHeader>
          <CalHeading>
            <DateFeild>
              <DatePara>
                <CalSpan />
                <SelectDateField
                >
                  <span>1</span>
                  <span>May</span>
                  <span>22</span>
                </SelectDateField>
              </DatePara>
            </DateFeild>
            <DateFeild>
              <DatePara>
                <DashedSpan> -</DashedSpan>
              </DatePara>
            </DateFeild>
            <DateFeild>
              <DatePara>
                <CalSpan />
                <SelectDateField
                >
                  <span>25</span>
                  <span>May</span>
                  <span>22</span>
                </SelectDateField>
              </DatePara>
            </DateFeild>
          </CalHeading>
        </DatePickerHeader>
        <DatePickerMain>
          <DayWrapper>
            <DayHeader>
              <PreMonth />
              <NxtMonth />
            </DayHeader>
            <MonthPicker>
              <MonthList>
                <DayPickerCaption>
                  <div>May 2022</div>
                </DayPickerCaption>
                <DayPickerWeekdays>
                  <WeekDays>
                    { days.map((v, i) => (
                      <Day key={i}>
                        {" "}
                        <abbr title={v.title}>{v.value}</abbr>{" "}
                      </Day>
                    ))}
                  </WeekDays>
                </DayPickerWeekdays>
              </MonthList>

              <MonthList>
                <DayPickerCaption>
                  <div>May 2022</div>
                </DayPickerCaption>
                <DayPickerWeekdays>
                  <WeekDays>
                    {days.map((v, i) => (
                      <Day key={i}>
                        {" "}
                        <abbr title={v.title}>{v.value}</abbr>{" "}
                      </Day>
                    ))}
                  </WeekDays>
                </DayPickerWeekdays>
                <DayPickerBody>
                  <DayPickerWeek></DayPickerWeek>
                </DayPickerBody>
              </MonthList>
            </MonthPicker>
          </DayWrapper>
        </DatePickerMain>
      </DateWrapper> */}
    </>
  );
};

export default DatePickerComponent;
