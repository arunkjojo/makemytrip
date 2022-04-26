import React from "react";
import FareWidget from "../../widgets/searchFare/FareWidget";
import TrendingWidget from "../../widgets/searchFare/TrendingWidget";
import styledComponents from "styled-components";
const FareDiv = styledComponents.div`
  display: flex;
  // justify-content: space-around;
`
const data=[
  {
    id:1,
    name:'Regular Fares',
    selected:true
  },
  {
    id:2,
    name:'Armed Force Fares',
    newItem:true
  },
  {
    id:3,
    name:'Student Fares',
  },
  {
    id:4,
    name:'Senior Citizen Fares',
  },
  {
    id:5,
    name:'Double Seat Fares',
  }
];
const SearchFare = () => {
  return (
    <FareDiv>
      <FareWidget 
        data={data}
      />
      <TrendingWidget 
      locations={[
        'Pune --> Delhi',
        'Bangalore --> Chennai'
      ]}
        />
    </FareDiv>
    
  );
};

export default SearchFare;
