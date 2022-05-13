import React, { useState, useCallback } from "react";
import {
  LocationDiv,
  Label,
  LocationUl,
  LocationLi,
  LocationData,
  LocationNameLabel,
  LocationName,
  LocationLabel,
  LocationSName,
  LocationListDiv,
  SearchInput,
} from "../../customStyle";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getApiSuggestions } from "../../API/";

const LocationList = (props) => {
  const locationData = useSelector((state) => state.location);

  const [searchValue, setSearchValue] = useState("");
  let suggestionFilterdData = [];

  const debouncedSave = useCallback(
    debounce((newValue) => getApiSuggestions(newValue), 1000),
    []
  );

  const updateValue = (value) => {
    setSearchValue(value);
    debouncedSave(value);
  };
  if (searchValue.length > 2 && locationData.suggestions !== []) {
    suggestionFilterdData = locationData.suggestions.filter((data) =>
      data.name.toLowerCase().includes(searchValue)
    );
  }

  const currentRecentLocation = props.keyValue === "from"?locationData.recent.from:locationData.recent.to;

  return (
    <LocationDiv>
      <SearchInput
        value={searchValue}
        onChange={(event) => {
          event.preventDefault();
          updateValue(event.target.value);
        }}
      />
      <LocationListDiv>
        {searchValue !== "" ? (
          searchValue.length < 3 ? (
            <Label>Enter atleast 3 charactors</Label>
          ) : (
            <div key="suggected">
              <Label>SUGGESTIONS</Label>
              <LocationUl>
                {suggestionFilterdData.map((data, index) => (
                  <LocationLi key={index}>
                    <LocationData
                      key={data.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        props.locationFixed({
                          id: data.id,
                          name: data.name,
                          country: data.country,
                          description: data.description,
                          code: data.code,
                          countryCode: data.countryCode,
                          icon: data.icon,
                        });
                      }}
                    >
                      <LocationNameLabel>
                        <LocationName>
                          {data.name},{data.country}{" "}
                        </LocationName>
                        <LocationLabel>{data.description} </LocationLabel>
                      </LocationNameLabel>
                      <LocationSName>{data.code} </LocationSName>
                    </LocationData>
                  </LocationLi>
                ))}
              </LocationUl>
            </div>
          )
        ) : (
          <div key="no-suggest">
            <Label>RECENT SEARCH</Label>
            <LocationUl>
              {currentRecentLocation.map((data, index) => (
                <LocationLi key={index}>
                  <LocationData
                    key={data.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      props.locationFixed({
                        id: data.id,
                        name: data.name,
                        country: data.country,
                        description: data.description,
                        code: data.code,
                        countryCode: data.countryCode,
                        icon: data.icon,
                      });
                    }}
                  >
                    <LocationNameLabel>
                      <LocationName>
                        {data.name},{data.country}{" "}
                      </LocationName>
                      <LocationLabel>{data.description} </LocationLabel>
                    </LocationNameLabel>
                    <LocationSName>{data.code} </LocationSName>
                  </LocationData>
                </LocationLi>
              ))}
            </LocationUl>

            <Label>POPULAR CITY</Label>
            <LocationUl>
              {locationData.popular.map((data, index) => (
                <LocationLi key={index}>
                  <LocationData
                    key={data.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      props.locationFixed({
                        id: data.id,
                        name: data.name,
                        country: data.country,
                        countryCode: data.countryCode,
                        description: data.description,
                        code: data.code,
                        icon: data.icon,
                      });
                    }}
                  >
                    <LocationNameLabel>
                      <LocationName>
                        {data.name},{data.country}{" "}
                      </LocationName>
                      <LocationLabel>{data.description} </LocationLabel>
                    </LocationNameLabel>
                    <LocationSName>{data.code} </LocationSName>
                  </LocationData>
                </LocationLi>
              ))}
            </LocationUl>
          </div>
        )}
      </LocationListDiv>
    </LocationDiv>
  );
};

export default LocationList;
