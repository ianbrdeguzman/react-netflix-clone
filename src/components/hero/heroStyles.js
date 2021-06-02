import styled from 'styled-components';

export const HeroSection = styled.section`
    background: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.3), rgb(0, 0, 0)),
        url('./images/hero.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    min-height: 490px;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;

    @media (min-width: 600px) {
        min-height: 760px;
        font-size: 20px;
    }
    @media (min-width: 600px) {
        font-size: 26px;
    }
`;

export const HeroContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & div {
        width: 90%;
        max-width: 950px;
        text-align: center;

        & p:nth-child(2) {
            padding: 1rem 0;
        }

        @media (min-width: 600px) {
            padding: 0 2rem;
            & p:nth-child(3) {
                font-size: 1.2rem;
            }
        }
        @media (min-width: 900px) {
            padding: 0 4rem;
        }
        & h1 {
            font-size: 28px;

            @media (min-width: 600px) {
                font-size: 50px;
            }
            @media (min-width: 900px) {
                font-size: 64px;
            }
        }
    }
`;
