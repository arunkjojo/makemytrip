import React, { useState } from "react";
import {
  TravellerDiv,
  TravellerP,
  TravellerUl,
  TravellerLi,
} from "../../customStyle";

const TravellerClass = (props) => {
  const [tclass, setTclass] = useState(props.value);
  const travellerHandler = (data) => {
    setTclass(data);
    props.TravellerClassHandler(data);
  }
  return (
    <TravellerDiv>
      <TravellerP>{props.paragraph}</TravellerP>
      <TravellerUl>
        {props.data.map((v, i) => (
          <TravellerLi
            key={i}
            value={v}
            active={v === tclass}
            onClick={()=>travellerHandler(v)}
          >
            {v}
          </TravellerLi>
        ))}
      </TravellerUl>
    </TravellerDiv>
  );
};

export default TravellerClass;
