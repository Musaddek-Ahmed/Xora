'use client'

import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Button from './button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 '>
        <Element name='hero'>
            <div className="container">
                <div className="relative z-2 max-w-512 max-lg:max-w-388">
                    <div className="caption small-2 uppercase text-p3">
                        Video editing
                    </div>
                    <h1 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-6xl max-md:leading-12 max-md:tracking-wide'>
                        Amazingly simple
                    </h1>
                    <p className='max-w-440 mb-14 body-1 max-md:mb-10'>
                        We designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful.
                    </p>
                    <LinkScroll to='features' offset={-100} spy smooth>
                        <div className='w-fit'>
                        <Button icon='/images/zap.svg' href='' containerClassName='' onClick={undefined} markerFill=''>Try it now</Button>
                        </div>
                    </LinkScroll>
                </div>

                <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res'>
                    <Image src='/images/hero.png'alt='hero' width={2000} height={2000}  className='size-1230 max-lg:h-auto'/>
                </div>
            </div>
            </Element>
    </div>
  )
}

export default Hero;