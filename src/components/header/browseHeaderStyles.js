import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    width: 100%;
    height: 41px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${(props) => props.show === true && 'black'};
    transition: background-color 1s ease;
    @media (min-width: 900px) {
        height: 68px;
        padding: 0 4rem;
        font-size: 25px;
    }
`;

export const Logo = styled(Link)`
    width: 56px;
    height: 5vw;
    max-height: 31px;

    @media (min-width: 600px) {
        width: 63px;
    }
    @media (min-width: 900px) {
        width: 92px;
        margin-right: 1rem;
    }
`;

export const Avatar = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 0.2rem;
    overflow: hidden;
`;
