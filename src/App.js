import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import SearchIcons from "./components/SearchIcons";
import { AppDiv, NavIcon } from "./customStyle";
import { Icons } from "./DB";

function App() {
  const getData=()=>{
    fetch('makemytrip-666bbb-default-rtdb.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <AppDiv>
      <BrowserRouter>
        <NavIcon>
          <SearchIcons data={Icons} />
        </NavIcon>
        <Navigation />
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
