import React from 'react';
import { CardStyle } from './cardStyles';
import { useHistory } from 'react-router-dom';

const Card = ({ id, poster_path, backdrop_path, isLarge }) => {
    const history = useHistory();

    const handleOnClick = () => {
        if (isLarge) {
            console.log('tv');
        }
        history.push(`/title/${id}`);
    };

    return (
        <CardStyle isLarge={isLarge} onClick={handleOnClick}>
            <img
                key={id}
                src={`http://image.tmdb.org/t/p/w300${
                    isLarge ? poster_path : backdrop_path
                }`}
                alt='poster'
            ></img>
        </CardStyle>
    );
};

export default Card;
