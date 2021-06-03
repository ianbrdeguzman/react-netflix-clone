import React from 'react';
import Hero from '../../components/hero/Hero';
import Feature from '../../components/feature/Feature';
import { Border } from './homeStyles';
import { data } from '../../components/feature/featureData';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <Border />
            {data.map((feature, i) => {
                return (
                    <div key={i}>
                        <Feature key={feature.id} {...feature} />
                        <Border />
                    </div>
                );
            })}
            <Footer />
        </div>
    );
};

export default Home;
