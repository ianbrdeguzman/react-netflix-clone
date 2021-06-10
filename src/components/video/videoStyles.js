import styled from 'styled-components';

export const VideoContainer = styled.div`
    height: 300px;

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
