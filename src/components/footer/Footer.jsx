import React from 'react';
import styled from 'styled-components';
import { data } from './footerData';

const StyledFooter = styled.footer`
    color: #757575;
`;

const FooterContent = styled.div`
    width: 90vw;
    max-width: 1000px;
    margin: 50px auto 0 auto;
    padding: 0 1rem 30px 1rem;
    h3 {
        font-weight: normal;
        font-size: 1rem;
        margin-bottom: 30px;
    }
    p {
        font-size: 13px;
    }
`;

const LinksContainer = styled.div`
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
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContent>
                <h3>
                    Questions? Call{' '}
                    <a href='tel:1-844-542-4813'>1-844-542-4813</a>
                </h3>
                <LinksContainer>
                    {data.map((item, i) => {
                        return (
                            <a key={i} href='/'>
                                {item}
                            </a>
                        );
                    })}
                </LinksContainer>
                <p>Netflix</p>
            </FooterContent>
        </StyledFooter>
    );
};

export default Footer;
