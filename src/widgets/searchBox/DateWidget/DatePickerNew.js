import React, { useState } from "react";
import styledComponents from "styled-components";
const DateWrapper = styledComponents.div``;
const DatePickerHeader = styledComponents.div`
  // border-bottom: solid 2px #e7e7e7;
  padding: 6px 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 10%);
  border-radius: 4px 4px 0 0;
  color: #ffffff;
`;
const DatePickerMain = styledComponents.div`
  display: inline-block;
  font-size: 1rem;
`;
const CalHeading = styledComponents.div`
  display: flex;
  margin-right: 30px;
  color: #000000;
  font-weight: 700;
  font-size: 14px;
  line-height: 7px;
`;
const DateFeild = styledComponents.div``;
const DatePara = styledComponents.p``;
const CalSpan = styledComponents.span`
  background: url(https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/spriteModifySearch.png) no-repeat;
  display: inline-block;
  background-size: 50px 50px;
  font-size: 0px;
  flex-shrink: 0;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  background-position: -5px -5px;
`;
const SelectDateField = styledComponents.span`
  >span{
      padding:2px;
  }
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  margin-bottom: 8px;
  ${({ active }) =>
    active &&
    `
      background-color: #eaf5ff;
      border-bottom: 3px solid #008cff;
  `}
`;
const DashedSpan = styledComponents.span`
  margin-left: 30px;
  margin-right: 30px;
`;

const DayWrapper = styledComponents.div`
  outline: 0;
  position: relative;
  flex-direction: row;
  padding-bottom: 1em;
  user-select: none;
`;
const DayHeader = styledComponents.div``;
const PreMonth = styledComponents.span.attrs({
  role: "button"
})`
  top: 17px;
  left: 30px;
  cursor: pointer;
  z-index: 100;
  width: 16px;
  height: 13px;
  background-position: -5px -21px;
  background-image: url(https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/spriteModifySearch.png);
  background-size: 50px 50px;
  transform: rotate(-180deg);
  outline: 0;
  border: 0;

  position: absolute;
  right: 1.5em;
  display: inline-block;
  margin-top: 2px;
  background-repeat: no-repeat;
  color: #8B9898;
`;

const NxtMonth = styledComponents.span.attrs({
  role: "button"
})`
  top: 17px;
  right: 30px;
  cursor: pointer;
  z-index: 100;
  width: 16px;
  height: 13px;
  background-position: -5px -21px;
  background-image: url(https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/spriteModifySearch.png);
  background-size: 50px 50px;
  outline: 0;
  border: 0;

  position: absolute;
  left: 580px;
  display: inline-block;
  margin-top: 2px;
  background-repeat: no-repeat;
  color: #8B9898;
`;
const MonthPicker = styledComponents.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const MonthList = styledComponents.div.attrs({
  role:"grid"
})`
  width: 45%;

  display: table;
  margin: 0 1em;
  margin-top: 1em;
  border-spacing: 0;
  border-collapse: collapse;
  user-select: none;
`
const DayPickerCaption = styledComponents.div`
  margin-bottom: 25px;

  display: table-caption;
  padding: 0 0.5em;
  text-align: left;

  >div {
    font-size: 18px;
    font-weight: bolder;
    color: #000;
    text-align: center;
  }
`
const DayPickerWeekdays = styledComponents.div`
  display: table-header-group;
  margin-top: 1em;
`
const WeekDays = styledComponents.div`
  display: table-row;
`
const Day = styledComponents.div`
  font-weight: bold;

  display: table-cell;
  padding: 0.5em;
  color: #8B9898;
  text-align: center;
  font-size: 0.875em;
  
  >abbr {
    border-bottom: none;
    text-decoration: none;
  }
`
const DayPickerBody = styledComponents.div`
  display: table-row-group;
`
const DayPickerWeek = styledComponents.div`
  display: table-row;
`
const DatePicker = (props) => {
  const [active, setActive] = useState("dep");
  const days=[
    {
      title:'Sunday',
      value:'Su'
    },
    {
      title:'Monday',
      value:'Mo'
    },
    {
      title:'Tuesday',
      value:'Tu'
    },
    {
      title:'Wednesday',
      value:'We'
    },
    {
      title:'Thursday',
      value:'Th'
    },
    {
      title:'Friday',
      value:'Fr'
    },
    {
      title:'Saturday',
      value:'Sa'
    }
  ]
  return (
    <DateWrapper>
      <DatePickerHeader>
        <CalHeading>
          <DateFeild>
            <DatePara>
              <CalSpan />
              <SelectDateField
                active={active === "dep"}
                onClick={() => setActive("dep")}
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
                active={active === "ret"}
                onClick={() => setActive("ret")}
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
                  {days.map((v,i)=>(
                    <Day key={i}> <abbr title={v.title}>{v.value}</abbr> </Day>
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
                  {days.map((v,i)=>(
                    <Day key={i}> <abbr title={v.title}>{v.value}</abbr> </Day>
                  ))}
                </WeekDays>
              </DayPickerWeekdays>
              <DayPickerBody>
                <DayPickerWeek>
                  
                </DayPickerWeek>
              </DayPickerBody>
            </MonthList>
          </MonthPicker>
        </DayWrapper>
      </DatePickerMain>
    </DateWrapper>
  );
};

export default DatePicker;
