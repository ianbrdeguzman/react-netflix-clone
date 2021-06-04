import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import {
    StyledSection,
    RegisterContainer,
    Form,
    Border,
} from './registerStyles';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const handleSubmitOnClick = (data) => {
        console.log(data);
        alert(data.email);
    };

    return (
        <StyledSection>
            <Header login />
            <RegisterContainer>
                <Form onSubmit={handleSubmit(handleSubmitOnClick)}>
                    <h1>Create an account</h1>
                    <input
                        type='text'
                        {...register('name', {
                            required: 'Please enter your name.',
                            minLength: {
                                value: 4,
                                message:
                                    'Your name must contain atleast 4 characters.',
                            },
                        })}
                        id='name'
                        placeholder='Name'
                    />
                    {errors.name && <span>{errors.name.message}</span>}
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
                    <input
                        type='password'
                        {...register('confirmPassword', {
                            validate: (value) =>
                                value === watch('password') ||
                                'Password does not match.',
                        })}
                        id='confirmPassword'
                        placeholder='Confirm Password'
                    />
                    {errors.confirmPassword && (
                        <span>{errors.confirmPassword.message}</span>
                    )}
                    <button type='submit'>Create Account</button>
                    <p>
                        Already have an account? <Link to='/login'>Login.</Link>
                    </p>
                    <p>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. <span>Learn more.</span>
                    </p>
                </Form>
            </RegisterContainer>
            <Border />
            <Footer signin />
        </StyledSection>
    );
};

export default Register;
