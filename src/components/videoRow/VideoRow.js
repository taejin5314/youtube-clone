import React, { useEffect, useState } from 'react';
import './VideoRow.css';
import axios from '../../axios';
import request from '../../request';
import NumberFormat from 'react-number-format';
import Moment from 'react-moment';

function VideoRow({ videoId }) {
    // publishedAt, viewCount, title, channelTitle, description, thumbnail
    const [PublishedAt, setPublishedAt] = useState('');
    const [ViewCount, setViewCount] = useState(0);
    const [Title, setTitle] = useState('');
    const [ChannelTitle, setChannelTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Thumbnail, setThumbnail] = useState('');

    useEffect(() => {
        async function fetchVideoInfo() {
            const fetch = await axios.get(request.fetchVideoData + `&id=${videoId}`)
                .then((res) => {
                    const data = res.data.items[0];
                    // console.log(data);
                    setPublishedAt(data.snippet.publishedAt);
                    setViewCount(data.statistics.viewCount);
                    setTitle(data.snippet.localized.title);
                    setChannelTitle(data.snippet.channelTitle);
                    setDescription(data.snippet.localized.description)
                    setThumbnail(data.snippet.thumbnails.medium.url);
                })
        }
        fetchVideoInfo();
    }, [videoId])

    return (
        <div className="videoRow">
            <img src={Thumbnail} alt="" />
            <div className="videoRow__text">
                <h3 className="videoRow__title">{Title}</h3>
                <p className="videoRow__subTitle">
                    {ChannelTitle} • <NumberFormat value={ViewCount} displayType={'text'} thousandSeparator={true} /> Views • <Moment fromNow ago>{PublishedAt}</Moment> ago
                </p>
                <p className="videoRow__description">
                    {((Description).length > 125) ?
                        (((Description).substring(0, 125 - 3)) + '...') :
                        Description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow
