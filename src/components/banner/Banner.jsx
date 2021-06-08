import React, { useState, useEffect } from 'react';
import { BiPlay } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {
    BannerContainer,
    BannerContent,
    BannerTitle,
    BannerOverview,
    BannerButtons,
} from './bannerStyles';
import { truncate } from '../../helpers/utils';
import axios from '../../helpers/axios';
import request from '../../helpers/request';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {
                data: { results },
            } = await axios.get(request.fetchNetflixOriginals);
            setMovie(results[Math.floor(Math.random() * results.length - 1)]);
        };

        fetchData();
    }, []);

    return (
        <BannerContainer image={movie?.backdrop_path}>
            <BannerContent>
                <BannerTitle>{movie?.name || movie?.original_name}</BannerTitle>
                <BannerOverview>
                    {truncate(movie?.overview, 150)}
                </BannerOverview>
                <BannerButtons>
                    <button>
                        <BiPlay />
                        Play
                    </button>
                    <button>
                        <AiOutlineInfoCircle />
                        More Info
                    </button>
                </BannerButtons>
            </BannerContent>
        </BannerContainer>
    );
};

export default Banner;
