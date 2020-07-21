import React from "react";
import styled from "styled-components";
import { border, space, fontSize, fontFamily, width, height, color} from "styled-system";

export const ButtonBox = styled.button`
  ${space}
  ${width}
  ${color}
  ${height}
  ${border}
  ${fontSize}
  ${fontFamily}
  &:hover {
    opacity: ${props => props.opacityHover || 0.5};
  }
`;

const buttonStyles = {
  backgroundColor: "#01996D", 
  width: "200px",
  height: "60px",
  border: "none",
  color: "#ffffff",
  fontSize: "20px",
  fontFamily: "'Lato', sans-serif",
  borderRadius: "4px"
};


export function Button(props) {
  let stylesToUse = {...buttonStyles, ...props.styles};
  return(
    <ButtonBox style={{...stylesToUse}}>{props.text}</ButtonBox>
  );
};
export default Button;