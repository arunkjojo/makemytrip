import React from 'react'
import styledComponents from 'styled-components'
import DateWidget from '../../widgets/searchBox/DateWidget'
import LocationWidget from '../../widgets/searchBox/LocationWidget'
import TravellerWidget from '../../widgets/searchBox/TravellerWidget'

const SearchBoxDiv = styledComponents.div`
display: flex;
padding: 0px;
margin-left: 0px;
margin-bottom: 20px;

width: 100%;
margin: 0 auto 20px;
border-radius: 10px;
display: flex;
align-items: center;
align-items: center;
border: solid 1px #e7e7e7;
position: relative;
z-index: 0;
`;

const SpinCircle = styledComponents.span`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-left: -22px;
  border-radius: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 10%);
  z-index: 1;
  cursor: pointer;
`
const SpinIcon =styledComponents.span`
  width: 15px;
  height: 11px;
  background-position: -149px -111px;
  background-image: url(https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/landingSprite@19x.webp);
  background-repeat: no-repeat;
  display: inline-block;
  background-size: 200px 650px;
  font-size: 0px;
  flex-shrink: 0;
`
const SearchBox = () => {
  return (
    <SearchBoxDiv>
      <LocationWidget 
      label="From"
      widthValue="300"
      name="Mumbai"
      desc="Chhatrapati Shivaji International Airport"
      code="MOB"/>

      <SpinCircle>
        <SpinIcon />
      </SpinCircle>

      <LocationWidget 
      label="To"
      widthValue="300"
      name="Delhi"
      desc="Delhi Airport"
      code="DEL"/>

      <DateWidget 
      label="Departure"
      date={new Date()}
      widthValue="158" />

      <DateWidget 
      label="Return"
      date={new Date()}
      widthValue="158" />

      <TravellerWidget />
    </SearchBoxDiv>
  )
}
export default SearchBox