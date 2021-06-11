import styled from 'styled-components';

export const VideoDetailContainer = styled.div`
    padding: 1rem;
    color: #999999;
    @media (min-width: 600px) {
        padding: 2rem;
    }
    @media (min-width: 900px) {
        padding: 2rem 4rem;
    }
`;

export const VideoDetailContent = styled.div`
    h4 {
        margin: 1rem 0 0rem 0;
        font-weight: normal;
    }
    ul {
        max-height: 250px;
        list-style: none;
        display: flex;
        flex-flow: column wrap;
        @media (min-width: 600px) {
            max-height: 150px;
        }
        @media (min-width: 1440px) {
            max-height: 115px;
        }
        li {
            color: #cccccc;
        }
    }
`;
