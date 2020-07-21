import React from 'react';
import {MenuItem} from './menu-item';
import styled from "styled-components";
import { verticalAlign, justifyContent, display, alignContent, width, margin } from "styled-system";

export * from './menu-item';

export const MenuBox = styled.div`
${display}
${alignContent}
${justifyContent}
${verticalAlign}
${width}
${margin}
`;

const menuStyle = {
    display: 'inline',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '60%',
    verticalAlign: 'middle',
    marginLeft: '10%',
    marginTop: '20px'
};

export function Menu (props) {
    let styleToUse = {...menuStyle, ...props.styles};
    return (
        <MenuBox style={{...styleToUse}}>
            <MenuItem text="Why Alivio"/>
            <MenuItem text="Solutions"/>
            <MenuItem text="Community"/>
            <MenuItem text="Pricing"/>
        </MenuBox>
    );
};

export default Menu;