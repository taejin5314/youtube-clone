import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../YouTube_Logo_2017.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Header() {
    const [InputSearch, setInputSearch] = useState('');
    const [SearchBtnClicked, setSearchBtnClicked] = useState(false);

    const onClickhandler = () => {
        setSearchBtnClicked(true);
    }

    const onClickSearch = () => {
        setInputSearch('');
        setSearchBtnClicked(false);
    }

    return (
        <>
            {SearchBtnClicked ?
                <div className="header">
                    <div className="header__left">
                        <IconButton className="header__icon display" onClick={() => setSearchBtnClicked(false)}>
                            <ArrowBackIcon />
                        </IconButton>
                    </div>
                    <div className="header__hiddenInput">
                        <input type="text" placeholder="Search" onChange={(e) => setInputSearch(e.target.value)} value={InputSearch} />
                        {InputSearch ?
                            <Link to={`/search/${InputSearch}`}>
                                <SearchIcon className="header__inputButton" style={{ fontSize: "20px" }} onClick={onClickSearch} />
                            </Link>
                            :
                            <SearchIcon className="header__inputButton" style={{ fontSize: "20px" }} />
                        }
                    </div>
                </div>
                :
                <div className="header">
                    <div className="header__left">
                        <IconButton className="header__icon" style={{ marginBottom: "6px" }}>
                            <MenuIcon />
                        </IconButton>
                        <Link to='/'>
                            <img
                                className="header__logo"
                                src={logo}
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
                        <IconButton className="header__icon display" onClick={onClickhandler}>
                            <SearchIcon />
                        </IconButton>
                        <VideoCallIcon className="header__icon" />
                        <AppsIcon className="header__icon" />
                        <NotificationsIcon className="header__icon" />
                        <Avatar style={{ width: "30px", height: "30px" }} />
                    </div>
                </div>
            }
        </>
    )
}

export default Header
