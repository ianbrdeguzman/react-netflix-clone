import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '../../components/card/Card';
import axios from '../../helpers/axios';
import {
    searchVideosFail,
    searchVideosRequest,
    searchVideosSuccess,
} from '../../redux/slices/searchVideosSlice';
import { SearchSection, SearchHeader, SearchContent } from './searchStyles';

const Search = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { videos } = useSelector((state) => state.searchVideos);

    const titles = videos
        .filter((movie) => movie.media_type === 'movie')
        .map((video) => video.title);

    const handleOnClick = async (title) => {
        dispatch(searchVideosRequest());
        try {
            const {
                data: { results },
            } = await axios.get(
                `/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
            );
            const movies = results.filter(
                (movie) => movie.media_type === 'movie'
            );
            dispatch(searchVideosSuccess(movies));
            history.push(`/search?q=${title}`);
        } catch (error) {
            dispatch(searchVideosFail(error.message));
        }
    };

    return (
        <SearchSection>
            <SearchHeader>
                <p>Explore titles related to:</p>
                <ul>
                    {titles.map((title, i) => {
                        return (
                            <li onClick={() => handleOnClick(title)} key={i}>
                                {title}
                            </li>
                        );
                    })}
                </ul>
            </SearchHeader>
            <SearchContent>
                {videos
                    ?.filter((video) => video.backdrop_path)
                    .map((video) => {
                        return <Card key={video.id} {...video} />;
                    })}
            </SearchContent>
        </SearchSection>
    );
};

export default Search;
