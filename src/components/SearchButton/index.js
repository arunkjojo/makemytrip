import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paragraph, Button } from "../../customStyle";
import { addRecentList, removeRecentFirst } from "../../redux/locationSlice";
import { postApiSearch } from "../../API"

const SearchButton = (props) => {
  const dispatch = useDispatch();
  const searchState = useSelector(state=> state);
  const searchMain={
    textAlign: 'center',
    width: '216px',
    padding: '20px',
    fontSize: '24px'
  }
  const makeMyTripSearch = () => {
    dispatch(addRecentList());
    dispatch(removeRecentFirst());
    postApiSearch(searchState);
  }
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
