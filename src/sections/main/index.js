import React from 'react';
import styled from "styled-components";
import { padding, backgroundImage, verticalAlign, alignContent, display, border, space, fontSize, width, height, color, justifyContent } from "styled-system";
import {Header} from '../../components'
import Contain from './contain';

export const MainSectionBox = styled.div`
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
  ${backgroundImage}
  ${padding}
  `;

const mainSectionStyle = {
    display: 'flex',
    width: '100%',
    height: '890px',
    alignContent: 'center',
    backgroundImage: "url(/main-bg.png)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};


export function MainSection (props) {
    let styleToUse = {...mainSectionStyle, ...props.styles};
    return (
        <MainSectionBox style={{...styleToUse}}>
            <Header/>
            <Contain title='Be aware, Manage well' text='Everyone experiences stress in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.'/>
        </MainSectionBox>
    );
};
export default MainSection;