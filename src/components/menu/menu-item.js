import React from "react";
import styled from "styled-components";
import { verticalAlign, display, alignContent, fontSize, fontFamily, color, border, width, height } from "styled-system";

export const MenuItemBox = styled.div`
  ${color}
  ${display}
  ${fontSize}
  ${fontFamily}
  ${border}
  ${alignContent}
  ${verticalAlign}
  ${width}
  ${height}

  &:hover {
    opacity: ${props => props.opacityHover || 0.5};
  }
`;

const menuItemStyles = {
    display: 'inline',
    backgroundColor: "white",
    color: "#292929",
    fontSize: "20px",
    fontFamily: "'Lato', sans-serif",
    border: "none",
    alignContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: '10%',
    verticalAlign: 'middle',
    /* height: "60px" */
};


export function MenuItem (props) {
  let stylesToUse = {...menuItemStyles, ...props.styles};
  return(
 <MenuItemBox style={{...stylesToUse}}><a href={props.url||"#"}>{props.text}</a></MenuItemBox>
  );
} ;
export default MenuItem;