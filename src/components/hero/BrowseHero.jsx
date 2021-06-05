import React from 'react';
import { BiPlay } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {
    HeroContainer,
    HeroImage,
    HeroDescription,
    HeroButtons,
} from './browseHeroStyles';

const BrowseHero = () => {
    return (
        <HeroContainer>
            <HeroImage>
                <img src='/images/hero-title.webp' alt='hero title' />
            </HeroImage>
            <HeroDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat, laboriosam, in impedit perspiciatis, beatae quos
                voluptatibus consequatur odit quisquam expedita totam aut enim
                assumenda facere incidunt odio. Esse, repellendus atque.
            </HeroDescription>
            <HeroButtons>
                <button>
                    <BiPlay />
                    Play
                </button>
                <button>
                    <AiOutlineInfoCircle />
                    More Info
                </button>
            </HeroButtons>
        </HeroContainer>
    );
};

export default BrowseHero;
