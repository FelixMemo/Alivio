import React from 'react';
import styled from "styled-components";
import { verticalAlign, alignContent, display, border, space, fontSize, width, height, color, justifyContent } from "styled-system";
import {TextRegular, TextTitle, Button} from '../../components' 

export const ContainBox = styled.div`
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
  `;

const containStyle = {
    display: 'flex',
    width: '400px',
    position: 'absolute',
    top: '30%',
    left: '10%',
    justifyContent: 'space-around',
    flexDirection: 'column'
};


export function Contain (props) {
    let styleToUse = {...containStyle, ...props.styles};
    return (
        <ContainBox style={{...styleToUse}}>
            <TextTitle text={props.title}/>
            <TextRegular text={props.text}/>
            <Button text='Find Your Way'/>
        </ContainBox>
    );
};
export default Contain;