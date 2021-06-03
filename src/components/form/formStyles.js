import styled from 'styled-components';

export const FormContent = styled.div`
    p {
        font-size: 18px;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 900px) {
        flex-direction: row;
    }
    div {
        position: relative;
        input {
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
        span {
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
    span {
        margin-top: 0.2rem;
        margin-left: 0.4rem;
    }
    @media (min-width: 900px) {
        font-size: 26px;
        border-radius: 0.1rem;
    }
`;
