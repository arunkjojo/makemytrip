import styledComponents from "styled-components";

// // App //

export const AppDiv = styledComponents.div `
  width: 1200px;
  margin: 0 auto;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  color: #000;
  font-family: "Lato";
  margin-bottom: 40px !important;
`;

// // App>NavIcon //

export const NavIcon = styledComponents.nav `
  width: 1200px;
  margin: 75px;
  margin-bottom: 40px !important;
  background: transparent;
`;

// // SearchIcons //

export const IconDiv = styledComponents.div`
  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  top: 25px;;
  position: absolute;
  right: 0;
  z-index: 11;
`;

export const IconUl = styledComponents.ul`

  text-decoration: none;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;

  font-size: 14px;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 7px 0 rgb(0 0 0 / 40%);
  height: 80px;
`;

export const IconLi = styledComponents.li`
  align-items: flex-start;
  display: flex;
  margin-left: 22px;
  flex-shrink: 0!important;
  margin: 0 10px;
  position: relative;
  align-items: center;
  flex-direction: column;
  display: flex;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  border-radius: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 3px solid #008cff;
    
    color: #008cff;
  `}
`;

export const IconSpan = styledComponents.span`
  height: 34px;
  width: 40px;
  margin-bottom: 2px;
  background-size: 300px 400px;
  background-image: url(https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/commonHeaderSprite7.webp)!important;
  
  
  background-position: ${(props) => props.iconPosition};

  ${({ active, activeIcon }) =>
    active &&
    activeIcon &&
    `
    background-position: ${activeIcon};
    color: #008cff;
  `}
  

  background-repeat: no-repeat;
`;

export const LabelSpan = styledComponents.span`
  background: transparent;
  padding: 8px;
`;

// // SearchTrip //

export const TripDiv = styledComponents.div`
  display: flex;
`;

export const TripDesc = styledComponents.div`
  margin-left: auto;
`;

export const Description = styledComponents.h1`
  font-size: 14px;
  text-align: center;
`;

// // SearchBox //

export const SearchBoxDiv = styledComponents.div`
  display: flex;
  padding: 0px;
  margin-left: 0px;
  margin-bottom: 20px;

  width: 100%;
  margin: 0 auto 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  align-items: center;
  border: solid 1px #e7e7e7;
  position: relative;
`;

export const SpinCircle = styledComponents.span`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-left: -22px;
  border-radius: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 10%);
  z-index: 1;
  cursor: pointer;
`;

export const SpinIcon = styledComponents.span`
  width: 15px;
  height: 11px;
  background-position: -149px -111px;
  background-image: url(https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/landingSprite@19x.webp);
  background-repeat: no-repeat;
  display: inline-block;
  background-size: 200px 650px;
  font-size: 0px;
  flex-shrink: 0;
`;

// // SearchButton //

export const Button = styledComponents.button`
  border-radius: 34px;
  background: linear-gradient(93deg, #53b2fe, #065af3);
  box-shadow: 0 1px 7px 0 rgb(0 0 0 / 20%);
  display: inline-block;
  flex-shrink: 0;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  border: 0;
  font-weight: 700;
  opacity: 1;
  line-height: 24px;

  ${({disactive}) => disactive && `
    display: none;
  `}
  ${({mainButton}) => mainButton && `
    margin-bottom: -32px;
  `}
`;

export const Paragraph = styledComponents.p`
  display: flex;
  justify-content: center;
`;

// // SearchFare //

export const FlexDiv = styledComponents.div`
  display: flex;
`;

// // Tripwidget //

export const FareTypeDiv = styledComponents.ul`
  display: flex;
  color: #9b9b9b;
  font-weight: 900;
  padding-left: 0px;
`;

export const FareItems = styledComponents.li`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 10px;
  padding: 2px 6px;
  border-radius: 20px;
  color: #4a4a4a;

  ${({ active }) =>
    active &&
    `
    background: #e7e7e7;
    color: #000000;
  `}
`;

export const RedioItem = styledComponents.input.attrs({
  type: "radio",
  readOnly:true
})`
  ${({ active }) =>
    active &&
    `
    background: #eaf5ff;
  `}
`;

// // Trendingwidget //

export const TrendingDiv = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 190px;
  flex: none;
`;

export const TrendingUl = styledComponents.ul`
  display: flex;
  padding-left: 0px;
`;

export const TrendingLabel = styledComponents.span`
  color: #9d9d9c;
  width: 60px;
  display: flex;
  font-weight: 700;
  font-family: Lato;
  font-size: 12px;
  padding-left:40px;
`;

export const TrendingLi = styledComponents.li`
  display: flex;
  flex-direction: column;
  padding: 8px 10px;
  border-radius: 4px;
  margin-left: 10px;
  background: #f2f2f2;
  border-radius: 4px;
  color: #4a4a4a;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 3px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    background: #eaf5ff;
  `}
`;

// // Widgets //

export const WidgetDiv = styledComponents("div")`
  height: 112px;
  outline: 0;
  border-right: solid 1px ${p=>p.borderRightColor?p.borderRightColor:'#e7e7e7'};
  :hover {
    background: #fafafa;
  }
  ${({widthValue})=> widthValue && `
    width: ${widthValue};
  `}
`;

export const WidgetLabel = styledComponents.label`
  padding: 10px 19px;
  color: gray;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const WidgetSpan = styledComponents.span`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 5px;

  ${({active})=> active && `
    color: #008cff;
  `}
  ${({dropDown})=> dropDown && `
    :after {
      border: solid #008cff;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      content: '';
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      vertical-align: top;
      margin: 3px 0 0 8px;
      transition: all 0.3s ease-in-out;
    }
  `}
`;

export const WidgetValue = styledComponents.p`
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  font-weight: 400;

  margin-bottom: 0px;
  margin-top: 0px;

  color: #000;
  font-family: Lato;
  .input{
    border: 0;
    outline: 0;
    background: none;
    cursor: pointer;
    padding: 0px;
    margin: 0px;
  }

  .headTilte {
    font-weight: 900;
    font-size: 30px;
  }
  .subTiitle {
    font-size: 20px;
    font-weight: 500;
  }
  .para {
    color: #4a4a4a;
    font-size: 14px;
  }
`;

export const Input = styledComponents.input.attrs({

})`
  opacity: 0 !important;
  position: absolute;
  z-index: -1;

  border: 0;
  outline: 0;
  background: none;
  min-width: 140px;
  max-height: 36px;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
`

// // TravellerWidget //

export const TravellerDropDiv = styledComponents.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  position: absolute;
  right: 0;
  top: 35px;
  width: 410px;
  padding: 20px 20px;
  z-index: 1;
  width: 600px !important;
  display: flex;
  flex-direction: column;
`;

export const TravellerClassDiv = styledComponents.div``

export const TravellerBody = styledComponents.div`
  margin-bottom: 20px;
`

export const TravellerFooter = styledComponents.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
`

// // LocationWidget //

export const LocationDescription = styledComponents.p`
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const LocationDropDiv = styledComponents.div``;

// // FareWidget //

export const FareWidgetDiv = styledComponents.div`
  display: flex;
  align-items: center;
`;

export const FareWidgetType = styledComponents.ul`
  margin-top: 0px;
  display: flex;
  background: #f2f2f2;
  font-weight: 700;
  font-family: Lato;
  font-size: 12px;
  padding: 0px;
  border-radius: 4px;
`;

export const FareWidgetHeading = styledComponents.span`
  color: #9d9d9c;
  width: 60px;
  display: flex;
  font-weight: 700;
  font-family: Lato;
  font-size: 12px;
  padding-left:0px;
  margin-top: -15px;
`;
export const FareWidgetItems = styledComponents.li`
  position: relative;
  padding: 0px 6px 8px 0px;
  cursor: pointer;
  font-size: 12px;
  color: #4a4a4a;
  border-left: solid 1px #fff;
  display: flex;
  align-items: center;
  height: 45px;
  min-width: 80px;
  max-width: 112px;
  line-height: 14px !important;
  border-radius: 4px;

  ${({ active }) =>
    active &&
    `
    border-radius: 4px;
    background: #eaf5ff;
  `}

  ${({ disAble }) =>
    disAble &&
    `
    color: #c2c2c2 !important;
    opacity: 0.6;
    pointer-events: none;
    text-decoration-color: #c2c2c2 !important;
  `}
  .specialFareTooltip{
    position: absolute;
    top: 45px;
    left: 0;
    width: 241px;
    padding: 10px;
    text-transform: none;
    -webkit-box-shadow: 0 2px 7px 0 rgb(0 0 0 / 30%);
    box-shadow: 0 2px 7px 0 rgb(0 0 0 / 30%);
    z-index: 3;
    background-color: #249995;
    display: none;
    border-radius: 4px;
    font-weight: normal;
    color: #ffffff;
  }

  .specialFareTooltip::after {
    bottom: 100%;
    left: 40px;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(36, 153, 149, 0);
    border-bottom-color: #249995;
    border-width: 10px;
    margin-left: -10px;
  }
  .label {
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 5px;
  }
  .message {
    font-size: 11px;
    line-height: 11px;
  }
  :hover {
    .specialFareTooltip{
      display: block;
    }
  }
`;

export const LabelItem = styledComponents.div`
  >span{
    color: red;
    margin-left: 10px;
  }
  list-style: none;
    margin-left: 10px;
    padding: 0;
`;

// // DateWidget //

export const DateWidgetInput = styledComponents.input.attrs({
  type: "hidden",
  readonly: true,
})`
  border: 0;
  outline: 0;
  background: none;
  min-width: 140px;
  max-height: 36px;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
  
  ${({disAble}) => disAble &&`
    color: #9b9b9b !important;
    font-weight: 900;
    font-size: 12px;
    line-height: 16px !important;
  `}
`;

export const DateWidgetDrop = styledComponents.div`
  // width: 625px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  position: absolute;
  right: 0;
  top: 30px;
  z-index: 999999;
`;

// // TravellerCount TravellerClass //

export const TravellerUl = styledComponents.ul`
  display: inline-flex;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 20%);
  margin-bottom: 24px;
  align-items: center;
  color: #4a4a4a;
  position: relative;
  font-size: 11px !important;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 32px;

  ${({ extra }) =>
    extra &&
    `
    margin-left: 5px;
  `}
`;

export const TravellerLi = styledComponents.li`
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  min-width: 15px;
  height: 32px;
  position: relative;
  z-index: 2;
  color: #4a4a4a;
  :hover {
    background: rgb(0 0 0 / 10%);
  }

  ${({ active }) =>
    active &&
    `
    font-weight: 900;
    color:#fff;
    height: 38px;
    background: #008cff;
    border-radius: 4px;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 20%);
    :hover{
      background: #008cff;
    }
  `}

  width: auto;
  padding: 0 10px;
  
`;

export const TravellerP = styledComponents.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 10px;
  color: #4a4a4a;
`;

export const TravellerDiv = styledComponents.div`
  margin-bottom: 25px;
  ${({flexColum})=> flexColum && `
    flex-direction: column;
  `}
  margin-right: 15px;
  margin-left: 0px;
`;

// // LocationList //

export const LocationDiv = styledComponents.div`
  width: 300px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  position: relative;
  left: 0;
  top: -60px;
  z-index: 999999;
  overflow: hidden;

  :after {
    width: 10px;
    height: 10px;
    background: url(//imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/spriteModifySearch.png) no-repeat;
    background-size: 50px 50px;
    background-position: -20px -5px;
    content: '';
    position: absolute;
    left: 10px;
    top: 15px;
  }
`;

export const LocationListDiv = styledComponents.div`
  max-height: 270px;
  list-style: none;
  overflow-y: auto;
`
export const LocationUl = styledComponents.ul`
  max-height: 270px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LocationLi = styledComponents.li`
  padding: 5px 10px;
  margin-bottom: 5px;
  cursor: pointer;
  :hover{
      background: #f2f2f2;
  }
`;

export const LocationData = styledComponents.div`
  align-items: center;
  display:flex;
  justify-content: space-between
`;

export const LocationNameLabel = styledComponents.div`
`;

export const LocationName = styledComponents.p`
  font-size: 14px;
  line-height: 14px;
  color:black;
`;

export const LocationLabel = styledComponents.p`
  font-size:10px;
  color:black;
`;

export const LocationSName = styledComponents.p`
  font-size:10px;
  color:gray;
  float:right;
`;

export const Label = styledComponents.span`
  text-transform: uppercase;
  padding: 10px;
  color: #9b9b9b;
  font-weight: 900;
  font-size: 12px;
  line-height: 12px;
`;

// // DatePicker //

export const DateWrapper = styledComponents.div``;

export const DatePickerHeader = styledComponents.div`
  // border-bottom: solid 2px #e7e7e7;
  padding: 6px 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 10%);
  border-radius: 4px 4px 0 0;
  color: #ffffff;
`;

export const DatePickerMain = styledComponents.div`
  display: inline-block;
  font-size: 1rem;
`;

export const CalHeading = styledComponents.div`
  display: flex;
  margin-right: 30px;
  color: #000000;
  font-weight: 700;
  font-size: 14px;
  line-height: 7px;
`;

export const DateFeild = styledComponents.div``;

export const DatePara = styledComponents.p``;

export const CalSpan = styledComponents.span`
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

export const SelectDateField = styledComponents.span`
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

export const DashedSpan = styledComponents.span`
  margin-left: 30px;
  margin-right: 30px;
`;

export const DayWrapper = styledComponents.div`
  outline: 0;
  position: relative;
  flex-direction: row;
  padding-bottom: 1em;
  user-select: none;
`;

export const DayHeader = styledComponents.div``;

export const PreMonth = styledComponents.span.attrs({
  role: "button",
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

export const NxtMonth = styledComponents.span.attrs({
  role: "button",
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

export const MonthPicker = styledComponents.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MonthList = styledComponents.div.attrs({
  role: "grid",
})`
  width: 45%;

  display: table;
  margin: 0 1em;
  margin-top: 1em;
  border-spacing: 0;
  border-collapse: collapse;
  user-select: none;
`;

export const DayPickerCaption = styledComponents.div`
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
`;

export const DayPickerWeekdays = styledComponents.div`
  display: table-header-group;
  margin-top: 1em;
`;

export const WeekDays = styledComponents.div`
  display: table-row;
`;

export const Day = styledComponents.div`
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
`;

export const DayPickerBody = styledComponents.div`
  display: table-row-group;
`;

export const DayPickerWeek = styledComponents.div`
  display: table-row;
`;

// // OtherPages //

export const PagesMainDiv = styledComponents.div`
  // width: 1200px;
  position: relative;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  padding: 60px 20px 0;
`;

export const SearchInput = styledComponents.input.attrs({ 
  type: 'text', 
  placeholder:'From', 
  ariaAutocomplete:'list', 
})`
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 10%);
  padding: 11px 10px 11px 30px;
  outline: 0;
  border: 0;
  width: 100%;
  font-size: 16px;
  color: #000000;
  font-weight: 700;
  position:relative;
` 

export const AvailableDiv = styledComponents.div`
  position: relative;
  top: 3px;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
`

export const AvailableNotify = styledComponents.span`
  display: flex;
  align-items: center;
  height: 14px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #cf8100;
`

export const ErrorSection = styledComponents.div`
  display: flex;
  width: auto;
  box-shadow: 0 2px 7px 0 rgb(0 0 0 / 30%);
  z-index: 1;
  background-color: #ffd3d4;
  position: relative;
  top: 10px;
  left: 0;
  border-radius: 4px;
  padding: 4px 8px;

  :after {
    bottom: 100%;
    left: 40%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-bottom-color: #ffd3d4;
    border-width: 8px;
    margin-left: -24px;
}
`
export const ErrorIcon = styledComponents.span`
  width: 16px;
  height: 16px;
  background-position: -1px -432px;

  background-image: url(https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/landingSprite@20x.webp);
  background-repeat: no-repeat;
  display: inline-block;
  background-size: 200px 650px;
  font-size: 0px;
  flex-shrink: 0;

  margin-right: 10px;
`
export const ErrorMessage = styledComponents.p`
  color: red !important;
  font-size: ${p=>p.size?p.size:'13'}px;
  line-height: ${p=>p.size?p.size:'13'}px;
  margin:0;
`

export const CloseIcon = styledComponents.span`
  position: absolute;
  bottom: 80px;
  right: 265px;
  z-index: 1;
  cursor: pointer;

  background-image: url(//imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/landingSprite@20x.webp);
  background-repeat: no-repeat;
  display: inline-block;
  background-size: 200px 650px;
  font-size: 0px;
  flex-shrink: 0;

  width: 20px;
  height: 20px;
  background-position: -145px -59px;

  ${({city})=> city&&`
    position: revert;
    width: 42px;
    height: 32px;
    background-position: -166px -53px;
  `}
`

export const AddNewSearchBox = styledComponents.div`
  width: 138px;
  height: 32px;
  margin-right:20px;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
  background-color: #ffffff;
  border: solid 1px #008cff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  color: #008cff;
  outline: 0;
  margin-left: 20px;
`

export const RemoveCity = styledComponents.div`
  display: flex;
  border-left: solid 1px #e7e7e7;
  width: 94px;
  height: 95px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`

export const ErrorPage = styledComponents.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
  background-color: #fff;
  position: relative;

  .error-icon {
    width: 200px;
    height: 200px;
    background-position: 50%;
    background-size: contain;
    display: inline-block;
    background-repeat: no-repeat;

    background-image: url(https://imgak.mmtcdn.com/flights/assets/media/dt/listing/sannaata.png);
  }
`