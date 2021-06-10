import styled from 'styled-components';

export const RelatedVideosSection = styled.section`
    padding: 1rem;
    @media (min-width: 600px) {
        padding: 2rem;
    }
    @media (min-width: 900px) {
        padding: 2rem 4rem;
    }
    h2 {
        font-size: 12px;
        margin-bottom: 1rem;
        @media (min-width: 600px) {
            font-size: 1vw;
        }
    }
`;

export const RelatedVideosContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 0;

    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 4rem 0;
    }
    @media (min-width: 1440px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;
