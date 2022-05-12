import React, { Component } from 'react'
import axios from 'axios';
import { AppDiv } from '../../customStyle'
export default class ReaultPage extends Component{
    state ={
        results: []
    }
    componentDidMount() {
        axios.get(`https://makemytrip-666bbb-default-rtdb.firebaseio.com/SearchTrip.json`)
        .then(response => {

            let searchApiDataBase = [];
            for(let key in response.data){
                searchApiDataBase.unshift({
                    ...response.data[key],
                    id:key
                })
            }
            this.setState({results: searchApiDataBase})
        })
    }

	render(){
		return (
            <AppDiv>
                <h3>Results</h3>
                {this.state.results.map((result) => (
                    <div id={result.id} key={result.id}>
                        <p>Departure Date: {result.departureDate}</p>
                        <p>Fare Type: {result.fareType}</p>
                        <p>Trip Type: {result.tripType}</p>
                        <div>
                            <h4>From Location:-</h4>
                            <p>Name: {result.fromLocation.name}</p>
                            <p>Location ID: {result.fromLocation.id}</p>
                            <p>Code: {result.fromLocation.code}</p>
                            <p>Contry (with Code): {result.fromLocation.country} ({result.fromLocation.countryCode})</p>
                            <p>description: {result.fromLocation.description}</p>
                        </div>
                        <div>
                            <h4>To Location:-</h4>
                            <p>Name: {result.toLocation.name}</p>
                            <p>Location ID: {result.toLocation.id}</p>
                            <p>Code: {result.toLocation.code}</p>
                            <p>Contry (with Code): {result.toLocation.country} ({result.toLocation.countryCode})</p>
                            <p>description: {result.toLocation.name}</p>
                        </div>
                        <p>Traveller Class: {result.travellerClass}</p>
                        <p>Traveller Total Count: {result.travellerCount.total}</p>
                        <p>Traveller Adult Count: {result.travellerCount.adult}</p>
                        <p>Traveller Childran Count: {result.travellerCount.childran}</p>
                        <p>Traveller Infant Count: {result.travellerCount.infant}</p>
                    </div>
                ))}
            </AppDiv>
	    )
    }
}