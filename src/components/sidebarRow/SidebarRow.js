import React from 'react';
import './SidebarRow.css';

function SidebarRow({ title, Icon, selected, minimized }) {
    return (
        <div className={`sidebarRow ${minimized && "minimized"} ${selected && "selected"}`} >
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title" >{title}</h2>
        </div >
    )
}

export default SidebarRow
