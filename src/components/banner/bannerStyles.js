import styled from 'styled-components';

export const BannerContainer = styled.div`
    min-height: calc(100vh - 41px);
    padding: 2vh 0 0 0;
    @media (min-width: 600px) {
        min-height: calc(100vh - 68px);
        padding: 5vh 0 0 0;
    }
    @media (min-width: 900px) {
        min-height: calc(100vh - 68px);
        padding: 10vh 0 0 0;
    }
`;

export const BannerTitle = styled.div`
    width: 30vw;
`;

export const BannerDescription = styled.p`
    width: 30vw;
    font-size: 2vw;
`;

export const BannerButtons = styled.div`
    display: flex;
    button {
        margin: 1rem 0.5rem 0 0;
        padding: 0.2rem 1rem;
        color: #000000;
        background-color: #ffffff;
        border-radius: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 3vw;
        cursor: pointer;

        &:hover {
            background-color: #c1c0c0;
        }
        @media (min-width: 900px) {
            font-size: 1.5vw;
            padding: 0.5rem 1rem;
            margin: 1rem 1rem 0 0;
        }
        svg {
            margin-right: 0.5rem;
        }
    }
    button:last-child {
        color: #ffffff;
        background-color: rgba(128, 128, 128, 0.9);
    }
`;
