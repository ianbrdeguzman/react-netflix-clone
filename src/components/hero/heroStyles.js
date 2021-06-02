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
    & > div {
        width: 90%;
        max-width: 950px;
        text-align: center;
        & p {
            padding: 1rem 0;
            font-weight: 600;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 900px) {
        flex-direction: row;
    }
    & div {
        position: relative;
        & input {
            width: 90vw;
            max-width: 500px;
            font-size: 14px;
            padding: 10px;
            outline: none;
            border: 1px solid transparent;
            @media (min-width: 600px) {
                font-size: 1rem;
                width: 450px;
            }
            @media (min-width: 900px) {
                height: 52px;
            }
        }
        & > span {
            font-size: 15px;
            color: #ff9210;
            margin-top: 0.5rem;
            text-align: left;
            display: block;
            @media (min-width: 900px) {
                position: absolute;
                top: 100%;
                left: 0;
            }
        }
    }
`;

export const Button = styled.button`
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        margin-top: 0.2rem;
        margin-left: 0.4rem;
    }
    @media (min-width: 900px) {
        font-size: 26px;
        border-radius: 0.1rem;
    }
`;
