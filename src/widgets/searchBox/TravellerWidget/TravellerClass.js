import React, { useState } from "react";
import styled from "styled-components";
export const TravellerUl = styled.div`
  display: inline-flex;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 20%);
  align-items: center;
`;
export const TravellerLi = styled.li`
  width: auto;
  padding: 0 10px;
  align-items: center;
  display: flex;
  cursor: pointer;
  height: 36px;
  position: relative;
  z-index: 2;
  justify-content: center;
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

export const TravellerClassDiv = styled.div`
  margin-right:10px
`;
const TravellerClass = (props) => {
  const [tclass, setTclass] = useState(props.value);
  return (
    <TravellerClassDiv>
      <TravellerP>
        {props.paragraph}
      </TravellerP>
      <TravellerUl>
        {props.data.map((v, i) =>
          <TravellerLi onClick={()=>{setTclass(v)}} key={i} active={v === tclass}>
            {v}
          </TravellerLi>
        )}
      </TravellerUl>
    </TravellerClassDiv>
  );
};

export default TravellerClass;
