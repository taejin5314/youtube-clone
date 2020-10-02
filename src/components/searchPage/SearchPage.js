import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import './SearchPage.css'
import ChannelRow from '../channelRow/ChannelRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__container">
                <div className="searchPage__filter">
                    <TuneIcon />
                    <h2>FILTER</h2>
                </div>
                <hr />

                <ChannelRow />
            </div>
        </div>
    )
}

export default SearchPage
