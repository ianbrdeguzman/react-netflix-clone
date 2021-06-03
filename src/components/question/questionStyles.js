import styled from 'styled-components';

export const QuestionContent = styled.div`
    font-size: 18px;
    text-align: left;
    width: 100vw;
    @media (min-width: 600px) {
        font-size: 20px;
        max-width: 80%;
        margin: 0 auto;
    }
    @media (min-width: 900px) {
        font-size: 26px;
        min-width: 650px;
        max-width: 650px;
    }
    @media (min-width: 1024px) {
        min-width: 815px;
        max-width: 815px;
    }
`;

export const QuestionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #303030;
    margin-bottom: 1px;
    margin-top: 0.5rem;
    width: 100%;
    cursor: pointer;
    @media (min-width: 900px) {
        padding: 1.5rem;
    }
    h2 {
        font-size: 18px;
        font-weight: normal;
        @media (min-width: 600px) {
            font-size: 20px;
        }
        @media (min-width: 900px) {
            font-size: 26px;
        }
    }
`;

export const QuestionAnswer = styled.main`
    background-color: #303030;
    padding: 1rem;
    p:last-child {
        margin-top: 1rem;
    }
    @media (min-width: 900px) {
        padding: 1.5rem;
    }
`;
