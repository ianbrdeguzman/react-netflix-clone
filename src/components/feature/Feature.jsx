import React from 'react';
import {
    StyledFeature,
    FeatureContent,
    InfoContainer,
    ImageContainer,
    VideoContainer,
    Boxshot,
} from './featureStyles';

const Feature = ({
    title,
    text,
    image,
    direction,
    video,
    videoSize,
    boxshot,
}) => {
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
                            <video autoPlay muted loop>
                                <source src={video} type='video/mp4' />
                            </video>
                        )}
                    </VideoContainer>
                    {boxshot && (
                        <Boxshot>
                            <div>
                                <img src={boxshot.image} alt='boxshot' />
                            </div>
                            <div>
                                <p>Stranger Things</p>
                                <p>Downloading...</p>
                            </div>
                            <div>
                                <img src={boxshot.gif} alt='downloading-gif' />
                            </div>
                        </Boxshot>
                    )}
                </ImageContainer>
            </FeatureContent>
        </StyledFeature>
    );
};

export default Feature;
