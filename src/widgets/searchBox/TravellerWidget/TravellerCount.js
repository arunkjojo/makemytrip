import React, { useEffect, useState } from "react";
import styled from "styled-components";
export const TravellerUl = styled.div`
  display: inline-flex;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 20%);
  align-items: center;
  
  ${({ extra }) =>
    extra &&
    `
    margin-left: 5px;
  `}
`;
export const TravellerLi = styled.li`
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  width: 36px;
  height: 36px;
  position: relative;
  z-index: 2;
  :hover{
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
`;

export const TravellerP = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
`;

export const TravellerCounterDiv = styled.div`
  margin-right:10px;
  position: relative;
  font-size: 11px !important;
`;
const TravellerCount = (props) => {

  const [count, setCount] = useState(props.value); // 1

  let counter=[];
  for (let i = props.start; i <= props.end; i++) {
    counter.push(i);
  }

  const countHandler = (e) =>{
    let targetValue =e.target.value;
    setCount(targetValue);
    props.travellerCounter(targetValue);
  }
  return (
    <TravellerCounterDiv>
      <TravellerP>
        {props.paragraph}
      </TravellerP>
      <TravellerUl>
        {counter.map((v, i) =>
          <TravellerLi 
            onClick={countHandler} 
            value={v} key={i} 
            active={v === count}
          >
            {v}
          </TravellerLi>
        )}
      </TravellerUl>
      <TravellerUl extra={true}>
        <TravellerLi 
          onClick={countHandler} 
          value={(props.end + 1)}
          key={(props.end + 1)}
          active={(props.end + 1) === count}
        >
          >{props.end}
        </TravellerLi>
      </TravellerUl>
    </TravellerCounterDiv>
  );
};

export default TravellerCount;
