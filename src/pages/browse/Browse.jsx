import React from 'react';
import BrowseHeader from '../../components/header/BrowseHeader';
import BrowseHero from '../../components/hero/BrowseHero';

import {
    StyledSection,
    BrowseContent,
    HeroContainer,
    HeroImage,
    HeroDescription,
    HeroButtons,
} from './browseStyles';

const Browse = () => {
    return (
        <StyledSection>
            <BrowseContent>
                <BrowseHeader />
                <BrowseHero />
            </BrowseContent>
        </StyledSection>
    );
};

export default Browse;
