import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour } from '../HomePage/Data';

export default function Products() {
    return (
        <>
            <HeroSection {...homeObjFour} />
        </>
    )
}