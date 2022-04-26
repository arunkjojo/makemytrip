import React from 'react'
import styled from 'styled-components'
const Button = styled.button`
  border-radius: 34px;
  background: linear-gradient(93deg,#53b2fe,#065af3);
  box-shadow: 0 1px 7px 0 rgb(0 0 0 / 20%);
  display: inline-block;
  flex-shrink: 0;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  border: 0;
  text-align: center;

  font-weight: 700;

  width: 216px;
  padding: 20px;
  margin-bottom: -32px;
  opacity: 1;

  font-size: 24px;
  line-height: 24px;
`
const Paragraph=styled.p`
  display: flex;
  justify-content: center;
`
const SearchButton = (props) => {
  return (
    <Paragraph >
      <Button>
        {props.title}</Button>
    </Paragraph>
  )
}

export default SearchButton