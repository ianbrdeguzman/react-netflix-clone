import React from 'react';
import Hero from '../../components/hero/Hero';
import Feature from '../../components/feature/Feature';
import { Border } from './homeStyles';
import { data } from '../../components/feature/featureData';

const Home = () => {
    return (
        <div>
            <Hero />
            <Border />
            {data.map((feature) => {
                return (
                    <>
                        <Feature key={feature.id} {...feature} />
                        <Border />
                    </>
                );
            })}
            <Border />
        </div>
    );
};

export default Home;
