import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

export default function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    )
}