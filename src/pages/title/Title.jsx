import React from 'react';
import { useParams } from 'react-router';
import Banner from '../../components/banner/Banner';
import BrowseHeader from '../../components/header/BrowseHeader';
import { TitleSection } from './titleStyles';

const Title = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <TitleSection>
            <BrowseHeader />
            <Banner id={id} />
        </TitleSection>
    );
};

export default Title;
