import React, { useState } from "react";
import {
  TravellerDiv,
  TravellerP,
  TravellerUl,
  TravellerLi,
} from "../../customStyle";

const TravellerCount = (props) => {
  const [count, setCount] = useState(props.value); // 1

  let counter = [];
  for (let i = props.start; i <= props.end; i++) {
    counter.push(i);
  }

  const countHandler = (e) => {
    let targetValue = e.target.value;
    setCount(targetValue);
    props.travellerCounter(targetValue);
  };
  return (
    <TravellerDiv>
      <TravellerP>{props.paragraph}</TravellerP>
      <TravellerUl>
        {counter.map((v, i) => (
          <TravellerLi
            onClick={countHandler}
            value={v}
            key={i}
            active={v === count}
          >
            {v}
          </TravellerLi>
        ))}
      </TravellerUl>
      <TravellerUl extra={true}>
        <TravellerLi
          onClick={countHandler}
          value={props.end + 1}
          key={props.end + 1}
          active={props.end + 1 === count}
        >
          +{props.end}
        </TravellerLi>
      </TravellerUl>
    </TravellerDiv>
  );
};

export default TravellerCount;
