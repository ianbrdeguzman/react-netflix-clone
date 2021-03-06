import React, { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import {
    RegisterSection,
    RegisterContainer,
    Form,
    Border,
    Error,
} from './registerStyles';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../helpers/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
    registerRequest,
    registerSuccess,
    registerFail,
} from '../../redux/slices/userRegisterSlice';
import { ImSpinner2 } from 'react-icons/im';
import { signout } from '../../redux/slices/userLoginSlice';
import { db } from '../../helpers/firebase';
import Loader from '../../components/loader/Loader';

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.userRegister);
    const { user } = useSelector((state) => state.userLogin);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    useEffect(() => {
        if (!user) {
            dispatch(signout());
        } else {
            history.push('/browse');
        }
    }, [dispatch, user, history]);

    const handleSubmitOnClick = async (data) => {
        dispatch(registerRequest());
        try {
            const response = await auth.createUserWithEmailAndPassword(
                data.email,
                data.password
            );
            await response.user.updateProfile({
                displayName: data.name,
            });
            await db.collection('users').doc(response.user.uid).set({
                myList: [],
            });
            dispatch(registerSuccess(JSON.stringify(response.user)));
            history.push(`/login/${data.email}`);
        } catch (error) {
            dispatch(registerFail(error.message));
        }
    };

    return (
        <RegisterSection>
            <Header login />
            <RegisterContainer>
                <Form onSubmit={handleSubmit(handleSubmitOnClick)}>
                    <h1>Create an account</h1>
                    {error && <Error>{error}</Error>}
                    <input
                        type='text'
                        {...register('name', {
                            required: 'Please enter a valid name.',
                            minLength: {
                                value: 3,
                                message:
                                    'Your name must contain atleast 3 characters.',
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
                    <button type='submit'>
                        {loading ? (
                            <Loader>
                                <ImSpinner2 />
                            </Loader>
                        ) : (
                            'Create Account'
                        )}
                    </button>
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
        </RegisterSection>
    );
};

export default Register;
