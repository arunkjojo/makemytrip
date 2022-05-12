import axios from "axios";

const url = axios.create({
  baseURL: "https://makemytrip-666bbb-default-rtdb.firebaseio.com",
});

export const getApiSuggestions = () => {
  let suggestionResult = url.get(`/locationData.json`).then((response) => {
      return response.data[2];
    }).catch((error) => {
      return error;
    });
  return suggestionResult;
};

export const postApiSearch = (data) => {
  var departureDate, returnDate, tripType, fareType, fromLocation, toLocation, travellerClass, travellerCount = null;
  let database = {}

  tripType = data.tripType.tripType;

  fareType = data.tripType.fareType;

  if(tripType === "ONEWAY"){
    departureDate = data.date.departure;
  }else{
    returnDate = data.date.return
  }

  fromLocation = data.location.from;
  toLocation = data.location.to;

  travellerClass = data.traveller.classes;

  travellerCount = data.traveller.count;

  // console.log("tripType",tripType);

  // console.log("departureDate",departureDate);
  // console.log("returnDate",returnDate);

  // console.log("fromLocation",fromLocation);
  // console.log("toLocation",toLocation);

  // console.log("travellerClass",travellerClass);

  // console.log("travellerCount",travellerCount);

  if(database !== {}){
    url.post('/SearchTrip.json', {
      tripType:tripType,
      fareType:fareType,
      departureDate:departureDate,
      returnDate:returnDate,
      fromLocation,
      toLocation,
      travellerClass,
      travellerCount
    }).then(res => {
      if(res.status === 200) {
        alert("successful Submition")
      }
    }).catch(err =>{
      alert("Somthing Went Wrong")
    })
  }
};

export const getApiSearch = () => {
  let featchData = [];
  url.get(`/SearchTrip.json`).then(response => {
    for(let key in response.data){
      featchData.unshift({
        ...response.data[key],
        id:key
      })
    };
  });
  return featchData;
}