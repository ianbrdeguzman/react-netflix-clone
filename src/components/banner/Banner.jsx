import React, { useState, useEffect } from 'react';
import { BiPlay } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import {
    BannerContainer,
    BannerContent,
    BannerTitle,
    BannerOverview,
    BannerButtons,
    PlayButton,
    AddToListButton,
} from './bannerStyles';
import { truncate } from '../../helpers/utils';
import axios from '../../helpers/axios';
import request from '../../helpers/request';
import dotenv from 'dotenv';
import { useHistory } from 'react-router-dom';
import { db } from '../../helpers/firebase';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
    addToMyListFail,
    addToMyListRequest,
    addToMyListSuccess,
} from '../../redux/slices/myListSlice';
import firebase from '../../helpers/firebase';
import Loader from '../loader/Loader';
import { ImSpinner2 } from 'react-icons/im';

dotenv.config();

const Banner = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.userLogin);
    const { loading, myList } = useSelector((state) => state.myList);

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            const { data } = await axios.get(request.fetchNetflixOriginalTv);
            if (isMounted && data.results) {
                setMovie(
                    data.results[
                        Math.floor(Math.random() * data.results.length - 1) + 1
                    ]
                );
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);

    const isAdded = myList && myList.find((item) => item.id === movie?.id);

    const handlePlayOnClick = () => {
        history.push(`/title/${movie.id}/tv`);
    };

    const handleAddToMyListOnClick = async () => {
        dispatch(addToMyListRequest());
        try {
            await db
                .collection('users')
                .doc(JSON.parse(user).uid)
                .update({
                    myList: firebase.firestore.FieldValue.arrayUnion(movie),
                });
            const response = await db
                .collection('users')
                .doc(JSON.parse(user).uid)
                .get();
            dispatch(addToMyListSuccess(response.data().myList));
        } catch (error) {
            console.log(error);
            dispatch(addToMyListFail(error.message));
        }
    };

    return (
        <BannerContainer image={movie?.backdrop_path}>
            <BannerContent>
                <BannerTitle>
                    {movie?.name || movie?.title || movie?.original_name}
                </BannerTitle>
                <BannerOverview>
                    <p>{truncate(movie?.overview, 150)}</p>
                </BannerOverview>
                <BannerButtons>
                    <PlayButton onClick={handlePlayOnClick}>
                        <BiPlay />
                        Play
                    </PlayButton>
                    {loading ? (
                        <AddToListButton>
                            <Loader>
                                <ImSpinner2 />
                            </Loader>
                        </AddToListButton>
                    ) : isAdded ? (
                        <AddToListButton
                            onClick={() => history.push('/browse/my-list')}
                        >
                            My List
                        </AddToListButton>
                    ) : (
                        <AddToListButton onClick={handleAddToMyListOnClick}>
                            <AiOutlinePlus />
                            <span>My List</span>
                        </AddToListButton>
                    )}
                </BannerButtons>
            </BannerContent>
        </BannerContainer>
    );
};

export default Banner;
