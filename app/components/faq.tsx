'use client'

import React from 'react'
import { Element } from 'react-scroll'
import Image from 'next/image'
import FaqItem from './faq-item'

const Faq = () => {
    const faq = [
        {
          id: '0',
          question: 'How easy is it to setup Xora?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
        {
          id: '1',
          question: 'Can I integrate Xora with other platforms?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
        {
          id: '2',
          question: 'How often do you add new content?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
        {
          id: '3',
          question: 'What your refund policy?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
        {
          id: '4',
          question: 'Do you have corporate plans?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
        {
          id: '5',
          question: 'What happens when I’m out of storage?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
        {
          id: '6',
          question: 'Can I upgrade my plan?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
        {
          id: '7',
          question: 'How do I invite my team?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
        {
          id: '8',
          question: 'Do you offer training for individuals and teams?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
        {
          id: '9',
          question: 'I’m locked out of my account what do I do?',
          answer:
            'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
        },
      ];

      const halfLength = Math.floor(faq.length / 2);


  return (
    <div>
        <Element name='faq' className='relative'>
            <div className='container relative z-2 py-28'>
                <div>
                    <h3 className='h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4'>
                        Curiosity didn't kill the cat, it gave it answers.
                    </h3>
                    <p className='body-1 max-lg:max-w-sm'>
                        You've got questions, we've got answers. 
                    </p>
                </div>
                <div className='faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2'/>
            </div>
            <div className='faq-glow_before relative z-2 border-2 border-s2 bg-s1'>
                <div className='container flex gap-10 max-lg:block'>
                    <div className='rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1'>
                        <Image src='/images/faq-logo.svg' alt='logo' width={50} height={50} className='size-1/2'/>
                    </div>
                    <div className='relative flex-1 pt-24'>
                        {faq.slice(0, halfLength).map((item, index)=> (
                            <FaqItem key={item.id} item={item} index={index}/>
                        ))}

                    </div>

                    <div className='relative flex-1 lg:pt-24'>
                        {faq.slice(halfLength).map((item, index)=> (
                            <FaqItem key={item.id} item={item} index={halfLength + index}/>
                        ))}

                    </div>
                </div>
                <div className='faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden'/>
            </div>
        </Element>
    </div>
  )
}

export default Faq