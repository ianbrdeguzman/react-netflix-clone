import React, { useEffect } from 'react';
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import {
    RelatedVideosSection,
    RelatedVideosContent,
} from './relatedVideosStyles';
import {
    relatedVideosRequest,
    relatedVideosSuccess,
    relatedVideosFail,
} from '../../redux/slices/relatedVideosSlice';
import axios from '../../helpers/axios';
import { useParams } from 'react-router';
import SkeletonVideo from '../skeleton/SkeletonVideo';

const RelatedVideos = () => {
    const { id, type } = useParams();
    const dispatch = useDispatch();
    const { loading, videos } = useSelector((state) => state.relatedVideos);

    const url =
        type === 'tv'
            ? `/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
            : `/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

    useEffect(() => {
        const fetchData = async () => {
            dispatch(relatedVideosRequest());
            try {
                const {
                    data: { results },
                } = await axios.get(url);
                dispatch(relatedVideosSuccess(results));
            } catch (error) {
                dispatch(relatedVideosFail(error.message));
            }
        };
        fetchData();
    }, [url, dispatch]);

    return (
        <RelatedVideosSection>
            <h2>More like ${}</h2>
            <RelatedVideosContent>
                {loading
                    ? [...new Array(20)].map((skeleton, i) => {
                          return <SkeletonVideo key={i} />;
                      })
                    : videos &&
                      videos
                          ?.filter(
                              (video) =>
                                  video.poster_path && video.backdrop_path
                          )
                          .map((video) => {
                              return <Card key={video.id} {...video} />;
                          })}
            </RelatedVideosContent>
        </RelatedVideosSection>
    );
};

export default RelatedVideos;
