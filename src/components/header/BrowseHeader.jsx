import React from 'react';
import { Header, Nav, Logo, Navbar, ProfileButton } from './browseHeaderStyles';

const BrowseHeader = () => {
    return (
        <Header>
            <Nav>
                <Logo>
                    <img src='/images/netflix-logo.png' alt='logo' />
                </Logo>
                <Navbar>
                    <li>TV Shows</li>
                    <li>Movies</li>
                </Navbar>
            </Nav>
            <ProfileButton>
                <img src='/images/profile.png' alt='profile' />
            </ProfileButton>
        </Header>
    );
};

export default BrowseHeader;
