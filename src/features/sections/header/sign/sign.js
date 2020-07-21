import React from 'react';
import {Menu} from '../../../../components/button'
import Button from '../../../../components/button'
import MenuItem from '../../../../components/menu/menuitem';
import { width } from 'styled-system';

export default function Sign (props) {
    return (
        <div className="sign">
        <MenuItem text="Sign in"/>
        <Button text="Start Trial"/>    
        </div>
    )    
}