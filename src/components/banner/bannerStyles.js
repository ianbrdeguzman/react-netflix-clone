import styled from 'styled-components';

export const BannerContainer = styled.div`
    height: 300px;
    object-fit: contain;
    background: linear-gradient(180deg, transparent, #141414),
        ${(props) =>
            props.image &&
            `url(http://image.tmdb.org/t/p/original/${props.image})`};
    background-size: cover;
    background-position: center 0;
    background-repeat: no-repeat;

    @media (min-width: 600px) {
        height: 400px;
    }
    @media (min-width: 900px) {
        height: 500px;
    }
    @media (min-width: 1440px) {
        height: 720px;
    }
`;

export const BannerContent = styled.div`
    padding: 0 0 0 2rem;
    position: absolute;
    top: 15%;
    left: 0;

    @media (min-width: 900px) {
        padding: 0 0 0 4rem;
    }
    @media (min-width: 1440px) {
        top: 30%;
    }
`;

export const BannerTitle = styled.h2`
    width: 100%;
    font-size: 1rem;
    @media (min-width: 600px) {
        font-size: 2rem;
    }
    @media (min-width: 900px) {
        font-size: 3rem;
    }
`;

export const BannerOverview = styled.div`
    color: #e5e5e5;
    width: 50vw;
    font-size: 9px;
    text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.5);
    @media (min-width: 600px) {
        font-size: 13px;
    }
    @media (min-width: 900px) {
        font-size: 20px;
        width: 30vw;
    }
    p:first-child {
        font-weight: bold;
        span {
            margin: 0 2rem;
        }
    }
`;

export const BannerButtons = styled.div`
    display: flex;
`;

export const PlayButton = styled.button`
    margin: 1rem 0.5rem 0 0;
    padding: 0.2rem 0.5rem;
    color: #000000;
    background-color: #ffffff;
    border-radius: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3vw;
    cursor: pointer;

    &:hover {
        filter: brightness(0.8);
    }
    @media (min-width: 900px) {
        font-size: 1.3vw;
        padding: 0.5rem 1rem;
        margin: 1rem 1rem 0 0;
    }
`;

export const AddToListButton = styled.button`
    font-size: 3vw;
    margin: 1rem 0.5rem 0 0;
    color: #ffffff;
    padding: 0.2rem 0.5rem;
    background-color: rgba(128, 128, 128, 0.9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    &:hover {
        filter: ${(props) => (props.disabled ? '' : 'brightness(1.2)')};
    }
    @media (min-width: 900px) {
        font-size: 1.3vw;
        padding: 0.5rem 1rem;
        margin: 1rem 1rem 0 0;
    }
    span {
        margin-left: 0.5rem;
    }
`;
