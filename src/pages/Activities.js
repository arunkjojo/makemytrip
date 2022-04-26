import React from 'react'
import styledComponents from "styled-components";
import SearchButton from "../components/SearchButton/SearchButton";

const MainDiv = styledComponents.div`
  width: 1200px;
  position: relative;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  padding: 60px 20px 0;
`;

const Activities = () => {
  return (
    <MainDiv>
        <h2>Activities</h2>
        <SearchButton align="center" title="Search"/>
    </MainDiv>
  )
}

export default Activities