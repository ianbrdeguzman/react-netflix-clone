import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import {
    StyledSection,
    SignInContainer,
    Form,
    Border,
    Error,
    Loader,
} from './signInStyles';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    signinRequest,
    signinSuccess,
    signinFail,
} from '../../redux/slices/userLoginSlice';
import { auth } from '../../helpers/firebase';
import { ImSpinner2 } from 'react-icons/im';

const SignIn = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.userLogin);
    const { email } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleSubmitOnClick = async (data) => {
        dispatch(signinRequest());
        try {
            const response = await auth.signInWithEmailAndPassword(
                data.email,
                data.password
            );
            if (response) {
                dispatch(signinSuccess(JSON.stringify(response.user)));
                reset();
                history.push('/profile');
            }
        } catch (error) {
            dispatch(signinFail(error.message));
            reset();
        }
    };

    return (
        <StyledSection>
            <Header login />
            <SignInContainer>
                <Form onSubmit={handleSubmit(handleSubmitOnClick)}>
                    <h1>Sign In</h1>
                    {error && <Error>{error}</Error>}
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
                    <button type='submit'>
                        {loading ? (
                            <Loader>
                                <ImSpinner2 />
                            </Loader>
                        ) : (
                            'Sign in'
                        )}
                    </button>
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
