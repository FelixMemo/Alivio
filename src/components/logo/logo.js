import React from 'react';

import styled from "styled-components";
import { space, fontSize, fontFamily, width, height, color } from "styled-system";

export const LogoBox = styled.button`
  ${color}
  ${fontSize}
  ${fontFamily}
  &:hover {
    opacity: ${props => props.opacityHover || 0.5};
  }
`;

const logoStyles = {
  color: "#01996D",
  fontSize: "24px",
  fontFamily: "'Heebo', sans-serif",
};


export default function Logo (props) {
  const stylesToUse = {...logoStyles, ...props.styles};
  return(
    <a href="index.html"><logoBox style={{...stylesToUse}}>Alivio</logoBox></a>
  )
} ;