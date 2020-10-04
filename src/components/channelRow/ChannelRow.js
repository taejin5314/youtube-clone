import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import NumberFormat from 'react-number-format';
import './ChannelRow.css';

function ChannelRow({
    image,
    channel,
    subs,
    noOfVideos,
    description,
    channelId
}) {
    return (
        <a style={{ textDecoration: "none" }} href={`https://www.youtube.com/channel/${channelId}`}>
            <div className="channelRow">
                <Avatar className="channelRow__logo" alt={channel} src={image} />
                <div className="channelRow__text">
                    <h4>{channel}</h4>
                    <p>
                        <NumberFormat value={subs} displayType={'text'} thousandSeparator={true} /> subscribers • {noOfVideos} videos
                </p>
                    <p>
                        {((description).length > 132) ?
                            (((description).substring(0, 132 - 3)) + '...') :
                            description}
                    </p>
                </div>
                <div className="channelRow__subsContainer">
                    <button className="channelRow__subsBtn">Subscribe</button>
                </div>
            </div>
        </a>
    )
}

export default ChannelRow
