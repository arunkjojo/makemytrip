import React, { useState } from "react";
import {
  TravellerDiv,
  TravellerP,
  TravellerUl,
  TravellerLi,
} from "../../customStyle";

const TravellerClass = (props) => {
  const [tclass, setTclass] = useState(props.value);
  return (
    <TravellerDiv>
      <TravellerP>{props.paragraph}</TravellerP>
      <TravellerUl>
        {props.data.map((v, i) => (
          <TravellerLi
            onClick={() => {
              setTclass(v);
            }}
            key={i}
            active={v === tclass}
          >
            {v}
          </TravellerLi>
        ))}
      </TravellerUl>
    </TravellerDiv>
  );
};

export default TravellerClass;
