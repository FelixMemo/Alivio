import React from "react";
import styled from "styled-components";
import { fontSize, fontFamily, color, border, backgroundColor, width } from "styled-system";

export const MenuItemBox = styled.button`
  ${color}
  ${fontSize}
  ${fontFamily}
  ${border}
  ${width}
  &:hover {
    opacity: ${props => props.opacityHover || 0.5};
  }
`;

const MenuItemStyles = {
    backgroundColor: "white",
    color: "#292929",
    fontSize: "20px",
    fontFamily: "'Lato', sans-serif",
    border: "none"
};


export default function MenuItem (props) {
  const stylesToUse = {...MenuItemStyles, ...props.styles};
  return(
 <a href={props.url||"#"}><MenuItemBox style={{...stylesToUse}}>{props.text}</MenuItemBox></a>
  )
} ;