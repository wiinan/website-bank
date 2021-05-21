import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../pricing';
import { homeObjOne} from './Data';

export default function Services() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjOne} />
        </>
    )
}