'use client';
import React from 'react';
import banner from '/public/images/banner.jpg';
import Image from 'next/image';
export default function Banner() {
    return (
        <div className='relative w-full h-80 bg-banner bg-cover bg-center'>
            <div className='absolute w-full h-full bg-black/50'></div>
        </div>
    );
}

