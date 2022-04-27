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
            <LabelItem htmlFor={value.id}>
              {value.name}
              {value.newItem && <span>New</span>}{" "}
            </LabelItem>
          </FareWidgetItems>
        ))}
      </FareWidgetType>
    </FareWidgetDiv>
  );
};

export default FareWidget;
