import React from "react";
import FareWidget from "../../widgets/FareWidget";
import TrendingWidget from "../../widgets/TrendingWidget";
import { FlexDiv } from "../../customStyle";
import { Fare, Trend } from "../../DB";

const SearchFare = () => {
  return (
    <FlexDiv>
      <FareWidget data={Fare} />
      <TrendingWidget locations={Trend} />
    </FlexDiv>
  );
};

export default SearchFare;
