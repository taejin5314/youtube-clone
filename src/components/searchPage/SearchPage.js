import React, { useEffect, useState } from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import './SearchPage.css'
import ChannelRow from '../channelRow/ChannelRow';
import axios from '../../axios';
import request from '../../request';
import { useParams } from 'react-router-dom';
import VideoRow from '../videoRow/VideoRow';


function SearchPage() {
    const param = useParams();
    const [ChannelImage, setChannelImage] = useState('');
    const [ChannelTitle, setChannelTitle] = useState('');
    const [ChannelSubs, setChannelSubs] = useState(0);
    const [ChannelNoOfVideos, setChannelNoOfVideos] = useState(0);
    const [ChannelDescription, setChannelDescription] = useState('');
    const [VideoIds, setVideoIds] = useState([]);
    const [ChannelId, setChannelId] = useState('')

    useEffect(() => {
        async function searchChannel() {
            const fetch = await axios.get(request.fetchSearchChannel + `&q=${param.searchTerm}`)
                .then((res) => {
                    // fetch the data of the very first channel comes from the request.
                    const data = res.data.items[0].snippet;
                    // console.log(data);
                    setChannelImage(data.thumbnails.medium.url);
                    setChannelTitle(data.channelTitle);
                    setChannelDescription(data.description);
                    setChannelId(data.channelId);
                    return axios.get(request.fetchChannelStatistics + `&id=${res.data.items[0].id.channelId}`)
                })
                .then((res) => {
                    const data = res.data.items[0].statistics;
                    // console.log(data);
                    setChannelSubs(data.subscriberCount);
                    setChannelNoOfVideos(data.videoCount);
                })
        }
        searchChannel()
            .then(() => {
                const fetch = axios.get(request.fetchSearchVideo + `&q=${param.searchTerm}`)
                    .then((res) => {
                        // console.log(res.data.items);
                        setVideoIds(res.data.items);
                    })
            })
    }, [param.searchTerm])

    return (
        <div className="searchPage">
            <div className="searchPage__container">
                <div className="searchPage__filter">
                    <TuneIcon />
                    <h2>FILTER</h2>
                </div>
                <hr />

                <ChannelRow
                    channelId={ChannelId}
                    image={ChannelImage}
                    channel={ChannelTitle}
                    subs={ChannelSubs}
                    noOfVideos={ChannelNoOfVideos}
                    description={ChannelDescription}
                />
                <hr />

                {VideoIds.map((video) => (
                    <VideoRow key={video.etag} videoId={video.id.videoId} />
                ))}
            </div>
        </div>
    )
}

export default SearchPage
