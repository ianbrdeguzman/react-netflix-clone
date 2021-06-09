import styled from 'styled-components';

export const CardStyle = styled.div`
    min-width: 160px;
    min-height: ${(props) => (props.isLarge ? 'auto' : '90px')};
    border-radius: 0.5rem;
    overflow: hidden;
    margin-right: 0.4rem;
    transition: transform 0.5s ease;
    &:hover {
        transform: scale(1.08);
        z-index: 1;
        cursor: pointer;
    }

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
    }
`;
