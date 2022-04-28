import React from "react";
import DateWidget from "../../widgets/DateWidget";
import LocationWidget from "../../widgets/LocationWidget";
import TravellerWidget from "../../widgets/TravellerWidget";
import { SearchBoxDiv, SpinCircle, SpinIcon } from "../../customStyle";
import { useSelector, useDispatch } from "react-redux";
import { toggleLocation } from "../../redux/locationSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const locationValue = useSelector(state => state.location);
  const dateValue = useSelector(state => state.date);
  const toggleLocationHandler = () => {
    dispatch(toggleLocation(locationValue));
  }
  return (
    <SearchBoxDiv>
      <LocationWidget
        label="From"
        widthValue="300"
        primaryKey="from"
        id={locationValue.from.id}
        name={locationValue.from.name}
        contry={locationValue.from.contry}
        description={locationValue.from.description}
        code={locationValue.from.code}
      />

      <SpinCircle onClick={toggleLocationHandler}>
        <SpinIcon/>
      </SpinCircle>

      <LocationWidget
        label="To"
        widthValue="300"
        primaryKey="to"
        id={locationValue.to.id}
        name={locationValue.to.name}
        contry={locationValue.to.contry}
        description={locationValue.to.description}
        code={locationValue.to.code}
      />

      <DateWidget primaryKey="from" label="Departure" date={new Date(dateValue.departure.date)} widthValue="158" />

      <DateWidget primaryKey="to" label="Return" date={new Date(dateValue.returns.date)} widthValue="158" />

      <TravellerWidget />
    </SearchBoxDiv>
  );
};
export default SearchBox;
