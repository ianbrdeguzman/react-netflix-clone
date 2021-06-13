import React from 'react';
import { Add, CardStyle, LoadContainer, Remove } from './cardStyles';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { db } from '../../helpers/firebase';
import firebase from '../../helpers/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToMyListFail,
    addToMyListRequest,
    addToMyListSuccess,
    removeFromMyListFail,
    removeFromMyListRequest,
    removeFromMyListSuccess,
} from '../../redux/slices/myListSlice';
import Loader from '../loader/Loader';
import { ImSpinner2 } from 'react-icons/im';

const Card = ({ video, id, poster_path, backdrop_path, isLarge, inMyList }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userLogin);
    const { myList, loading: loadingRemove } = useSelector(
        (state) => state.myList
    );
    const { loading: loadingAdd } = useSelector((state) => state.myList);

    const [show, setShow] = useState(false);

    const isAdded = myList && myList.find((item) => item.id === video?.id);

    const handleOnClick = () => {
        if (video.media_type === 'movie') {
            history.push(`/title/${id}/movie`);
        } else {
            history.push(`/title/${id}/tv`);
        }
    };

    const handleRemoveOnClick = async () => {
        dispatch(removeFromMyListRequest());
        try {
            await db
                .collection('users')
                .doc(JSON.parse(user).uid)
                .update({
                    myList: firebase.firestore.FieldValue.arrayRemove(video),
                });
            const response = await db
                .collection('users')
                .doc(JSON.parse(user).uid)
                .get();
            dispatch(removeFromMyListSuccess(response.data().myList));
        } catch (error) {
            dispatch(removeFromMyListFail(error.message));
        }
    };

    const handleAddToMyListOnClick = async () => {
        console.log(video);
        dispatch(addToMyListRequest());
        try {
            await db
                .collection('users')
                .doc(JSON.parse(user).uid)
                .update({
                    myList: firebase.firestore.FieldValue.arrayUnion(video),
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
        <CardStyle
            isLarge
            inMyList
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <img
                onClick={handleOnClick}
                key={id}
                src={`http://image.tmdb.org/t/p/w300${
                    isLarge ? poster_path : backdrop_path
                }`}
                alt='poster'
            ></img>
            {loadingRemove && inMyList ? (
                <LoadContainer>
                    <Loader>
                        <ImSpinner2 />
                    </Loader>
                </LoadContainer>
            ) : (
                inMyList && show && <Remove onClick={handleRemoveOnClick} />
            )}
            {loadingAdd && !inMyList ? (
                <LoadContainer>
                    <Loader>
                        <ImSpinner2 />
                    </Loader>
                </LoadContainer>
            ) : show && !inMyList && !isAdded ? (
                <Add onClick={handleAddToMyListOnClick} />
            ) : (
                show &&
                !inMyList &&
                isAdded && <Remove onClick={handleRemoveOnClick} />
            )}
        </CardStyle>
    );
};

export default Card;
