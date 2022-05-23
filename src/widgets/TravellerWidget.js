import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TravellersClassList from "./TravellerWidget/TravellersClassList";
import {
  WidgetDiv,
  WidgetLabel,
  WidgetSpan,
  TravellerDropDiv,
  WidgetValue,
  AvailableDiv,
  AvailableNotify,
  ErrorSection,
  ErrorIcon,
  ErrorMessage,
} from "../customStyle";
import useComponentVisible from "../helper/useComponentVisible";

const TravellerWidget = (props) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  // const [visible, setVisible] = useState(false);

  const travellerData = useSelector((state) => state.flight);
  const gbAvailable = 'Group Booking Now Available!';

  useEffect(()=>{
    setIsComponentVisible(props.expand);
  },[props, setIsComponentVisible]);

  function showChildComp() {
    props.onClick()
  }

  return (
    <WidgetDiv
      widthValue={props.widthValue}
      borderRightColor="#fff"
      ref={ref}

      onFocus={showChildComp} 
      tabIndex={0} 
    >
      <WidgetLabel>
        <WidgetSpan dropDown active={isComponentVisible}>Travellers & Class</WidgetSpan>
        
        <WidgetValue >
          <span className="headTilte">{travellerData.count.total} </span>
          <span className="subTiitle">Travellers</span>
        </WidgetValue>
        <WidgetValue>
          <span className="para">{travellerData.classes} </span>
        </WidgetValue>
        {gbAvailable && <AvailableDiv><AvailableNotify>{gbAvailable}</AvailableNotify></AvailableDiv>}
        
        {travellerData.count.infant > travellerData.count.adult && (
          <ErrorSection>
            <ErrorIcon />
            <ErrorMessage>
              Number of infants cannot be more than adults
            </ErrorMessage>
          </ErrorSection>
        )}
      </WidgetLabel>
      
      {/* {visible && isComponentVisible && ( */}
      {props.expand && isComponentVisible && (
        <TravellerDropDiv>
          <TravellersClassList onApply={(event)=>{
            // event.stopPropagation();
            props.visible();
            // setVisible(false);
          }}/>
        </TravellerDropDiv>
      )}
    </WidgetDiv>
  );
};

export default TravellerWidget;
