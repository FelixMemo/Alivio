import React from 'react';
import styled from "styled-components";
import { position, textAlign, fontWeight, alignContent, fontFamily, display, border, space, fontSize, width, height, color, justifyContent } from "styled-system";

export const TextRegularBox = styled.div`
  ${display}
  ${space}
  ${width}
  ${color}
  ${height}
  ${border}
  ${fontSize}
  ${justifyContent}
  ${alignContent}
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${position}
  `;

  const textRegularStyle = {
    color: '#484848',
    display: 'inline',
    width: '480px',
    border: 'none',
    fontFamily: "'Lato', sans-serif",
    fontSize: '20px',
    fontWeight: 'normal',
    textAlign: 'left',
    marginBottom: '40px'
  };

  export function TextRegular (props) {
    let styleToUse = {...textRegularStyle, ...props.styles};
    return (
    <TextRegularBox {...styleToUse}>{props.text||'Text'}</TextRegularBox>
    );
  };

  export default TextRegular;

