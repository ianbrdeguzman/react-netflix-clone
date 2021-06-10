import React, { useEffect } from 'react';
import { TitleSection } from './titleStyles';
import BrowseHeader from '../../components/header/BrowseHeader';
import Video from '../../components/video/Video';
import VideoDetail from '../../components/videodetails/VideoDetail';
import RelatedVideos from '../../components/relatedvideos/RelatedVideos';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import axios from '../../helpers/axios';
import {
    youtubeIdFail,
    youtubeIdRequest,
    youtubeIdSuccess,
} from '../../redux/slices/youtubeIdSlice';
import {
    videoDetailFail,
    videoDetailRequest,
    videoDetailSuccess,
} from '../../redux/slices/videoDetailSlice';
import {
    videoCreditRequest,
    videoCreditSuccess,
    videoCreditFail,
} from '../../redux/slices/videoCreditSlice';
import ScrollToTop from '../../components/scrolltotop/ScrollToTop';

const Title = () => {
    const { id, type } = useParams();
    const dispatch = useDispatch();

    const youtubeIdUrl =
        type === 'tv'
            ? `/tv/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            : `/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

    const videoDetailUrl =
        type === 'tv'
            ? `/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            : `/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

    const videoCreditUrl =
        type === 'tv'
            ? `/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            : `/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

    useEffect(() => {
        const fetchYoutubeId = async () => {
            dispatch(youtubeIdRequest());
            try {
                const {
                    data: { results },
                } = await axios.get(youtubeIdUrl);
                dispatch(youtubeIdSuccess(results[0].key));
            } catch (error) {
                dispatch(youtubeIdFail(error.message));
            }
        };
        fetchYoutubeId();
    }, [dispatch, youtubeIdUrl]);

    useEffect(() => {
        const fetchVideoDetail = async () => {
            dispatch(videoDetailRequest());
            try {
                const { data } = await axios.get(videoDetailUrl);
                dispatch(videoDetailSuccess(data));
            } catch (error) {
                dispatch(videoDetailFail(error.message));
            }
        };
        fetchVideoDetail();
    }, [videoDetailUrl, dispatch]);

    useEffect(() => {
        const fetchVideoCredit = async () => {
            dispatch(videoCreditRequest());
            try {
                const { data } = await axios.get(videoCreditUrl);
                dispatch(videoCreditSuccess(data));
            } catch (error) {
                dispatch(videoCreditFail(error.message));
            }
        };
        fetchVideoCredit();
    }, [dispatch, videoCreditUrl]);

    return (
        <TitleSection>
            <ScrollToTop />
            <BrowseHeader />
            <Video />
            <VideoDetail />
            <RelatedVideos />
        </TitleSection>
    );
};

export default Title;
