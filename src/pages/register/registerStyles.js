import styled, { keyframes } from 'styled-components';

export const StyledSection = styled.section`
    min-height: 100vh;

    @media (min-width: 600px) {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url('./images/hero.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
`;

export const RegisterContainer = styled.div`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    margin-bottom: 8rem;
    display: flex;
    align-items: center;
    h1 {
        margin: 1rem 0;
        font-size: 2rem;
    }
`;

export const Form = styled.form`
    background: rgba(0, 0, 0, 0.7);

    @media (min-width: 600px) {
        padding: 60px;
    }
    input {
        width: 100%;
        height: 50px;
        padding: 1rem;
        border: none;
        border-radius: 0.2rem;
        margin-top: 1rem;
        background: #323232;
        font-size: 14px;
        color: #ffffff;
        &:focus {
            outline: none;
        }
        @media (min-width: 600px) {
            font-size: 1rem;
        }
    }
    button {
        width: 100%;
        height: 50px;
        margin: 2rem 0;
    }
    p {
        font-size: 16px;
        margin: 1rem 0;
        color: #757575;
        a {
            color: #ffffff;
        }
    }
    p:nth-child(2) {
        color: #ffffff;
        font-size: 14px;
        margin-bottom: 0;
    }
    p:last-child {
        font-size: 13px;
        span {
            color: #0071eb;
        }
    }
    span {
        font-size: 13px;
        color: #ff9210;
    }
`;

export const Border = styled.div`
    @media (max-width: 600px) {
        border-bottom: 1px solid gray;
    }
`;

export const Error = styled.p`
    background-color: #e87c03;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    a {
        text-decoration: underline;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    display: flex;
    justify-content: center;
    animation: ${rotate} 1s linear infinite;
`;
