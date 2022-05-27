import React, {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import ResultData from "./components/Result";
import SearchIcons from "./components/SearchIcons";
import { AppDiv, NavIcon, ErrorPage } from "./customStyle";
import { Icons } from "./DB";
import { useDispatch,useSelector } from "react-redux";
import { updateSuggestion, updatePopularCity } from "./redux/serviceLocation";
import { Offline, Online } from 'react-detect-offline';

var online_error=null;
function App() {
  const dispatch = useDispatch();

  const location = useSelector(state => state.location);
  if(location.popular.length === 0){
    console.log(location.popular.length)
    online_error = 'Loading...'
  }else{
    online_error = null
  }

  useEffect(() => {
    dispatch(updatePopularCity());
    dispatch(updateSuggestion());
    if(location.popular.length !== 0){
      online_error = null
    }
  }, []);

  return (
    // online_error!==null 
    // ? <ErrorPage>
    //   <h2>{online_error}</h2>
    //   {/* <img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" alt="Loading" /> */}
    // </ErrorPage>
    <>
    <Offline>
      <h2 className="no-internet"> Sorry Please Turn On your Internet Connection </h2>
      {/* <img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" alt="Loading" /> */}
      </Offline>
    <Online>
    {online_error!==null 
    ? <ErrorPage>
        <h2>{online_error}</h2>
      </ErrorPage>
    : <>
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
    }
    </Online>
    </>
  );
}

export default App;
