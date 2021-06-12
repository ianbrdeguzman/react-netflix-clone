import React from 'react';
import { CardStyle, LoadContainer, Remove } from './cardStyles';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { db } from '../../helpers/firebase';
import firebase from '../../helpers/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
    removeFromMyListFail,
    removeFromMyListRequest,
    removeFromMyListSuccess,
} from '../../redux/slices/myListSlice';
import Loader from '../loader/Loader';
import { ImSpinner2 } from 'react-icons/im';

const Card = ({ video, id, poster_path, backdrop_path, isLarge, myList }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userLogin);
    const { loading } = useSelector((state) => state.myList);

    const [show, setShow] = useState(false);

    const handleOnClick = () => {
        if (isLarge || myList) {
            history.push(`/title/${id}/tv`);
        } else {
            history.push(`/title/${id}/movie`);
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

    return (
        <CardStyle
            isLarge
            myList
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
            {loading && myList ? (
                <LoadContainer>
                    <Loader myList>
                        <ImSpinner2 />
                    </Loader>
                </LoadContainer>
            ) : (
                myList && show && <Remove onClick={handleRemoveOnClick} />
            )}
        </CardStyle>
    );
};

export default Card;
