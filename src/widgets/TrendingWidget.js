import React from "react";
import { TrendingDiv, TrendingLabel, TrendingUl, TrendingLi } from "../customStyle";

const TrendingWidget = (props) => {
  return (
    <TrendingDiv>
      <TrendingLabel>Trending Searches:</TrendingLabel>
      <TrendingUl>
        {props.locations.map((v, i) => (
          <TrendingLi key={i}>{v}</TrendingLi>
        ))}
      </TrendingUl>
    </TrendingDiv>
  );
};

export default TrendingWidget;
