import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
    Header,
    Logo,
    Navbar,
    Form,
    Avatar,
    DropDown,
} from './browseHeaderStyles';
import { auth } from '../../helpers/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../redux/slices/userLoginSlice';
import { AiOutlineSearch } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import {
    searchVideosFail,
    searchVideosRequest,
    searchVideosSuccess,
} from '../../redux/slices/searchVideosSlice';
import axios from '../../helpers/axios';

const BrowseHeader = ({ profile }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [show, setShow] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const { user } = useSelector((state) => state.userLogin);

    const { register, handleSubmit } = useForm();

    const showBackground = () => {
        if (window.scrollY > 1) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const showNavbar = () => {
        if (window.innerWidth < 600) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    };

    const handleSignOutOnClick = () => {
        auth.signOut();
        dispatch(signout());
    };

    const handleSubmitOnClick = async ({ search }) => {
        dispatch(searchVideosRequest());
        try {
            const {
                data: { results },
            } = await axios.get(
                `/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
            );
            const movies = results.filter(
                (movie) => movie.media_type === 'movie'
            );
            dispatch(searchVideosSuccess(movies));
            // history.push(`/search?q=${search}`);
        } catch (error) {
            dispatch(searchVideosFail(error.message));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', showBackground);
        window.addEventListener('resize', showNavbar);
        return () => {
            window.removeEventListener('scroll', showBackground);
            window.removeEventListener('resize', showNavbar);
        };
    }, []);

    return profile ? (
        <Header show={show} onMouseLeave={() => setShowDropDown(false)}>
            <Logo to='/browse'>
                <img src='/images/netflix-logo.png' alt='logo' />
            </Logo>
        </Header>
    ) : (
        <Header show={show} onMouseLeave={() => setShowDropDown(false)}>
            <Logo to='/browse'>
                <img src='/images/netflix-logo.png' alt='logo' />
            </Logo>
            {showNav && (
                <Navbar>
                    <ul>
                        <li>
                            <Link to='/browse/my-list'>My List</Link>
                        </li>
                    </ul>
                </Navbar>
            )}
            <Form onSubmit={handleSubmit(handleSubmitOnClick)}>
                <button type='submit'>
                    <AiOutlineSearch />
                </button>
                <input
                    type='text'
                    placeholder='Title, people, genre'
                    {...register('search', {
                        required: true,
                    })}
                />
            </Form>
            <Avatar onMouseOver={() => setShowDropDown(true)}>
                <img src='/images/profile.png' alt='profile' />
            </Avatar>
            {showDropDown && (
                <DropDown>
                    <ul>
                        <li onClick={() => history.push('/profile')}>
                            <img src='/images/profile.png' alt='avatar' />
                            <span>{JSON.parse(user).displayName}</span>
                        </li>
                        <li onClick={() => history.push('/profile')}>
                            Manage Profile
                        </li>
                        <li>Account</li>
                        <li>Help Center</li>
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
