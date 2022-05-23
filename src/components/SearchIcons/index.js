import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconDiv, IconUl, IconLi, IconSpan, LabelSpan } from "../../customStyle";

const SearchIcons = (props) => {
  const [selected, setSelected] = useState(1);
  return (
    <IconDiv>
      <IconUl>
        {props.data.map((v, i) => (
          <Link key={i} tabIndex="-1" to={v.path} style={{textDecoration: "none"}}>
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
