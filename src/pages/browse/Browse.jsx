import React from 'react';
import BrowseHeader from '../../components/header/BrowseHeader';
import Banner from '../../components/banner/Banner';
import { StyledSection, BrowseContent } from './browseStyles';

const Browse = () => {
    return (
        <StyledSection>
            <BrowseContent>
                <BrowseHeader />
                <Banner />
            </BrowseContent>
        </StyledSection>
    );
};

export default Browse;
