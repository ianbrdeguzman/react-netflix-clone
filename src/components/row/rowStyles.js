import styled from 'styled-components';

export const RowContainer = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RowContent = styled.div`
    width: 100vw;
    padding: 0 2rem;
    color: #e5e5e5;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 900px) {
        padding: 0 4rem;
    }
    h2 {
        font-size: 12px;
        margin-bottom: 1rem;
        @media (min-width: 600px) {
            font-size: 1vw;
        }
    }
`;

export const CardContainer = styled.div`
    margin: 0 0 1rem 0;
    display: flex;
`;
