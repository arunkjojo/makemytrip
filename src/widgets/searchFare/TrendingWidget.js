import React from "react";
import styledComponents from "styled-components";
const TrendingDiv = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 190px;
  flex: none;
`;
const TrendingUl = styledComponents.ul`
  display: flex;
  padding-left: 0px;
`;
const TrendingLabel = styledComponents.span`
  color: #9d9d9c;
  width: 60px;
  display: flex;
  font-weight: 700;
  font-family: Lato;
  font-size: 12px;
  padding-left:40px;
`;
const TrendingLi = styledComponents.li`
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
const TrendingWidget = (props) => {
  return (
    <TrendingDiv>
      <TrendingLabel>Trending Searches:</TrendingLabel>
      <TrendingUl>
        {props.locations.map((v,i)=>(
          <TrendingLi key={i}>{v}</TrendingLi>
        ))}
      </TrendingUl>
    </TrendingDiv>
  );
};

export default TrendingWidget;
