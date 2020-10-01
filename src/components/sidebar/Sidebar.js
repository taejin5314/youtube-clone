import React from 'react';
import SidebarRow from '../sidebarRow/SidebarRow';
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title='Home' Icon={HomeIcon} />
            <SidebarRow title='Trending' Icon={WhatshotIcon} />
            <SidebarRow title='Subscription' Icon={SubscriptionsIcon} />
        </div>
    )
}

export default Sidebar
