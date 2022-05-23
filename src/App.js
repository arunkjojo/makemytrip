import React, {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import ResultData from "./components/Result";
import SearchIcons from "./components/SearchIcons";
import { AppDiv, NavIcon, ErrorPage } from "./customStyle";
import { Icons } from "./DB";
import { useDispatch } from "react-redux";
import { updateSuggestion, updatePopularCity } from "./redux/serviceLocation";

var online_error=null;
if (!navigator.onLine) {
  online_error = 'Please check the internet connection';
}
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePopularCity());
    dispatch(updateSuggestion());
  }, [dispatch]);
  return (
    online_error!==null 
    ? <ErrorPage><h2>{online_error}</h2></ErrorPage>
    : (
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
    )
  );
}

export default App;
