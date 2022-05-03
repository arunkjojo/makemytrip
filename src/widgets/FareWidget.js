import React, { useState } from "react";
import {
  FareWidgetDiv,
  FareWidgetHeading,
  FareWidgetType,
  FareWidgetItems,
  RedioItem,
  LabelItem,
} from "../customStyle";

const FareWidget = (props) => {
  const [fareDataId, setFareDataId] = useState(1);
  return (
    <FareWidgetDiv>
      <FareWidgetHeading>Select A Fare Type:</FareWidgetHeading>
      <FareWidgetType>
        {" "}
        {props.data.map((value, i) => (
          <FareWidgetItems
            active={value.id === fareDataId}
            onClick={() => setFareDataId(value.id)}
            key={value.id}
          >
            <RedioItem id={value.id} checked={value.id === fareDataId} />
            <LabelItem className="labelItem" htmlFor={value.id}>
              {value.name}
              <br/>
              Fares
              {value.newItem && <span>New</span>}{" "}
            </LabelItem>
            {value.description && (
              <div className="specialFareTooltip">
                <p className="label">{value.description.label}</p>
                <p className="message">{value.description.message}</p>
              </div>
            )}
          </FareWidgetItems>
        ))}
      </FareWidgetType>
    </FareWidgetDiv>
  );
};

export default FareWidget;
