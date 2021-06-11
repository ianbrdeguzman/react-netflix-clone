import React from 'react';
import { useSelector } from 'react-redux';
import { VideoDetailContainer, VideoDetailContent } from './videoDetailStyles';

const VideoDetail = () => {
    const {
        credit: { cast, crew },
    } = useSelector((state) => state.videoCredit);

    const {
        video: { genres },
    } = useSelector((state) => state.videoDetail);

    const directors = crew?.filter((person) => person.job === 'Director');

    return (
        <VideoDetailContainer>
            <VideoDetailContent>
                <h3>Title Details</h3>
                <ul>
                    <h4>Director</h4>
                    {directors?.map(({ credit_id, name }) => {
                        return <li key={credit_id}>{name}</li>;
                    })}
                </ul>
                <ul>
                    <h4>Cast</h4>
                    {cast?.slice(0, 10).map(({ cast_id, name }) => {
                        return <li key={cast_id}>{name}</li>;
                    })}
                    <h4>Genre</h4>
                    {genres?.map(({ name, id }) => {
                        return <li key={id}>{name}</li>;
                    })}
                </ul>
            </VideoDetailContent>
        </VideoDetailContainer>
    );
};

export default VideoDetail;
