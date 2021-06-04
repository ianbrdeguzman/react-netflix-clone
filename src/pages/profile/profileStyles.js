import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProfileContent = styled.div`
    width: 80vw;
    min-height: 91vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (min-width: 600px) {
        width: 60vw;
    }
    h1 {
        font-size: 30px;
        font-weight: normal;
        @media (min-width: 900px) {
            font-size: 60px;
        }
    }
    button {
        margin: 4rem;
        color: grey;
        border: 1px solid grey;
        padding: 0.5rem 1rem;
        text-transform: uppercase;
        background-color: transparent;
        border-radius: unset;
        font-size: 13px;
        @media (min-width: 900px) {
            font-size: 1.2vw;
        }
    }
`;

export const ProfileInfo = styled.div`
    &:hover {
        p {
            color: #ffffff;
        }
        div {
            img {
                border: 3px solid #ffffff;
            }
        }
    }
    p {
        color: grey;
        font-size: 12px;
        @media (min-width: 900px) {
            font-size: 1.3vw;
        }
    }
`;

export const ImageContainer = styled.div`
    width: 84px;
    height: 84px;
    margin: 1rem;
    border-radius: 0.2rem;
    overflow: hidden;
    @media (min-width: 900px) {
        width: 10vw;
        height: 10vw;
        margin: 1rem 2rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
