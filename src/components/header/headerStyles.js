import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 90%;
    margin: 1.8rem auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    width: 24vw;
    min-width: 90px;
    max-width: 167px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const Button = styled.button`
    padding: 0.5rem;
    @media (min-width: 600px) {
        padding: 0.5rem 1rem;
    }
`;
