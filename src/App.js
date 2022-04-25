import React from "react";
import styledComponents from "styled-components";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import SearchButton from "./components/SearchButton/SearchButton";
import SearchFare from "./components/SearchFare/SearchFare";
import SearchIcons from "./components/SearchIcons/SearchIcons";
import SearchTrip from "./components/SearchTrip/SearchTrip";

const Icons = [
  {
    id:1,
    name:'Flight',
    icon:'-4px -39px',
    activeIcon:'-4px 0'
  },
  {
    id:2,
    name:'Hotel',
    icon:'-50px -37px',
    activeIcon:'-50px 1px'
  },
  {
    id:3,
    name:'Home Stay',
    icon:'-105px -153px',
    activeIcon:'-105px -193px'
  },
  {
    id:4,
    name:'Holiday Packages',
    icon:'-70px -235px',
    activeIcon:'-14px -235px'
  },
  {
    id:5,
    name:'Train',
    icon:'-179px -37px',
    activeIcon:'-179px 1px'
  },
  {
    id:6,
    name:'Bus',
    icon:'-115px -38px',
    activeIcon:'-114px 1px'
  },
  {
    id:7,
    name:'Cabs',
    icon:'-147px -39px',
    activeIcon:'-147px 1px'
  },
  {
    id:8,
    name:'Visa',
    icon:'-153px -154px',
    activeIcon:'-153px -197px'
  },
  {
    id:9,
    name:'Charted Flight',
    icon:'-122px -72px',
    activeIcon:'-73px -72px'
  },
  {
    id:10,
    name:'Activities',
    icon:'-207px -72px',
    activeIcon:'-164px -72px'
  }
];
const MainDiv = styledComponents.div`
  width: 1200px;
  position: relative;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  padding: 60px 20px 0;
`
const NavIcon = styledComponents.nav`
  // display: flex;
  // position: relative;
  width: 1200px;
  margin: 75px;
  margin-bottom: 40px !important;
  background: transparent;
`;
function App() {
  
  return (
    <div className="App">
      <NavIcon>
        <SearchIcons data={Icons} selected={1}/>
      </NavIcon>
      <MainDiv>
        <SearchTrip/>
        <SearchBox />
        <SearchFare />
        <SearchButton align="center" title="Search"/>
      </MainDiv>
    </div>
  );
}

export default App;
