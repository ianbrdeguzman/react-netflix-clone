import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 1.8rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    width: 90px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const Button = styled.button`
    padding: 0.4rem 0.5rem;
    @media (min-width: 600px) {
        padding: 0.5rem 1rem;
    }
`;
