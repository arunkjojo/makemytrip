import React from "react";
import styledComponents from "styled-components";
import "./App.css";
import SearchIcons from "./components/SearchIcons/SearchIcons";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";

const Icons = [
  {
    id: 1,
    name: "Flight",
    icon: "-4px -39px",
    activeIcon: "-4px 0",
    path: "/flight"
  },
  {
    id: 2,
    name: "Hotel",
    icon: "-50px -37px",
    activeIcon: "-50px 1px",
    path: "/hotel"
  },
  {
    id: 3,
    name: "Home Stay",
    icon: "-105px -153px",
    activeIcon: "-105px -193px",
    path: "/home-stay"
  },
  {
    id: 4,
    name: "Holiday Packages",
    icon: "-70px -235px",
    activeIcon: "-14px -235px",
    path: "/holiday-pack"
  },
  {
    id: 5,
    name: "Train",
    icon: "-179px -37px",
    activeIcon: "-179px 1px",
    path: "/train"
  },
  {
    id: 6,
    name: "Bus",
    icon: "-115px -38px",
    activeIcon: "-114px 1px",
    path: "/bus"
  },
  {
    id: 7,
    name: "Cabs",
    icon: "-147px -39px",
    activeIcon: "-147px 1px",
    path: "/cabs"
  },
  {
    id: 8,
    name: "Visa",
    icon: "-153px -154px",
    activeIcon: "-153px -197px",
    path: "/visa"
  },
  {
    id: 9,
    name: "Charted Flight",
    icon: "-122px -72px",
    activeIcon: "-73px -72px",
    path: "/charted-flight"
  },
  {
    id: 10,
    name: "Activities",
    icon: "-207px -72px",
    activeIcon: "-164px -72px",
    path: "/activities"
  },
];

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavIcon>
                <SearchIcons data={Icons} selected={1} />
              </NavIcon>
              <Main />
            </>
          }
        />
        {Icons.map((v, i) => (
          <Route
          path={v.path}
          element={
            <>
              <NavIcon>
                <SearchIcons data={Icons} selected={1} />
              </NavIcon>
              <Main />
            </>
          }
        />
        ))}
        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
