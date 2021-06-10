import React, { useEffect } from 'react';
import { TitleSection } from './titleStyles';
import BrowseHeader from '../../components/header/BrowseHeader';
import Video from '../../components/video/Video';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
    youtubeIdFail,
    youtubeIdRequest,
    youtubeIdSuccess,
} from '../../redux/slices/youtubeIdSlice';
import axios from '../../helpers/axios';
import dotenv from 'dotenv';

dotenv.config();

const Title = () => {
    const { id, type } = useParams();
    const dispatch = useDispatch();

    const url =
        type === 'tv'
            ? `/tv/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            : `/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

    useEffect(() => {
        const fetchYoutubeId = async () => {
            dispatch(youtubeIdRequest());
            try {
                const {
                    data: { results },
                } = await axios.get(url);
                dispatch(youtubeIdSuccess(results[0].key));
            } catch (error) {
                dispatch(youtubeIdFail(error.message));
            }
        };
        fetchYoutubeId();
    }, [id, dispatch]);

    return (
        <TitleSection>
            <BrowseHeader />
            <Video />
        </TitleSection>
    );
};

export default Title;
