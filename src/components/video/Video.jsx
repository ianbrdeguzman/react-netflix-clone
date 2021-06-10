import React from 'react';
import { useSelector } from 'react-redux';
import { VideoContainer } from './videoStyles';

const Video = () => {
    const {
        loading,
        id: youtubeId,
        error,
    } = useSelector((state) => state.youtubeId);
    return (
        <VideoContainer>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error...</h1>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?&autoplay=1&mute=0&showinfo=0&controls=0`}
                    frameBorder='0'
                    title='Video'
                    allowFullScreen
                    allow='autoplay'
                    width='100%'
                    height='100%'
                ></iframe>
            )}
        </VideoContainer>
    );
};

export default Video;
