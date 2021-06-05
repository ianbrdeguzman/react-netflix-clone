import styled from 'styled-components';

export const Header = styled.header`
    height: 41px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 900px) {
        height: 68px;
        font-size: 25px;
    }
`;

export const Nav = styled.nav`
    display: flex;
`;

export const ProfileButton = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 0.2rem;
    overflow: hidden;
`;

export const Logo = styled.div`
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

export const Navbar = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: #e5e5e5;
    li {
        font-size: 12px;
        margin-left: 0.5rem;
    }
    @media (min-width: 900px) {
        li {
            font-size: 14px;
        }
    }
`;
