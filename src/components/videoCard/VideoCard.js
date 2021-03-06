import React, { useEffect, useState } from 'react';
import './VideoCard.css';
import Moment from 'react-moment';
import axios from '../../axios';
import request from '../../request';
import NumberFormat from 'react-number-format';
import { Avatar } from '@material-ui/core';

function Video({ id, thumbnail, title, publishedAt, channelTitle }) {
    const [Views, setViews] = useState(0);

    const maxlimit = 60;

    useEffect(() => {
        async function fetchStatistics() {
            const fetchData = await axios.get(request.fetchStatistics + `&id=${id}`)
                .then(req => {
                    // console.log(req);
                    setViews(req.data.items[0].statistics.viewCount);
                })
        }
        fetchStatistics();
    }, [id])

    return (
        <a href={`https://www.youtube.com/watch?v=${id}`} style={{ textDecoration: "none" }}>
            <div className="videoCard">
                <img className="videoCard__img" src={thumbnail.url} alt="" />
                <div className="videoCard__info">
                    <Avatar
                        className="videoCard__avatar"
                        alt={channelTitle}
                        src=""
                    />
                    <div className="videoCard__text">
                        <h4>{((title).length > maxlimit) ?
                            (((title).substring(0, maxlimit - 3)) + '...') :
                            title}</h4>
                        <p>{channelTitle}</p>
                        <p><NumberFormat value={Views} displayType={'text'} thousandSeparator={true} /> Views • <Moment fromNow ago>{publishedAt}</Moment> ago</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Video
