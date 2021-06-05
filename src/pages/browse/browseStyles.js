import styled from 'styled-components';

export const StyledSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(255, 255, 255, 0.1),
            rgba(0, 0, 0, 0.9)
        ),
        url('/images/browse-hero.webp');
    background-repeat: no-repeat;
    background-size: 100% auto;
`;

export const BrowseContent = styled.div`
    width: 90vw;
    overflow-x: hidden;
    @media (min-width: 900px) {
        width: 95vw;
    }
`;
