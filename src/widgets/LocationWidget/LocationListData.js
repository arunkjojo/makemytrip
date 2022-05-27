import React, { useEffect, useState, useCallback } from "react";
import Autosuggest from "react-autosuggest/dist/Autosuggest";
import {
  LocationData,
  LocationNameLabel,
  LocationName,
  LocationLabel,
  LocationSName,
  Label,
} from "../../customStyle";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getApiSuggestions } from "../../API/";

const LocationSuggrctionList = (props) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const locationData = useSelector((state) => state.location);
  const [location, setLocation]=useState({})

  // useEffect(()=>{
  //   console.log("location", location);
  // },[location]);

  useEffect(() => {
    var locations = [...suggestions];
    if (props.keyValue === "from"){
      let recent = {
        title: "RECENT",
        data: locationData.recent.from
      }
      locations.push(recent);
    } else if(props.keyValue === "to"){
      let recent = {
        title: "RECENT",
        data: locationData.recent.to
      }
      
      locations.push(recent);
    }
    if(locationData.popular !== []){
      let popular = {
        title: "POPULAR",
        data: locationData.popular
      }
      locations.push(popular);
    }
    setSuggestions(locations);
  }, []);

  const debouncedSave = useCallback(
    debounce((newValue) => getApiSuggestions(newValue), 1000),
    []
  );

  const updateValue = (value) => {
    setValue(value);
    debouncedSave(value);
    getSuggestions(value)
  };

  const escapeRegexCharacters = (str) => {
    // console.log("escapeRegexCharacters", str);
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const getSuggestions = (value) => {
    // console.log("getSuggestions", value);
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === "") {
      // console.log(suggestions)
      return suggestions;
    } else {
      let suggectionData = [{
        title: 'SUGGECTIONS',
        data: locationData.suggestions.filter((data) => (
          data.name.toLowerCase().includes(value)
        ))
      }];
      // console.log("suggectionData",suggectionData);
      return suggectionData;
    }
  };

  const getSuggestionValue = (suggestion) => {
    // console.log("getSuggestionValue", suggestion);
    setLocation(suggestion);
    // props.locationFixed(suggestion);
    return suggestion.name;
  };

  const renderSuggestion = (suggestion) => {
    // console.log("renderSuggestion", suggestion);
    return (
      <LocationData key={suggestion.id}>
        <LocationNameLabel>
          <LocationName>
            {suggestion.name},{suggestion.country}{" "}
          </LocationName>
          <LocationLabel>{suggestion.description} </LocationLabel>
        </LocationNameLabel>
        <LocationSName>{suggestion.code} </LocationSName>
      </LocationData>
    );
  };

  const renderSectionTitle = (section) => {
    // console.log("renderSectionTitle", section);
    return <Label>{section.title}</Label>;
  };

  const getSectionSuggestions = (section) => {
    // console.log("getSectionSuggestions", section.data);
    return section.data;
  };

  const onChange = (event, { newValue, method }) => {
    // setValue(newValue);
    // event.defaultPrevent();
    updateValue(newValue);
    if(method === 'enter'){
      // console.log(">>>enter", location)
      props.locationFixed(location)
    }
    // else if(method === 'click'){
    //   props.locationFixed(location)
    // }
  };
  
  // const onBlur = (event, { highlightedSuggestion }) => {
  //   alert("onBlur");
  //   console.log(">>>highlightedSuggestion",highlightedSuggestion)
  //   props.locationFixed(highlightedSuggestion)
  // }

  const onSuggestionSelected = (event, { suggestion, method }) => {
    // console.log(">>>onSuggestionSelected ",suggestion);
    props.locationFixed(suggestion)
  }

  const onSuggestionsFetchRequested = ({value}) => {
    let getSugData = getSuggestions(value);
    // console.log("getSugData",getSugData);
    setSuggestions(getSugData);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: props.keyValue.toUpperCase(),
    value,
    onChange,
    tabIndex:'-1',
    autoFocus:true
  };

  return (
    <Autosuggest
      focusInputOnSuggestionClick={true}
      alwaysRenderSuggestions={true}
      multiSection={true}
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderSectionTitle={renderSectionTitle}
      getSectionSuggestions={getSectionSuggestions}
      inputProps={inputProps}
      onSuggestionSelected = {onSuggestionSelected}
    />
  );
};
export default LocationSuggrctionList;
