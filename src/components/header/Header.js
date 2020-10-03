import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const [InputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to='/'>
                    <img
                        className="header__logo"
                        src="../../YouTube_Logo_2017.svg"
                        alt=""
                    />
                </Link>
            </div>

            <div className="header__input">
                <input type="text" placeholder="Search" onChange={(e) => setInputSearch(e.target.value)} value={InputSearch} />
                {InputSearch ?
                    <Link to={`/search/${InputSearch}`}>
                        <SearchIcon className="header__inputButton" style={{ fontSize: "20px" }} onClick={() => setInputSearch('')} />
                    </Link>
                    :
                    <SearchIcon className="header__inputButton" style={{ fontSize: "20px" }} />
                }
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar style={{ width: "30px", height: "30px" }} />
            </div>
        </div>
    )
}

export default Header
