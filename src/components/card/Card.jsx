import React from 'react';
import { CardStyle } from './cardStyles';

const Card = ({ id, poster_path, backdrop_path, isLarge }) => {
    return (
        <CardStyle isLarge={isLarge}>
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
