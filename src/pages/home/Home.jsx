import React, { useEffect } from 'react';
import Hero from '../../components/hero/Hero';
import Feature from '../../components/feature/Feature';
import Faq from '../../components/faq/Faq';
import Footer from '../../components/footer/Footer';
import { Border } from './homeStyles';
import { data } from '../../components/feature/featureData';
import { auth } from '../../helpers/firebase';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/slices/userLoginSlice';

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                history.push('/browse');
            } else {
                dispatch(signout());
            }
        });

        return unsubscribe;
    }, [history, dispatch]);

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
