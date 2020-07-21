import React from 'react';
import styled from "styled-components";
import { alignContent, display, border, space, fontSize, width, height, color, justifyContent } from "styled-system";
import {Button, MenuItem} from './index';

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
  `;

  const headerStyle = {
      display: 'block',
      width: '380px'
  };

export function Sign (props) {
    let styleToUse = {...headerStyle, ...props.styles}
    return (
        <HeaderBox style={{...styleToUse}}>
        <MenuItem text="Sign in"/>
        <Button text="Start Trial"/>    
        </HeaderBox>
    );  
};
export default Sign;