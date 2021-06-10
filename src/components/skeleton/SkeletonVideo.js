import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonVideo = () => {
    return (
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
            <Skeleton height={90} width='100%' />
        </SkeletonTheme>
    );
};

export default SkeletonVideo;
