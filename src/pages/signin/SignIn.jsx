import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { StyledSection, SignInContainer, Form, Border } from './signInStyles';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSubmitOnClick = (data) => {
        console.log(data);
        alert(data.email);
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
                        placeholder='Email address'
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <input
                        type='password'
                        {...register('password', {
                            required:
                                'Your password must contain between 4 and 60 characters.',
                            min: 4,
                            max: 60,
                        })}
                        id='password'
                        placeholder='Password'
                    />
                    {errors.password && <span>{errors.password.message}</span>}
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
