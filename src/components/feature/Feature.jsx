import React from 'react';
import {
    StyledFeature,
    FeatureContent,
    InfoContainer,
    ImageContainer,
    VideoContainer,
} from './featureStyles';
import styled from 'styled-components';

const Boxshot = styled.div`
    position: absolute;
    bottom: 10%;
    left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 25%;
    padding: 1rem;
    border: 2px solid #222222;
    border-radius: 1rem;
    background-color: #000000;
    div:nth-child(1) {
        flex: 0.2;
    }
    div:nth-child(2) {
        flex: 0.8;
        padding: 0 1rem;
        p:first-child {
            font-weight: bold;
        }
        p:last-child {
            color: #0071eb;
        }
    }
    div:nth-child(3) {
        flex: 0.2;
    }
`;

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
