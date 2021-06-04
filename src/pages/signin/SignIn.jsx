import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { StyledSection, SignInContainer, Form, Border } from './signInStyles';

const SignIn = () => {
    return (
        <StyledSection>
            <Header login />
            <SignInContainer>
                <Form>
                    <h1>Sign In</h1>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email address'
                    />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                    />
                    <button type='submit'>Sign In</button>
                    <p>
                        New to Netflix? <a href=''>Sign up now.</a>
                        {/* change route*/}
                    </p>
                    <p>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. <span>Learn more.</span>
                    </p>
                </Form>
            </SignInContainer>
            <Border />
            <Footer signin />
        </StyledSection>
    );
};

export default SignIn;
