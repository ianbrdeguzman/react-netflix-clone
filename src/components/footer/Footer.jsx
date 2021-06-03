import React from 'react';
import { data } from './footerData';
import { StyledFooter, FooterContent, LinksContainer } from './footerStyles';

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
