import styled from 'styled-components';
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai';

export const CardStyle = styled.div`
    min-width: 160px;
    min-height: ${(props) => (props.isLarge ? 'auto' : '90px')};
    overflow: hidden;
    border-radius: 0.2rem;
    margin-right: 0.2rem;
    position: relative;

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
            transform: scale(1.05);
            z-index: 1;
            cursor: pointer;
        }
    }
`;

export const LoadContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Remove = styled(AiOutlineCloseCircle)`
    font-size: 24px;
    color: #e5e5e5;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1;
    cursor: pointer;
    &:hover {
        filter: brightness(1.5);
    }
`;

export const Add = styled(AiOutlinePlusCircle)`
    font-size: 24px;
    color: #e5e5e5;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1;
    cursor: pointer;
    &:hover {
        filter: brightness(1.5);
    }
`;
