import React from 'react';
import MenuItem from './menuitem'

export default function Menu (props) {
    return (
        <div className="menu">
            <MenuItem text="Why Alivio"/>
            <MenuItem text="Solutions"/>
            <MenuItem text="Community"/>
            <MenuItem text="Pricing"/>
        </div>
    )
}