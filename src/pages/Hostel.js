import React from "react";
import SearchBox from "../components/SearchBox";
import SearchButton from "../components/SearchButton";
import SearchFare from "../components/SearchFare";
import SearchTrip from "../components/SearchTrip";
import { PagesMainDiv } from "../customStyle";

const Hostel = (props) => {
  let desc =
    props.labelFor === "home-stay"
      ? "Book your ideal Holiday Home."
      : "Book Domestic and International hotels Online.";
  return (
    <PagesMainDiv>
      <SearchTrip description={desc} />
      <SearchBox />
      <SearchFare />
      <SearchButton align="center" title="Search" />
    </PagesMainDiv>
  );
};

export default Hostel;
