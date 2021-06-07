import React from 'react';
import { BiPlay } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {
    BannerContainer,
    BannerTitle,
    BannerDescription,
    BannerButtons,
} from './bannerStyles';

const Banner = () => {
    const truncate = (str) => {
        return str?.length > 100 ? str.substring(0, 100) + '...' : str;
    };
    return (
        <BannerContainer>
            <BannerTitle>
                <img src='/images/hero-title.webp' alt='banner' />
            </BannerTitle>
            <BannerDescription>
                {truncate(
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestias quibusdam, ut placeat aperiam nemo inventore dolore nam animi deserunt consectetur nisi veniam voluptatem sapiente doloribus perspiciatis ad voluptatibus libero?'
                )}
            </BannerDescription>
            <BannerButtons>
                <button>
                    <BiPlay />
                    Play
                </button>
                <button>
                    <AiOutlineInfoCircle />
                    More Info
                </button>
            </BannerButtons>
        </BannerContainer>
    );
};

export default Banner;
