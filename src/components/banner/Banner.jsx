import React, { useState, useEffect } from 'react';
import { BiPlay } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {
    BannerContainer,
    BannerContent,
    BannerTitle,
    BannerOverview,
    BannerButtons,
    PlayButton,
    MoreInfoButton,
} from './bannerStyles';
import { truncate } from '../../helpers/utils';
import axios from '../../helpers/axios';
import request from '../../helpers/request';
import dotenv from 'dotenv';

dotenv.config();

const Banner = ({ id }) => {
    const [movie, setMovie] = useState([]);

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            const { data } = await axios.get(
                id ? url : request.fetchNetflixOriginalTv
            );
            if (isMounted && data.results && !id) {
                setMovie(
                    data.results[
                        Math.floor(Math.random() * data.results.length - 1)
                    ]
                );
            } else {
                setMovie(data);
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, [id, url]);

    console.log(movie);

    return (
        <BannerContainer image={movie?.backdrop_path}>
            <BannerContent>
                <BannerTitle>
                    {movie?.name || movie?.title || movie?.original_name}
                </BannerTitle>
                <BannerOverview>
                    {id && (
                        <p>
                            {movie?.release_date &&
                                movie?.release_date.substring(0, 4)}
                            <span>{movie?.runtime}m</span>
                        </p>
                    )}
                    <p>{truncate(movie?.overview, 150)}</p>
                </BannerOverview>
                <BannerButtons>
                    <PlayButton>
                        <BiPlay />
                        Play
                    </PlayButton>
                    {!id && (
                        <MoreInfoButton>
                            <AiOutlineInfoCircle />
                            More Info
                        </MoreInfoButton>
                    )}
                </BannerButtons>
            </BannerContent>
        </BannerContainer>
    );
};

export default Banner;
