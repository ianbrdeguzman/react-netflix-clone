import React, { useEffect, useState } from 'react';
import { Header, Logo, Avatar } from './browseHeaderStyles';

const BrowseHeader = () => {
    const [show, setShow] = useState(false);

    const showBackground = () => {
        if (window.scrollY > 1) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', showBackground);
        return () => {
            window.removeEventListener('scroll', showBackground);
        };
    }, []);

    return (
        <Header show={show}>
            <Logo to='/browse'>
                <img src='/images/netflix-logo.png' alt='logo' />
            </Logo>
            <Avatar>
                <img src='/images/profile.png' alt='profile' />
            </Avatar>
        </Header>
    );
};

export default BrowseHeader;
