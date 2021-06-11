import React, { useEffect } from 'react';
import BrowseHeader from '../../components/header/BrowseHeader';
import Banner from '../../components/banner/Banner';
import Row from '../../components/row/Row';
import Footer from '../../components/footer/Footer';
import { BrowseSection } from './browseStyles';
import request from '../../helpers/request';
import { useDispatch, useSelector } from 'react-redux';
import {
    getMyListFail,
    getMyListRequest,
    getMyListSuccess,
} from '../../redux/slices/myListSlice';
import { db } from '../../helpers/firebase';

const Browse = () => {
    const dispatch = useDispatch();
    const { myList } = useSelector((state) => state.myList);
    const { user } = useSelector((state) => state.userLogin);

    useEffect(() => {
        const fetchMyList = async () => {
            dispatch(getMyListRequest());
            try {
                const response = await db
                    .collection('users')
                    .doc(JSON.parse(user).uid)
                    .get();
                dispatch(getMyListSuccess(response.data().myList));
            } catch (error) {
                dispatch(getMyListFail(error.message));
            }
        };
        if (!myList) fetchMyList();
    }, [dispatch, myList, user]);

    return (
        <BrowseSection>
            <BrowseHeader />
            <Banner />
            <Row title='Trending Now' url={request.fetchTrending} />
            <Row
                title='Netflix Originals'
                url={request.fetchNetflixOriginalTv}
                isLarge={true}
            />
            <Row title='Top Rated' url={request.fetchTopRated} />
            <Row title='Action Movies' url={request.fetchActionMovies} />
            <Row title='Comedy Movies' url={request.fetchComedyMovies} />
            <Row title='Horror Movies' url={request.fetchHorrorMovies} />
            <Row title='Romance Movies' url={request.fetchRomanceMovies} />
            <Row title='Documentaries' url={request.fetchDocumentaries} />
            <Footer />
        </BrowseSection>
    );
};

export default Browse;
