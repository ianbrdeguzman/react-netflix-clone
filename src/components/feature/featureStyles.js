import styled from 'styled-components';

export const StyledFeature = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FeatureContent = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    @media (min-width: 900px) {
        flex-direction: ${(props) =>
            props.direction === 'right' ? 'row' : 'row-reverse'};
    }
`;

export const InfoContainer = styled.div`
    width: 90vw;
    max-width: 540px;
    text-align: center;
    @media (min-width: 900px) {
        margin-right: ${(props) =>
            props.direction === 'right' ? '4rem' : null};
        margin-left: ${(props) => (props.direction === 'left' ? '4rem' : null)};
        text-align: left;
    }
    h2 {
        font-size: 26px;
        @media (min-width: 600px) {
            font-size: 40px;
        }
        @media (min-width: 900px) {
            font-size: 50px;
        }
    }
    p {
        font-size: 18px;
        @media (min-width: 600px) {
            font-size: 20px;
        }
        @media (min-width: 900px) {
            font-size: 26px;
        }
    }
`;

export const ImageContainer = styled.div`
    width: 90vw;
    max-width: 530px;
    position: relative;
    overflow-x: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const VideoContainer = styled.div`
    width: ${(props) => (props.size === 'small' ? '61%' : '72.5%')};
    height: ${(props) => (props.size === 'small' ? '30%' : '54%')};
    position: absolute;
    top: ${(props) => (props.size === 'small' ? '11%' : '20.5%')};
    left: ${(props) => (props.size === 'small' ? '19%' : '13.5%')};
    z-index: -1;
    video {
        width: 100%;
    }
`;
