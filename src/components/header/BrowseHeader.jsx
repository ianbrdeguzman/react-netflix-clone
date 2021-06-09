import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Logo, Avatar, DropDown } from './browseHeaderStyles';
import { auth } from '../../helpers/firebase';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/slices/userLoginSlice';

const BrowseHeader = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    const showBackground = () => {
        if (window.scrollY > 1) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const handleOnMouseOver = () => {
        setShowDropDown(true);
    };

    const handleOnMouseLeave = () => {
        setShowDropDown(false);
    };

    const handleSignOut = () => {
        auth.signOut();
        dispatch(signout());
    };

    useEffect(() => {
        window.addEventListener('scroll', showBackground);
        return () => {
            window.removeEventListener('scroll', showBackground);
        };
    }, []);

    return (
        <Header show={show} onMouseLeave={handleOnMouseLeave}>
            <Logo to='/browse'>
                <img src='/images/netflix-logo.png' alt='logo' />
            </Logo>
            <Avatar onMouseOver={handleOnMouseOver}>
                <img src='/images/profile.png' alt='profile' />
            </Avatar>
            {showDropDown && (
                <DropDown>
                    <ul>
                        <li>
                            <Link to='/profile'>Profiles</Link>
                        </li>
                        <li onClick={handleSignOut}>Sign out of Netflix</li>
                    </ul>
                </DropDown>
            )}
        </Header>
    );
};

export default BrowseHeader;
