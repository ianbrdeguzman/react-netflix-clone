import React from 'react';
import Header from '../header/Header';
import { HeroSection, HeroContent } from './heroStyles';
import Form from '../form/Form';

const Hero = () => {
    return (
        <HeroSection>
            <Header />
            <HeroContent>
                <div>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                </div>
                <Form />
            </HeroContent>
        </HeroSection>
    );
};

export default Hero;
