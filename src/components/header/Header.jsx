import React from 'react';
import { StyledHeader, Logo, Button } from './headerStyles';
import { Link } from 'react-router-dom';

const Header = ({ login }) => {
    const handleSignInOnClick = () => {
        console.log('Sign in...');
    };

    return (
        <StyledHeader>
            <Logo to='/'>
                <img src='./images/netflix-logo.png' alt='logo' />
            </Logo>
            {!login && (
                <Link to='/login'>
                    <Button onClick={handleSignInOnClick}>Sign In</Button>
                </Link>
            )}
        </StyledHeader>
    );
};

export default Header;
