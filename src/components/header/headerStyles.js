import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 1.5rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 600px) {
        padding: 1.5rem 3rem;
    }
    @media (min-width: 900px) {
        padding: 2rem 4rem;
    }
`;

export const Logo = styled.div`
    width: 90px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (min-width: 600px) {
        width: 110px;
    }
    @media (min-width: 900px) {
        width: 134px;
    }
    @media (min-width: 1280px) {
        width: 167px;
    }
`;

export const Button = styled.button`
    padding: 0.4rem 0.5rem;
    @media (min-width: 600px) {
        padding: 0.5rem 1rem;
    }
`;
