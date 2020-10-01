import React, { useEffect, useState } from 'react';
import Video from '../video/Video';
import axios from '../../axios';
import request from '../../request';
import './RecommendedVideos.css';

function RecommendedVideos() {

    const [MostPopularVideos, setMostPopularVideos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const fetch = await axios.get(request.fetchMostPopular)
                .then(req => {
                    setMostPopularVideos(req.data.items);
                })
        }
        fetchData();
    }, [])

    console.log(MostPopularVideos);

    return (
        <div className="recommendedVideos">
            <h2>Most Popular</h2>
            <div className="recommendedVideos__videos">
                {MostPopularVideos.map(video => (
                    // console.log(video.snippet.thumbnails.default);
                    // console.log(video.snippet.localized.title);
                    // console.log(video.snippet.publishedAt);
                    // console.log(video.snippet.channelTitle);
                    <Video key={video.id} id={video.id} thumbnail={video.snippet.thumbnails.standard} title={video.snippet.localized.title} publishedAt={video.snippet.publishedAt} channelTitle={video.snippet.channelTitle} />
                ))}


            </div>
        </div>
    )
}

export default RecommendedVideos
