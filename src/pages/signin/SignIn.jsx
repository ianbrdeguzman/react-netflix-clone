import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { StyledSection, SignInContainer, Form, Border } from './signInStyles';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';

const SignIn = () => {
    const history = useHistory();
    const { email } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSubmitOnClick = (data) => {
        console.log(data);
        // alert(data.email);
        history.push('/profile');
    };

    return (
        <StyledSection>
            <Header login />
            <SignInContainer>
                <Form onSubmit={handleSubmit(handleSubmitOnClick)}>
                    <h1>Sign In</h1>
                    <input
                        type='text'
                        {...register('email', {
                            required: 'Please enter a valid email.',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email address',
                            },
                        })}
                        id='email'
                        defaultValue={email ? email : ''}
                        placeholder='Email address'
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <input
                        type='password'
                        {...register('password', {
                            required:
                                'Your password must contain between 4 and 60 characters.',
                            minLength: {
                                value: 4,
                                message:
                                    'Your password must contain between 4 and 60 characters.',
                            },
                            maxLength: {
                                value: 60,
                                message:
                                    'Your password must contain between 4 and 60 characters.',
                            },
                        })}
                        id='password'
                        placeholder='Password'
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    <button type='submit'>Sign In</button>
                    <p>
                        New to Netflix? <Link to='/register'>Sign up now.</Link>
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
