import React, { useEffect } from 'react';
import BrowseHeader from '../../components/header/BrowseHeader';
import Banner from '../../components/banner/Banner';
import Row from '../../components/row/Row';
import Footer from '../../components/footer/Footer';
import { StyledSection } from './browseStyles';
import request from '../../helpers/request';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Browse = () => {
    const history = useHistory();
    const { user } = useSelector((state) => state.userLogin);

    useEffect(() => {
        if (!user) {
            history.push('/');
        }
    }, [history, user]);

    return (
        <StyledSection>
            <BrowseHeader />
            <Banner />
            <Row title='Trending Now' url={request.fetchTrending} />
            <Row
                title='Netflix Originals'
                url={request.fetchNetflixOriginals}
                isLarge={true}
            />
            <Row title='Top Rated' url={request.fetchTopRated} />
            <Row title='Action Movies' url={request.fetchActionMovies} />
            <Row title='Comedy Movies' url={request.fetchComedyMovies} />
            <Row title='Horror Movies' url={request.fetchHorrorMovies} />
            <Row title='Romance Movies' url={request.fetchRomanceMovies} />
            <Row title='Documentaries' url={request.fetchDocumentaries} />
            <Footer />
        </StyledSection>
    );
};

export default Browse;
