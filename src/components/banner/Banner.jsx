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

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            const { data } = await axios.get(request.fetchNetflixOriginalTv);
            if (isMounted && data.results) {
                setMovie(
                    data.results[
                        Math.floor(Math.random() * data.results.length - 1)
                    ]
                );
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);

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
                    <PlayButton>
                        <BiPlay />
                        Play
                    </PlayButton>
                    <MoreInfoButton>
                        <AiOutlineInfoCircle />
                        More Info
                    </MoreInfoButton>
                </BannerButtons>
            </BannerContent>
        </BannerContainer>
    );
};

export default Banner;
