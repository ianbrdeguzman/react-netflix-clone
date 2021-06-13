import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import { RowContainer, RowContent, CardContainer } from './rowStyles';
import axios from '../../helpers/axios';

const Row = ({ title, url, isLarge }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            const {
                data: { results },
            } = await axios.get(url);
            if (isMounted) {
                setVideos(results);
            }
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, [url]);

    return (
        <RowContainer>
            <h2>{title}</h2>
            <RowContent>
                <CardContainer>
                    {videos
                        .filter(
                            (video) => video.poster_path && video.backdrop_path
                        )
                        .map((video) => {
                            return (
                                <Card
                                    key={video.id}
                                    {...video}
                                    isLarge={isLarge}
                                    video={video}
                                />
                            );
                        })}
                </CardContainer>
            </RowContent>
        </RowContainer>
    );
};

export default Row;
