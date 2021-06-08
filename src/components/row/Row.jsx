import React, { useState, useEffect } from 'react';
import { RowContainer, RowContent, CardContainer, Card } from './rowStyles';
import axios from '../../helpers/axios';

const Row = ({ title, url, isLarge }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {
                data: { results },
            } = await axios.get(url);
            setMovies(results);
        };
        fetchData();
    }, [url]);
    return (
        <RowContainer>
            <RowContent>
                <h2>{title}</h2>
                <CardContainer>
                    {movies
                        .filter((movie) => movie.poster_path)
                        .map(({ id, poster_path, backdrop_path }) => {
                            return (
                                <Card isLarge={isLarge} key={id}>
                                    <img
                                        key={id}
                                        src={`http://image.tmdb.org/t/p/w300${
                                            isLarge
                                                ? poster_path
                                                : backdrop_path
                                        }`}
                                        alt='poster'
                                    ></img>
                                </Card>
                            );
                        })}
                </CardContainer>
            </RowContent>
        </RowContainer>
    );
};

export default Row;
