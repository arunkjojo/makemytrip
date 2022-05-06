import React, { /*useEffect*/ } from "react";
import { /*useSelector,*/ useDispatch } from "react-redux";
import { Paragraph, Button } from "../../customStyle";
import { addRecentList, /*removeRecentFirst*/ } from "../../redux/locationSlice";

const SearchButton = (props) => {
  const dispatch = useDispatch();
  // const searchState = useSelector(state=> state);
  const searchMain={
    textAlign: 'center',
    width: '216px',
    padding: '20px',
    fontSize: '24px'
  }
  const makeMyTripSearch = () => {
    // console.log("MakeMyTrip Search Button API", searchState);
    dispatch(addRecentList());
  }
  // useEffect(()=>{
  //   if(searchState.location.recent.to.length > 3){
  //     dispatch(removeRecentFirst({
  //       type:'TO_FIRST'
  //     }));
  //   }
  //   if(searchState.location.recent.from.length > 3){
  //     dispatch(removeRecentFirst({
  //       type:'FROM_FIRST'
  //     }));
  //   }
  // },[dispatch, searchState])
  return (
    <Paragraph>
      <Button mainButton style={searchMain} onClick={(event) => {
        event.preventDefault();
        makeMyTripSearch();
      }}>Search</Button>
    </Paragraph>
  );
};

export default SearchButton;
