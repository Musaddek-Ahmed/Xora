'use client'

import React from 'react'
import { Element } from 'react-scroll'
import Image from 'next/image'
import Button from './button'

const Feature = () => {
    const features = [
        {
          id: '0',
          icon: '/images/feature-1.png',
          caption: 'Easy integration',
          title: 'Work smarter not harder',
          text: "With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.",
          button: {
            icon: '/images/magictouch.svg',
            title: 'Watch the demo',
          },
        },
        {
          id: '1',
          icon: '/images/feature-2.png',
          caption: 'Secure & trustworthy',
          title: 'Sleep easy, we got your back',
          text: 'Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox.',
          button: {
            icon: '/images/docs.svg',
            title: 'Read the docs',
          },
        },
      ];

      const details = [
        {
          id: '0',
          icon: '/images/detail-1.png',
          title: 'AI automated video editing',
        },
        {
          id: '1',
          icon: '/images/detail-2.png',
          title: 'Collaborate with your team',
        },
        {
          id: '2',
          icon: '/images/detail-3.png',
          title: 'Ultra fast cloud-engine',
        },
        {
          id: '3',
          icon: '/images/detail-4.png',
          title: '24 / 7 Customer support',
        },
      ];
  return (
    <section>
        <Element name='features'>
            <div className="container">
                <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
                    {features.map(({id, icon, caption, title, text, button}) => (
                       <div 
                       key={id}
                       className='relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320'
                       >
                        <div className='w-full flex justify-start items-start'>
                            <div className='-ml-3 mb-12 flex items-center justify-center flex-col'>
                                <div className='w-0.5 h-16 bg-s3'/>
                                <Image src={icon} alt={title} width={100} height={100} className='size-28 object-contain'/>
                            </div>
                        </div>
                        
                        <p className='caption mb-5 max-md:mb-6 '>{caption}</p>
                        <h2 className='max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5'>{title}</h2>
                        <p className='mb-11 body-1 max-md:mb-8 max-md:body-3'>{text}</p>
                        <div className='w-fit'>
                        <Button icon={button.icon}>{button.title}</Button>
                        </div>
                        
                        </div> 
                    ))}

                    <ul className='relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden'>
                        <div className='absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10'/>
                        {details.map(({id, icon, title}) =>(
                            <li key={id} className='relative pt-16 px-4 pb-14'>
                                <div className='flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20 '>
                                    <Image 
                                    src={icon}
                                    alt={title}
                                    width={70}
                                    height={70}
                                    className='size-17/20 object-contain z-20'
                                    />
                                </div>

                                <h3 className='relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase'>
                                    {title}
                                </h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </Element>
    </section>
  )
}

export default Feature