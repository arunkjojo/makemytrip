import React from "react";
import styledComponents from "styled-components";
import SearchBox from "../components/SearchBox/SearchBox";
import SearchButton from "../components/SearchButton/SearchButton";
import SearchFare from "../components/SearchFare/SearchFare";
import SearchTrip from "../components/SearchTrip/SearchTrip";

const MainDiv = styledComponents.div`
  width: 1200px;
  position: relative;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  padding: 60px 20px 0;
`;

const Hostel = (props) => {
  let desc =
    props.labelFor === "home-stay"
      ? "Book your ideal Holiday Home."
      : "Book Domestic and International hotels Online.";
  return (
    <MainDiv>
      <SearchTrip description={desc} />
      <SearchBox />
      <SearchFare />
      <SearchButton align="center" title="Search" />
    </MainDiv>
  );
};

export default Hostel;
