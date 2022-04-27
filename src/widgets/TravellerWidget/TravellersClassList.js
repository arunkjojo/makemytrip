import React, { useState } from "react";
import TravellerClass from "./TravellerClass";
import TravellerCount from "./TravellerCount";
import { TravellerData } from "../../DB"
import { FlexDiv, Button } from "../../customStyle";


const TravellersClassList = (props) => {
  const [travellerCount, setTravellerCount] = useState(1);
  var totalTravellerCount;
  const [adultTravellerCount, setAdultTravellerCount] = useState(1);
  const [childrenTravellerCount, setChildernTravellerCount] = useState(0);
  const [infantTravellerCount, setInfantTravellerCount] = useState(0);

  const adultTravellerCounter = (a) => {
    totalTravellerCount = parseInt(
      a + childrenTravellerCount + infantTravellerCount
    );
    setTravellerCount(totalTravellerCount);
    setAdultTravellerCount(a);
  };
  const childrenTravellerCounter = (c) => {
    totalTravellerCount = adultTravellerCount + c + infantTravellerCount;
    setTravellerCount(totalTravellerCount);
    setChildernTravellerCount(c);
  };
  const infantTravellerCounter = (i) => {
    totalTravellerCount = adultTravellerCount + childrenTravellerCount + i;
    setTravellerCount(totalTravellerCount);
    setInfantTravellerCount(i);
  };

  return (
    <>
      <TravellerCount
        value={adultTravellerCount}
        paragraph="ADULTS (12y +)"
        start={1}
        end={9}
        travellerCounter={adultTravellerCounter}
      />
      <FlexDiv>
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
      </FlexDiv>
      <TravellerClass
        value="Economy/Premium Economy"
        data={TravellerData}
        paragraph="CHOOSE TRAVEL CLASS"
      />
      <div style={{ textAlign: "right" }}>
        <Button
          style={{
            fontSize: '18px',
            textAlign: 'right'
          }}
          onClick={() => {
            props.totalTraveller(travellerCount);
          }}
        >
          Apply
        </Button>
      </div>
    </>
  );
};

export default TravellersClassList;
