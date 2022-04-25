import React, { useState } from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
const IconDiv = styledComponents.div`
  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  top: 25px;;
  position: absolute;
  right: 0;
  z-index: 11;
`;
const IconUl = styledComponents.ul`

  text-decoration: none;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;

  font-size: 14px;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 7px 0 rgb(0 0 0 / 40%);
  height: 80px;
`;
const IconLi = styledComponents.li`
  align-items: flex-start;
  display: flex;
  margin-left: 22px;
  flex-shrink: 0!important;
  margin: 0 10px;
  position: relative;
  align-items: center;
  flex-direction: column;
  display: flex;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  border-radius: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 3px solid #008cff;
    
    color: #008cff;
  `}
`;
const IconSpan = styledComponents.span`
  height: 34px;
  width: 40px;
  margin-bottom: 2px;
  background-size: 300px 400px;
  background-image: url(https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/commonHeaderSprite7.webp)!important;
  
  
  background-position: ${(props) => props.iconPosition};

  ${({ active, activeIcon }) =>
    active && activeIcon &&
    `
    background-position: ${activeIcon};
    color: #008cff;
  `}
  

  background-repeat: no-repeat;
`;
const LabelSpan = styledComponents.span`
  background: transparent;
  padding: 8px;
`;
const linkStyle = {
  textDecoration: "none"
}
const SearchIcons = (props) => {
  const [selected, setSelected] = useState(1);
  return (
    <IconDiv>
      <IconUl>
        {props.data.map((v, i) => (
          <Link to={v.path} style={linkStyle}>
          <IconLi
            key={v.id}
            onClick={() => setSelected(v.id)}
            active={v.id === selected}
          >
            <IconSpan
              active={v.id === selected}
              activeIcon={v.activeIcon}
              iconPosition={v.icon}
            />
            <LabelSpan>{v.name}</LabelSpan>
          </IconLi>
          </Link>
        ))}
      </IconUl>
    </IconDiv>
  );
};

export default SearchIcons;
