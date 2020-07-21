import React from 'react';
import Button from '../../../components'
import {Menu, Logo} from '../../../components'
import Sign from './sign'

export default function Header (props) {
    return (
        <div className="header">
        <Logo/><Menu/><Sign/>
        </div>
    )
}