import React from "react";
import Autosuggest from "react-autosuggest/dist/Autosuggest";
import {
  LocationData,
  LocationNameLabel,
  LocationName,
  LocationLabel,
  LocationSName,
} from "../../customStyle";
const DUMMY = [
  {
    title: "recent",
    data: [
      {
        id: "f1",
        code: "DEL",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        description: "Indira Gandhi International Airport",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
      },
      {
        id: "f1",
        code: "DEL",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        description: "Indira Gandhi International Airport",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
      },
      {
        id: "f1",
        code: "DEL",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        description: "Indira Gandhi International Airport",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
      },
    ],
  },
  {
    title: "popular",
    data: [
      {
        id: "f1",
        code: "DEL",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        description: "Indira Gandhi International Airport",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
      },
      {
        id: "f1",
        code: "DEL",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        description: "Indira Gandhi International Airport",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
      },
      {
        id: "f1",
        code: "DEL",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        description: "Indira Gandhi International Airport",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
      },
      {
        id: "f1",
        code: "DEL",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        description: "Indira Gandhi International Airport",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
      },
      {
        id: "f1",
        code: "DEL",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        description: "Indira Gandhi International Airport",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
      },
      {
        id: "f1",
        code: "DEL",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        description: "Indira Gandhi International Airport",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
      },
    ],
  }
];

class LocationListData extends React.Component {
  constructor() {
    super();
    
    this.state = {
      value: "",
      suggestions: DUMMY,
    };
  }

  escapeRegexCharacters = (str) => {
    console.log("escapeRegexCharacters",str)
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  
  getSuggestions = (value) => {
    console.log("getSuggestions",value)
    const escapedValue = this.escapeRegexCharacters(value.trim());
  
    if (escapedValue === "") {
      return [];
    }
  
    const regex = new RegExp("^" + escapedValue, "i");
  
    return DUMMY
      .map((section) => {
        return {
          title: section.title,
          data: section.data.filter((datum) =>
            regex.test(datum.name)
          ),
        };
      })
      .filter((section) => 
        section.data.length > 0
      );
  }
  
  getSuggestionValue = (suggestion) => {
    console.log("escapeRegexCharacters",suggestion)
    return suggestion.name;
  }
  
  renderSuggestion = (suggestion) => {
    console.log("escapeRegexCharacters",suggestion)
    // return <span>{suggestion.name}</span>;
    return(<LocationData
        key={suggestion.id}
      >
        <LocationNameLabel>
          <LocationName>
            {suggestion.name},{suggestion.country}{" "}
          </LocationName>
          <LocationLabel>{suggestion.description} </LocationLabel>
        </LocationNameLabel>
        <LocationSName>{suggestion.code} </LocationSName>
      </LocationData>
    );
  }
  
  renderSectionTitle = (section) => {
    console.log("escapeRegexCharacters",section)
    return <strong>{section.title}</strong>;
  }
  
  getSectionSuggestions = (section) => {
    console.log("escapeRegexCharacters",section)
    return section.data;
  }

  onChange = (event, { newValue, method }) => {
    if(newValue!=='')
    this.setState({value: newValue});
  };

  onSuggestionsFetchRequested = ({ value }) => {
    if(value !== '')
        this.setState({ suggestions: this.getSuggestions(value)});
    else
        this.setState({suggestions: DUMMY});
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: this.props.keyValue.toUpperCase(),
      value,
      onChange: this.onChange,
      minLength:"3"
    };

    return (
      <Autosuggest
        alwaysRenderSuggestions={true}
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
        inputProps={inputProps}
      />
    );
  }
}
export default LocationListData;
