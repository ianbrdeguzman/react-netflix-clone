import React from 'react';
import Hero from '../../components/hero/Hero';
import Feature from '../../components/feature/Feature';
import Faq from '../../components/faq/Faq';
import Footer from '../../components/footer/Footer';
import { Border } from './homeStyles';
import { data } from '../../components/feature/featureData';

const Home = () => {
    return (
        <div>
            <Hero />
            <Border />
            {data.map((feature, i) => {
                return (
                    <div key={i}>
                        <Feature {...feature} />
                        <Border />
                    </div>
                );
            })}
            <Faq />
            <Border />
            <Footer />
        </div>
    );
};

export default Home;
