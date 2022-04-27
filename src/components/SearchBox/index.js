import React from "react";
import DateWidget from "../../widgets/DateWidget";
import LocationWidget from "../../widgets/LocationWidget";
import TravellerWidget from "../../widgets/TravellerWidget";
import { SearchBoxDiv, SpinCircle, SpinIcon } from "../../customStyle";

const SearchBox = () => {
  return (
    <SearchBoxDiv>
      <LocationWidget
        label="From"
        widthValue="300"
        name="Mumbai"
        desc="Chhatrapati Shivaji International Airport"
        code="MOB"
      />

      <SpinCircle>
        <SpinIcon />
      </SpinCircle>

      <LocationWidget
        label="To"
        widthValue="300"
        name="Delhi"
        desc="Delhi Airport"
        code="DEL"
      />

      <DateWidget label="Departure" date={new Date()} widthValue="158" />

      <DateWidget label="Return" date={new Date()} widthValue="158" />

      <TravellerWidget />
    </SearchBoxDiv>
  );
};
export default SearchBox;
