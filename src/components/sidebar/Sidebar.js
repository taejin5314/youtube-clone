import React from 'react';
import SidebarRow from '../sidebarRow/SidebarRow';
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title='Home' Icon={HomeIcon} selected />
            <SidebarRow title='Trending' Icon={WhatshotIcon} />
            <SidebarRow title='Subscription' Icon={SubscriptionsIcon} />
            <hr />
            <SidebarRow title='Library' Icon={VideoLibraryIcon} />
            <SidebarRow title='History' Icon={HistoryIcon} />
            <SidebarRow title='Your videos' Icon={OndemandVideoIcon} />
            <SidebarRow title='Watch Later' Icon={WatchLaterIcon} />
            <SidebarRow title='Liked videos' Icon={ThumbUpAltIcon} />
            <SidebarRow title='Show more' Icon={ExpandMoreIcon} />
            <hr />
        </div>
    )
}

export default Sidebar
