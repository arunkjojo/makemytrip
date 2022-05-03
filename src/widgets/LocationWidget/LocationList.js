import React, {useState} from "react";
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
  SearchInput,
  LocationListDiv
} from "../../customStyle";

const LocationList = (props) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <LocationDiv>
      <SearchInput value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
      <LocationListDiv>
        {searchValue!=='' ?( 
          <div>
            <Label>SUGGESTIONS</Label>
          </div>
        ): (
          props.data.map((v, i) => (
            <div key={i}>
              <Label>{v.itemName}</Label>
              <LocationUl>
                {v.data.map((data, index) => (
                  <LocationLi key={index}>
                    <LocationData
                      key={data.id}
                      onClick={(e)=> {
                        e.stopPropagation();
                        props.locationFixed({
                          id:data.id,
                          name: data.name,
                          contry:data.contry,
                          description: data.description,
                          code: data.code,
                        })
                      }}
                    >
                      <LocationNameLabel>
                        <LocationName>
                          {data.name},{data.contry}{" "}
                        </LocationName>
                        <LocationLabel>{data.description} </LocationLabel>
                      </LocationNameLabel>
                      <LocationSName>{data.code} </LocationSName>
                    </LocationData>
                  </LocationLi>
                ))}
              </LocationUl>
            </div>
          ))
        )}
      </LocationListDiv>
      
    </LocationDiv>
  );
};

export default LocationList;
