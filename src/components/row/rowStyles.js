import styled from 'styled-components';

export const RowContainer = styled.div`
    color: #e5e5e5;
    margin-bottom: 1rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (min-width: 900px) {
        padding: 0 4rem;
    }
    h2 {
        font-size: 12px;
        margin-bottom: 1rem;
        @media (min-width: 900px) {
            font-size: 1.4vw;
        }
    }
`;

export const RowContent = styled.div`
    width: 100vw;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const CardContainer = styled.div`
    margin: 0 0 1rem 0;
    display: flex;
`;
