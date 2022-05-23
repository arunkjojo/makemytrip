import React, { useEffect, useState, useCallback, useRef } from "react";
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
import { useKeyPress } from "../../helper/useKeyPress"

const LocationList = (props) => {
  const [selected, setSelected] = useState(null);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [cursor, setCursor] = useState(null);
  const [hovered, setHovered] = useState(undefined);
  const [locationType, setLocationType] = useState(null);

  const locationData = useSelector((state) => state.location);
  const [searchValue, setSearchValue] = useState("");
  let suggestionFilterdData = useRef([]);

  const debouncedSave = useCallback(
    debounce((newValue) => getApiSuggestions(newValue), 1000),
    []
  );


  const updateValue = (value) => {
    setSearchValue(value);
    debouncedSave(value);
  };
  if (searchValue.length > 2 && locationData.suggestions !== []) {
    suggestionFilterdData.current = locationData.suggestions.filter((data) =>
      data.name.toLowerCase().includes(searchValue)
    );
  }

  const currentRecentLocation = props.keyValue === "from"?locationData.recent.from:locationData.recent.to;
  const countIteams = locationData.popular.length + currentRecentLocation.length;
  
  useEffect(() => {
    if (downPress) {
      setCursor((prevState) =>
        prevState < countIteams - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress, countIteams]);

  useEffect(() => {
    if (upPress) {
      setCursor((prevState) => 
        prevState > 0 ? (prevState - 1) : prevState
      );
    }
  }, [upPress]);

  useEffect(() => {
    if (enterPress) {
      switch (locationType) {
        case 'suggest':
          console.log("suggestion",suggestionFilterdData.current.indexOf(hovered))
          setCursor(suggestionFilterdData.current.indexOf(hovered));
        break;
        case 'recent':
          console.log("recent",currentRecentLocation.indexOf(hovered))
          setCursor(currentRecentLocation.indexOf(hovered));
        break;
        case 'popular':
          console.log("popular",locationData.popular.indexOf(hovered))
          setCursor(locationData.popular.indexOf(hovered));
        break;
        default:
          console.log("not in all")
          setCursor(null);
        break;
      }
    }
  }, [hovered, locationType, enterPress, suggestionFilterdData, currentRecentLocation, locationData]);

  useEffect(() => {
    if (hovered) {
      switch (locationType) {
        case 'suggest':
          console.log("suggestion",suggestionFilterdData.current.indexOf(hovered))
          setCursor(suggestionFilterdData.current.indexOf(hovered));
        break;
        case 'recent':
          console.log("recent",currentRecentLocation.indexOf(hovered))
          setCursor(currentRecentLocation.indexOf(hovered));
        break;
        case 'popular':
          console.log("popular",locationData.popular.indexOf(hovered))
          setCursor(locationData.popular.indexOf(hovered));
        break;
        default:
          console.log("not in all")
          setCursor(null);
        break;
      }
    }
  }, [hovered]);

  function onMouseEnterHandler(data,types) {
    // console.log("type",types, "data",data);
    setHovered(data);
    setLocationType(types)
  }

  function onKeyPrssHandler(event){
    // console.log("event",event.code);
    if(event.code === 'ArrowDown'){
      console.log("ArrowDown cursor",cursor)
    }if(event.code === 'ArrowUp'){
      console.log("ArrowDown cursor",cursor)
    }
  }

  useEffect(()=>{
    if(selected !== null)
      console.log("selected",selected);
      // props.locationFixed({
      //   ...selected
      // })
  },[selected, props])

  return (
    <LocationDiv
    >
      <SearchInput
        tabIndex={-1}
        value={searchValue}
        onKeyDown={onKeyPrssHandler}
        onChange={(event) => {
          event.preventDefault();
          updateValue(event.target.value);
        }}
      />
      <LocationListDiv>
        {
        searchValue !== "" ? 
        (
          searchValue.length < 3 ? (
            <Label>Enter atleast 3 charactors</Label>
          ) : (
            <div key="suggected">
              <Label>SUGGESTIONS</Label>
              <LocationUl>
                {suggestionFilterdData.current.map((data, index) => (
                  <LocationLi 
                    key={index} 
                    active={index === cursor}
                    item={data}
                    setSelected={setSelected}
                    setHovered={setHovered}
                  >
                    <LocationData
                      key={data.id}
                      onClick={() => setSelected(data)}
                      onMouseEnter={() => onMouseEnterHandler(data,'suggest')}
                      onMouseLeave={() => setHovered(undefined)}
                      // onClick={(e) => {
                      //   e.stopPropagation();
                      //   props.locationFixed({
                      //     id: data.id,
                      //     name: data.name,
                      //     country: data.country,
                      //     description: data.description,
                      //     code: data.code,
                      //     countryCode: data.countryCode,
                      //     icon: data.icon,
                      //   });
                      // }}
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
                <LocationLi 
                  key={index} 
                  active={index === cursor}
                  item={data}
                  setSelected={setSelected}
                  setHovered={setHovered}
                >
                  <LocationData
                    key={data.id}
                    onClick={() => setSelected(data)}
                    onMouseEnter={() => onMouseEnterHandler(data,'recent')}
                    onMouseLeave={() => setHovered(undefined)}
                    // onClick={(e) => {
                    //   e.stopPropagation();
                    //   props.locationFixed({
                    //     id: data.id,
                    //     name: data.name,
                    //     country: data.country,
                    //     description: data.description,
                    //     code: data.code,
                    //     countryCode: data.countryCode,
                    //     icon: data.icon,
                    //   });
                    // }}
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
                <LocationLi 
                  key={index} 
                  active={index === cursor}
                  item={data}
                  setSelected={setSelected}
                  setHovered={setHovered}
                >
                  <LocationData
                    key={data.id}
                    onClick={() => setSelected(data)}
                    onMouseEnter={() => onMouseEnterHandler(data,'popular')}
                    onMouseLeave={() => setHovered(undefined)}
                    // onClick={(e) => {
                    //   e.stopPropagation();
                    //   props.locationFixed({
                    //     id: data.id,
                    //     name: data.name,
                    //     country: data.country,
                    //     countryCode: data.countryCode,
                    //     description: data.description,
                    //     code: data.code,
                    //     icon: data.icon,
                    //   });
                    // }}
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
        }
      </LocationListDiv>
    </LocationDiv>
  );
};

export default LocationList;
