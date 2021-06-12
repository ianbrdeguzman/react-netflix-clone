import styled from 'styled-components';

export const MyListSection = styled.section`
    min-height: 100vh;
    padding: 41px 1rem 0 1rem;
    background-color: #141414;

    @media (min-width: 600px) {
        padding: 41px 2rem 0 2rem;
    }
    @media (min-width: 900px) {
        padding: 68px 4rem 0 4rem;
    }
    h2 {
        margin-bottom: 1rem;
        padding-left: 1rem;
        font-size: 14px;
        font-weight: normal;
        min-height: 41px;
        display: flex;
        align-items: center;
        @media (min-width: 600px) {
            font-size: 2.5vw;
            padding-left: 0;
            margin-bottom: 2rem;
        }
        @media (min-width: 900px) {
            min-height: 68px;
            margin-bottom: 4rem;
        }
        @media (min-width: 1440px) {
            font-size: 2vw;
        }
    }
`;

export const MyListContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 0.2rem;

    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 4rem 0.2rem;
    }
    @media (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1440px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;
