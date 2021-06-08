import styled from 'styled-components';

export const RowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -10vw;
`;

export const RowContent = styled.div`
    width: 100vw;
    padding: 0 2rem;
    font-size: 12px;
    color: #e5e5e5;
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
        font-size: 1vw;
    }
    @media (min-width: 900px) {
        padding: 0 4rem;
    }
`;

export const CardContainer = styled.div`
    margin: 0 0 1rem 0;
    display: flex;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Card = styled.div`
    min-width: 45vw;
    max-height: ${(props) => (props.isLarge ? 'auto' : '140px')};
    border-radius: 0.5rem;
    overflow: hidden;
    margin-right: 0.4rem;

    @media (min-width: 600px) {
        min-width: 30vw;
    }
    @media (min-width: 900px) {
        min-width: 20vw;
    }
    @media (min-width: 1440px) {
        min-width: 15vw;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
        &:hover {
            transform: scale(1.1);
        }
    }
`;
