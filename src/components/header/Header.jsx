import React from 'react';
import { StyledHeader, Logo, Button } from './headerStyles';

const Header = () => {
    const handleSignInOnClick = () => {
        console.log('Sign in...');
    };

    return (
        <StyledHeader>
            <Logo>
                <img src='./netflix-logo.png' alt='logo' />
            </Logo>
            <Button onClick={handleSignInOnClick}>Sign In</Button>
        </StyledHeader>
    );
};

export default Header;
