import React from "react";
import { Paragraph, Button } from "../../customStyle"
const SearchButton = (props) => {
  const searchMain={
    textAlign: 'center',
    width: '216px',
    padding: '20px',
    fontSize: '24px'
  }
  return (
    <Paragraph>
      <Button style={searchMain}>Search</Button>
    </Paragraph>
  );
};

export default SearchButton;
