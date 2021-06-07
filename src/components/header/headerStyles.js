import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    width: 90%;
    margin: 0 auto;
    padding-top: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) =>
        props.show === true ? 'black' : 'transparent'};
`;

export const Logo = styled(Link)`
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
