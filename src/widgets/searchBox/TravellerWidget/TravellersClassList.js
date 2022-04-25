import React, {useState} from "react";
import TravellerClass from "./TravellerClass";
import TravellerCount from "./TravellerCount";
import styled from "styled-components";
export const Traveller = styled.div`
  display: flex;
`;

const Button = styled.button`
  border-radius: 34px;
  background: linear-gradient(93deg, #53b2fe, #065af3);
  box-shadow: 0 1px 7px 0 rgb(0 0 0 / 20%);
  display: inline-block;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  border: 0;
  text-align: right;
  font-weight: 700;
  /* width: 216px; */
  /* padding: 20px; */
  margin-bottom: -32px;
  opacity: 1;
  font-size: 18px;
  line-height: 24px;
`;
const TravellersClassList = (props) => {
  const [travellerCount, setTravellerCount] = useState(1);
  var totalTravellerCount;
  const [adultTravellerCount, setAdultTravellerCount] = useState(1);
  const [childrenTravellerCount, setChildernTravellerCount] = useState(0);
  const [infantTravellerCount, setInfantTravellerCount] = useState(0);


  const adultTravellerCounter = (a) => {
    totalTravellerCount=parseInt(a+childrenTravellerCount+infantTravellerCount);
    setTravellerCount(totalTravellerCount);
    setAdultTravellerCount(a);
  }
  const childrenTravellerCounter = (c) => {
    totalTravellerCount=adultTravellerCount+c+infantTravellerCount;
    setTravellerCount(totalTravellerCount);
    setChildernTravellerCount(c);
  }
  const infantTravellerCounter = (i) => {
    totalTravellerCount=adultTravellerCount+childrenTravellerCount+i;
    setTravellerCount(totalTravellerCount);
    setInfantTravellerCount(i);
  }

  return (
    <>
      <TravellerCount
        value={adultTravellerCount}
        paragraph="ADULTS (12y +)"
        start={1}
        end={9}
        travellerCounter={adultTravellerCounter}
      />
      <Traveller>
        <TravellerCount
          value={childrenTravellerCount}
          paragraph="CHILDREN (2y - 12y )"
          start={0}
          end={6}
          travellerCounter={childrenTravellerCounter}
        />

        <TravellerCount
          value={infantTravellerCount}
          paragraph="INFANTS (below 2y)"
          start={0}
          end={6}
          travellerCounter={infantTravellerCounter}
        />
      </Traveller>
      <TravellerClass
        value="Economy/Premium Economy"
        data={["Economy/Premium Economy", "Premium Economy", "Business"]}
        paragraph="CHOOSE TRAVEL CLASS"
      />
      <div style={{ textAlign: "right" }}>
        <Button onClick={() => {props.totalTraveller(travellerCount);}}>Apply</Button>
      </div>
    </>
  );
};

export default TravellersClassList;
