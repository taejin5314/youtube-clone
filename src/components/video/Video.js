import React from 'react';
import './Video.css';
import Moment from 'react-moment';

function Video({ id, thumbnail, title, publishedAt, channelTitle }) {
    return (
        <div className="video">
            <img src={thumbnail.url} alt="" />
            <h3>{title}</h3>
            <h4>{channelTitle}</h4>
            <span><Moment fromNow ago>{publishedAt}</Moment> ago</span>
        </div>
    )
}

export default Video
