import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import { RowContainer, RowContent, CardContainer } from './rowStyles';
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
                        .filter(
                            (movie) => movie.poster_path && movie.backdrop_path
                        )
                        .map((movie) => {
                            return (
                                <Card
                                    key={movie.id}
                                    {...movie}
                                    isLarge={isLarge}
                                />
                            );
                        })}
                </CardContainer>
            </RowContent>
        </RowContainer>
    );
};

export default Row;
