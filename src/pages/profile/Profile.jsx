import React from 'react';
import { useHistory } from 'react-router';
import Header from '../../components/header/Header';
import {
    ProfileContainer,
    ProfileContent,
    ProfileInfo,
    ImageContainer,
} from './profileStyles';

const Profile = () => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push('/browse');
    };

    return (
        <section>
            <Header login />
            <ProfileContainer>
                <ProfileContent>
                    <h1>Whos watching?</h1>
                    <ProfileInfo>
                        <ImageContainer onClick={handleOnClick}>
                            <img src='/images/profile.png' alt='profile' />
                        </ImageContainer>
                        <p>Guest</p>
                    </ProfileInfo>
                    <button onClick={() => alert('Not yet implemented')}>
                        Manage profile
                    </button>
                </ProfileContent>
            </ProfileContainer>
        </section>
    );
};

export default Profile;
