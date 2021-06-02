import React from 'react';
import Header from '../header/Header';
import { HeroSection, HeroContent, Form, Button } from './heroStyles';
import { BsChevronRight } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

const Hero = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleOnSubmit = (data) => {
        console.log(data);
    };
    return (
        <HeroSection>
            <Header />
            <HeroContent>
                <div>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </p>
                    <Form onSubmit={handleSubmit(handleOnSubmit)}>
                        <div>
                            <input
                                type='text'
                                {...register('email', {
                                    required: 'Email is required!',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:
                                            'Please enter a valid email address',
                                    },
                                })}
                                id='email'
                                placeholder='Email address'
                            />
                            {errors.email && (
                                <span>{errors.email.message}</span>
                            )}
                        </div>
                        <Button type='submit'>
                            Get Started
                            <span>
                                <BsChevronRight />
                            </span>
                        </Button>
                    </Form>
                </div>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero;
