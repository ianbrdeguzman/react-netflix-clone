import React from 'react';
import Header from '../header/Header';
import { HeroSection, HeroContent } from './heroStyles';

const Hero = () => {
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
                    <form>
                        <input type='text' name='email' id='email' />
                        <button type='submit'>Get Started</button>
                    </form>
                </div>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero;
