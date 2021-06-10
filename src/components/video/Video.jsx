import React from 'react';
import { useSelector } from 'react-redux';
import {
    VideoContainer,
    VideoSize,
    CroppingDiv,
    DivToCrop,
    PlayerWrapper,
    VideoPlayer,
} from './videoStyles';

const Video = () => {
    const { id: youtubeId } = useSelector((state) => state.youtubeId);
    return (
        <VideoContainer>
            <VideoSize>
                <CroppingDiv>
                    <DivToCrop>
                        <PlayerWrapper>
                            {
                                <VideoPlayer
                                    src={`https://www.youtube.com/embed/${youtubeId}?&autoplay=1&mute=0&showinfo=0&controls=0&version=3&loop=1&playlist=${youtubeId}`}
                                    frameBorder='0'
                                    title='Video'
                                    allowFullScreen
                                    allow='autoplay'
                                    width='100%'
                                    height='100%'
                                ></VideoPlayer>
                            }
                        </PlayerWrapper>
                    </DivToCrop>
                </CroppingDiv>
            </VideoSize>
        </VideoContainer>
    );
};

export default Video;
