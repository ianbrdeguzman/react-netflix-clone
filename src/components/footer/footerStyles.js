import styled from 'styled-components';

export const StyledFooter = styled.footer`
    color: #757575;
    background-color: ${(props) =>
        props.signin
            ? 'rgba(0,0,0,0.7)'
            : props.browse
            ? '#141414'
            : 'transparent'};
`;

export const FooterContent = styled.div`
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;
    padding: 50px 0 0 0;
    padding: 1rem 1rem 30px 1rem;
    h3 {
        font-weight: normal;
        font-size: 1rem;
        margin-bottom: 30px;
    }
    p {
        font-size: 13px;
    }
`;

export const LinksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1rem;

    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
    }
    a {
        text-decoration: none;
        font-size: 13px;
        margin-bottom: 1rem;
        &:hover {
            text-decoration: underline;
        }
    }
`;
