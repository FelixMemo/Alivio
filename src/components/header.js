import React from 'react';
import {Logo, Menu, Sign}  from './index';
 
import styled from "styled-components";
import { padding, verticalAlign, alignContent, display, border, space, fontSize, width, height, color, justifyContent } from "styled-system";

export const HeaderBox = styled.div`
  ${display}
  ${space}
  ${width}
  ${color}
  ${height}
  ${border}
  ${fontSize}
  ${justifyContent}
  ${alignContent}
  ${verticalAlign}
  ${padding}

  `;

const HeaderStyle = {
    display: 'flex',
    width: '100%',
    border: 'none',
    justifyContent: 'space-between',
    top: '0',
    verticalAlign:'top',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    height: '60px',
    paddingLeft: '10%',
    paddingRight: '10%'
};

export function Header (props) {
    const styleToUse = {...HeaderStyle, ...props.styles};
    return (
        <HeaderBox {...styleToUse}>
        <Logo/><Menu/><Sign/>
        </HeaderBox>
    );
};
export default Header;