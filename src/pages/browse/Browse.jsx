import React, { useEffect } from 'react';
import BrowseHeader from '../../components/header/BrowseHeader';
import Banner from '../../components/banner/Banner';
import Row from '../../components/row/Row';
import Footer from '../../components/footer/Footer';
import { StyledSection } from './browseStyles';
import request from '../../helpers/request';
import { useHistory } from 'react-router';
import { auth } from '../../helpers/firebase';

const Browse = () => {
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log('user is logged in');
            } else {
                history.push('/');
            }
        });
    }, [history]);
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
