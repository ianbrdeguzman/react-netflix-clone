import styled from 'styled-components';

export const HeroContainer = styled.div`
    min-height: calc(100vh - 41px);

    @media (min-width: 900px) {
        min-height: calc(100vh - 68px);
    }
`;

export const HeroImage = styled.div`
    width: 30vw;
`;

export const HeroDescription = styled.p`
    width: 30vw;
    font-size: 2vw;
`;

export const HeroButtons = styled.div`
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
