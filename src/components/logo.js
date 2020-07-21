import React from 'react';

import styled from "styled-components";
import { fontSize, fontFamily, color, margin, fontWeight } from "styled-system";

export const LogoBox = styled.button`
  ${color}
  ${fontSize}
  ${fontFamily}
  ${margin}
  ${fontWeight}
  &:hover {
    opacity: ${props => props.opacityHover || 0.5};
  }
`;

const logoStyles = {
  display: 'flex',
  color: "#01996D",
  fontSize: "24px",
  
  marginTop: '16px',
  fontWeight: 'bold'
};


export function Logo (props) {
  const stylesToUse = {...logoStyles, ...props.styles};
  return(
    <a href="index.html"><logoBox style={{...stylesToUse}}>Alivio</logoBox></a>
  );
};
export default Logo;