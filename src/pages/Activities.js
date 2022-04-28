import React from "react";
import SearchButton from "../components/SearchButton";
import { PagesMainDiv } from "../customStyle";

const Activities = () => {
  return (
    <PagesMainDiv>
      <h2>Activities</h2>
      <SearchButton align="center" title="Search" />
    </PagesMainDiv>
  );
};

export default Activities;
