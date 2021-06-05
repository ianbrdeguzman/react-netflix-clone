import styled from 'styled-components';

export const StyledSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(255, 255, 255, 0.1),
            rgba(0, 0, 0, 0.9)
        ),
        url('/images/browse-hero.webp');
    background-repeat: no-repeat;
    background-size: 100% auto;
`;

export const BrowseContent = styled.div`
    width: 90vw;
    overflow-x: hidden;
    @media (min-width: 900px) {
        width: 95vw;
    }
`;

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

export const HeroContainer = styled.div`
    min-height: calc(100vh - 41px);

    @media (min-width: 900px) {
        min-height: calc(100vh - 68px);
    }
`;

export const HeroImage = styled.div`
    width: 30vw;
`;

export const HeroDescription = styled.p`
    width: 30vw;
    font-size: 2vw;
`;

export const HeroButtons = styled.div`
    display: flex;
    button {
        margin: 1rem 0.5rem 0 0;
        padding: 0.2rem 1rem;
        color: #000000;
        background-color: #ffffff;
        border-radius: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 3vw;
        cursor: pointer;

        &:hover {
            background-color: #c1c0c0;
        }
        @media (min-width: 900px) {
            font-size: 1.5vw;
            padding: 0.5rem 1rem;
            margin: 1rem 1rem 0 0;
        }
        svg {
            margin-right: 0.5rem;
        }
    }
    button:last-child {
        color: #ffffff;
        background-color: rgba(128, 128, 128, 0.9);
    }
`;
