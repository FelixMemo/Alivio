import React from 'react';
import styled from "styled-components";
import { position, textAlign, fontWeight, alignContent, fontFamily, display, border, space, fontSize, width, height, color, justifyContent } from "styled-system";

export const TextTitleBox = styled.div`
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

  const textTitleStyle = {
    color: '#01996D',
    display: 'inline',
    width: '600px',
    border: 'none',
    fontFamily: "'PT Serif', serif",
    fontSize: '60px',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: '30px'
  };

  export function TextTitle (props) {
    let styleToUse = {...textTitleStyle, ...props.styles};
    return (
    <TextTitleBox {...styleToUse}>{props.text||'Text'}</TextTitleBox>
    );
  };

  export default TextTitle;