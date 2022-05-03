import React from "react";
import DateWidget from "../../widgets/DateWidget";
import LocationWidget from "../../widgets/LocationWidget";
import TravellerWidget from "../../widgets/TravellerWidget";
import { SearchBoxDiv, AddNewSearchBox, CloseIcon, RemoveCity } from "../../customStyle";
import { useSelector, useDispatch } from "react-redux";
import { addNewTrip, removeLastTrip, changeLocations } from '../../redux/flightSlice';

const MultiCity = (props) => {
    const dispatch = useDispatch();
    
    const tripData = useSelector(state => state.flight.trip);
    
    function locationChangeHandler(type, location, index){
        console.log(type, location, index);

        dispatch(changeLocations({
            primaryIndex: index,
            to: location
        }));
    }
    const addNewHandler = () => {
        dispatch(addNewTrip())
    }
    const removeCityHandler = () => {
        dispatch(removeLastTrip());
    }
    const SearchBoxDivs = [];
    for (let i = 0; i <= (tripData.length-1); i++) {
        SearchBoxDivs.push(
        <SearchBoxDiv key={i}>

            {i === 0 && 
            <LocationWidget
                label="From"
                widthValue="300px"
                primaryKey="from"
                id={tripData[0].from.id}
                name={tripData[0].from.name}
                contry={tripData[0].from.contry}
                description={tripData[0].from.description}
                code={tripData[0].from.code}
                onLocationChange={(data)=>locationChangeHandler('from', data, 0)}
            />
            }
            
            {i > 0 &&  
            <LocationWidget
                label="From"
                widthValue="300px"
                primaryKey="inter_from"
                countNumber={i}
                id={tripData[i].from.id}
                name={tripData[i].from.name}
                contry={tripData[i].from.contry}
                description={tripData[i].from.description}
                code={tripData[i].from.code}
                onLocationChange={(data)=>locationChangeHandler('from', data, i)}
            />
            }

            
            {i < (tripData.length-1) &&  
            <LocationWidget
                label="To"
                widthValue="300px"
                primaryKey="inter_to"
                countNumber={i}
                id={tripData[i].to.id}
                name={tripData[i].to.name}
                contry={tripData[i].to.contry}
                description={tripData[i].to.description}
                code={tripData[i].to.code}
                onLocationChange={(data)=>locationChangeHandler('to', data, i)}
            />
            }

            {i === (tripData.length-1) && 
            <LocationWidget
                label="To"
                widthValue="300px"
                primaryKey="to"
                id={tripData[i].to.id}
                name={tripData[i].to.name}
                contry={tripData[i].to.contry}
                description={tripData[i].to.description}
                code={tripData[i].to.code}
                onLocationChange={(data)=>locationChangeHandler('to', data, i)}
            />
            }

            <DateWidget primaryKey="from" label="Departure" date={ tripData[i].departure !== "" ? new Date(tripData[i].departure) : new Date() } widthValue="158px" singleDate={true}/>

            {i === 0 && 
            <TravellerWidget widthValue="260px"/>
            }

            {i === (tripData.length-1) &&
            <AddNewSearchBox onClick={(e)=>{
                e.preventDefault();
                addNewHandler();
            }}>+ ADD ANOTHER CITY</AddNewSearchBox>
            }

            {i === (tripData.length-1) && i > 1 && <RemoveCity onClick={(e)=>{
            e.preventDefault();
            removeCityHandler();
            }}><CloseIcon city={true}/></RemoveCity> }

        </SearchBoxDiv>
        );
    }
  return (
    <>
        {SearchBoxDivs}
    </>
  )
}

export default MultiCity