import React from 'react';
import {
    StyledFeature,
    FeatureContent,
    InfoContainer,
    ImageContainer,
    VideoContainer,
} from './featureStyles';

const Feature = ({ title, text, image, direction, video, videoSize }) => {
    return (
        <StyledFeature>
            <FeatureContent direction={direction}>
                <InfoContainer direction={direction}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </InfoContainer>
                <ImageContainer>
                    <img src={image} alt='feature' />
                    <VideoContainer size={videoSize}>
                        {video && (
                            <video autoPlay muted>
                                <source src={video} type='video/mp4' />
                            </video>
                        )}
                    </VideoContainer>
                </ImageContainer>
            </FeatureContent>
        </StyledFeature>
    );
};

export default Feature;
