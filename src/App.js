import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import ResultData from "./components/Result";
import SearchIcons from "./components/SearchIcons";
import { AppDiv, NavIcon } from "./customStyle";
import { Icons } from "./DB";

function App() {
  return (
    <>
      <AppDiv>
        <BrowserRouter>
          <NavIcon>
            <SearchIcons data={Icons} />
          </NavIcon>
          <Navigation />
        </BrowserRouter>
      </AppDiv>
      <ResultData />
    </>

  );
}

export default App;
