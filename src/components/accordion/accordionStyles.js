import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
`;

export const AccordionContainer = styled.div`
    text-align: center;
    & > h2 {
        font-size: 26px;
        margin-bottom: 1rem;
        @media (min-width: 600px) {
            font-size: 40px;
            margin-bottom: 2rem;
        }
        @media (min-width: 900px) {
            font-size: 50px;
        }
    }
    & div:last-child {
        margin-bottom: 2rem;
    }
`;
