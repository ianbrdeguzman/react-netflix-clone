import React from 'react';
import { useSelector } from 'react-redux';
import { VideoContainer } from './videoStyles';

const Video = () => {
    const { id: youtubeId } = useSelector((state) => state.youtubeId);
    return (
        <VideoContainer>
            {
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?&autoplay=1&mute=0&showinfo=0&controls=0`}
                    frameBorder='0'
                    title='Video'
                    allowFullScreen
                    allow='autoplay'
                    width='100%'
                    height='100%'
                ></iframe>
            }
        </VideoContainer>
    );
};

export default Video;
