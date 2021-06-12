import React from 'react';
import { useHistory } from 'react-router';
import {
    ProfileSection,
    ProfileContainer,
    ProfileContent,
    ProfileInfo,
    ImageContainer,
} from './profileStyles';
import { useSelector } from 'react-redux';
import BrowseHeader from '../../components/header/BrowseHeader';

const Profile = () => {
    const history = useHistory();
    const { user } = useSelector((state) => state.userLogin);

    const handleOnClick = () => {
        history.push('/browse');
    };

    return (
        <ProfileSection>
            <BrowseHeader profile />
            <ProfileContainer>
                <ProfileContent>
                    <h1>Whos watching?</h1>
                    <ProfileInfo>
                        <ImageContainer onClick={handleOnClick}>
                            <img src='/images/profile.png' alt='profile' />
                        </ImageContainer>
                        <p>{JSON.parse(user).displayName}</p>
                    </ProfileInfo>
                    <button onClick={() => alert('Not yet implemented')}>
                        Manage profile
                    </button>
                </ProfileContent>
            </ProfileContainer>
        </ProfileSection>
    );
};

export default Profile;
