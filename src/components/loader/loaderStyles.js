import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    animation: ${rotate} 1s linear infinite;
`;
