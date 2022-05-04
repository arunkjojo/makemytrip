import React from "react";
import Autosuggest from "react-autosuggest";
import { suggection_flight } from "../../DB/";
import {
  Label,
  LocationUl,
  LocationLi,
  LocationData,
  LocationNameLabel,
  LocationName,
  LocationLabel,
  LocationSName,
} from "../../customStyle";

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : suggection_flight[0].data.filter(
        // (data) => data.code.toLowerCase().slice(0, inputLength) === inputValue
        (data) => data.name.toLowerCase().includes(inputValue)
      );
};

const getSuggestionValue = (suggestion) => {
    console.log("getSuggestionValue", suggestion);
    return suggestion;
}

const renderSuggestion = (suggestion) => {
    console.log("renderSuggestion", suggestion);
    return (
        <div>
                <LocationLi key={suggestion.id}>
                <LocationData
                    key={suggestion.id}
                    onClick={(e) => {
                    e.stopPropagation();
                    }}
                >
                    <LocationNameLabel>
                    <LocationName>
                        {suggestion.name},{suggestion.country}
                    </LocationName>
                    <LocationLabel>{suggestion.description} </LocationLabel>
                    </LocationNameLabel>
                    <LocationSName>{suggestion.code} </LocationSName>
                </LocationData>
                </LocationLi>
        </div>
    );
};

class AutoSuggection extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
    console.log("onSuggestionsFetchRequested",this.state.suggestions);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
    console.log("onSuggestionsClearRequested",this.state.suggestions);
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "From",
      value,
      onChange: this.onChange,
      style: {
        background: "#ffffff",
        boxShadow: "0 2px 3px 0 rgb(0 0 0 / 10%)",
        padding: "11px 10px 11px 30px",
        outline: 0,
        border: 0,
        width: "100%",
        fontSize: "16px",
        color: "#000000",
        fontWeight: 700,
        position: "relative",
      },
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default AutoSuggection;
