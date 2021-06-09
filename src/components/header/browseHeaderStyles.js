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
    z-index: 100;
    background-color: ${(props) => props.show === true && 'black'};
    transition: background-color 1s ease;
    @media (min-width: 900px) {
        height: 68px;
        padding: 0 4rem;
        font-size: 25px;
    }
`;

export const Logo = styled(Link)`
    width: 84px;
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

export const DropDown = styled.div`
    font-size: 14px;
    min-width: 160px;
    padding: 0 0.5rem;
    background-color: #000000;
    position: absolute;
    top: 41px;
    right: 2rem;
    border-top: 3px solid #ffffff;

    &::after {
        content: '';
        width: 0;
        height: 0;
        border-left: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-bottom: 1rem solid white;
        position: absolute;
        top: -1rem;
        right: 0rem;
    }

    @media (min-width: 900px) {
        top: 68px;
        right: 4rem;
    }
    ul {
        list-style: none;
        li {
            padding: 0.5rem 0;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
        li:first-child {
            border-bottom: 1px solid #ffffff;
        }
    }
`;
