import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Header, Logo, Navbar, Avatar, DropDown } from './browseHeaderStyles';
import { auth } from '../../helpers/firebase';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/slices/userLoginSlice';

const BrowseHeader = ({ profile }) => {
    const dispatch = useDispatch();
    const history = useHistory();
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

    const handleSignOutOnClick = () => {
        auth.signOut();
        dispatch(signout());
    };

    const handleProfileOnClick = () => {
        history.push('/profile');
    };

    useEffect(() => {
        window.addEventListener('scroll', showBackground);
        return () => {
            window.removeEventListener('scroll', showBackground);
        };
    }, []);

    return profile ? (
        <Header show={show} onMouseLeave={handleOnMouseLeave}>
            <Logo to='/browse'>
                <img src='/images/netflix-logo.png' alt='logo' />
            </Logo>
        </Header>
    ) : (
        <Header show={show} onMouseLeave={handleOnMouseLeave}>
            <Logo to='/browse'>
                <img src='/images/netflix-logo.png' alt='logo' />
            </Logo>
            <Navbar>
                <ul>
                    <li>
                        <Link to='/browse/my-list'>My List</Link>
                    </li>
                </ul>
            </Navbar>
            <Avatar onMouseOver={handleOnMouseOver}>
                <img src='/images/profile.png' alt='profile' />
            </Avatar>
            {showDropDown && (
                <DropDown>
                    <ul>
                        <li onClick={handleProfileOnClick}>Profiles</li>
                        <li onClick={handleSignOutOnClick}>
                            Sign out of Netflix
                        </li>
                    </ul>
                </DropDown>
            )}
        </Header>
    );
};

export default BrowseHeader;
