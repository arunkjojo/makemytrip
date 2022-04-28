import React from "react";
import SearchBox from "../components/SearchBox";
import SearchButton from "../components/SearchButton";
import SearchFare from "../components/SearchFare";
import SearchTrip from "../components/SearchTrip";
import { PagesMainDiv } from "../customStyle";


const Flight = (props) => {
  let desc =
    props.labelFor === "flight"
      ? "Book International and Domestic Flights"
      : "Book Charter Planes in India";
  return (
    <PagesMainDiv>
      <SearchTrip limit={props.limit} description={desc} />
      <SearchBox />
      {props.labelFor === "flight" && <SearchFare />}
      <SearchButton align="center" title="Search" />
    </PagesMainDiv>
  );
};

export default Flight;
