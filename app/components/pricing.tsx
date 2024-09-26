'use client'

import React, { useState } from 'react'
import { Element } from 'react-scroll'
import Image from 'next/image'
import clsx from 'clsx'
import CountUp from 'react-countup'
import Button from './button'

const Pricing = () => {
    const plans = [
        {
          id: '0',
          title: 'Core',
          priceMonthly: 19,
          priceYearly: 12,
          caption: 'Best for solo creators',
          features: [
            '100MB Cloud storage',
            '100+ prompt templates',
            '5 projects',
            '24/7 support',
          ],
          icon: '/images/circle.svg',
          logo: '/images/plan-1.png',
        },
        {
          id: '1',
          title: 'Overdrive',
          priceMonthly: 79,
          priceYearly: 59,
          caption: 'Most popular plan',
          features: [
            'All Starter features',
            '1TB additional storage',
            'Unlimited projects',
            'Analytics',
          ],
          icon: '/images/triangle.svg',
          logo: '/images/plan-2.png',
        },
        {
          id: '2',
          title: 'Team',
          priceMonthly: 39,
          priceYearly: 29,
          caption: 'Exclusively for teams',
          features: [
            'All Overdrive features',
            '10TB additional storage',
            '50% off per member',
            'Real-time collaboration',
          ],
          icon: '/images/hexagon.svg',
          logo: '/images/plan-3.png',
        },
      ];
    const [monthly, setMonthly] = useState(false)
  return (
    <div>
        <Element name='pricing'>
            <div className='container'>
                <div className='max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16'>
                    <h3 className='h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm'>
                        Flexible pricing for teams of all sizes
                    </h3>
                    <div className='relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]'>
                        <button className={clsx('pricing-head_btn', monthly && 'text-p4')} onClick={()=> setMonthly(true)}>
                            Monthly
                        </button>
                        <button className={clsx('pricing-head_btn', !monthly && 'text-p4')} onClick={()=> setMonthly(false)}>
                            Annual
                        </button>
                        <div className={clsx('g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500', !monthly && 'translate-x-full')}/>
                    </div>
                    <div className='pricing-bg'>
                        <Image src='/images/bg-outlines.svg' width={960} height={380} alt='outline' className='relative z-2'/>
                        <Image src='/images/bg-outlines-fill.png' width={960} height={380} alt='outline' className='absolute inset-0 opacity-5 mix-blend-soft-light'/>
                    </div>
                </div>
                <div className='scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6'>
                    {plans.map((plan, index)=> (
                        <div key={plan.id} className='pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]'>
                            {index === 1 && (
                                <div className='g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl'/>
                            )}
                            <div className={clsx('absolute left-0 right-0 z-2 flex items-center justify-center', index === 1 ? '-top-6' : '-top-6 xl:-top-11')}>
                                <Image src={plan.logo} alt={plan.title} width={100} height={100} className={clsx('object-contain drop-shadow-2xl', index ===1 ? 'size-[120px]' : 'size-[88px]')}/>
                            </div>

                            <div className={clsx('relative flex flex-col items-center', index === 1 ? 'pt-24' : 'pt-12')}>
                                <div className={clsx('small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase', index === 1 ? 'border-p3 text-p3' : 'border-p1 text-p1')}>
                                    {plan.title}
                                </div>

                                <div className='relative z-2 flex items-center justify-center'>
                                    <div className={clsx('h-num flex items-start', index === 1 ? 'text-p3' : 'text-p4')}>
                                        $ <CountUp start={plan.priceMonthly} end={monthly ? plan.priceMonthly : plan.priceYearly } duration={0.4} useEasing={false} preserveValue/>
                                    </div>
                                    <div className='small-1 relative top-3 ml-1 uppercase'>
                                        /mo
                                    </div>
                                </div>
                            </div>
                            <div className={clsx('body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4', index === 1 && 'border-b')}>
                                {plan.caption}
                            </div>

                            <ul className='mx-auto space-y-4 xl:px-7'>
                                {plan.features.map((feature)=> (
                                    <li key={feature} className='relative flex items-center gap-5'>
                                        <Image src='/images/check.png' alt='check' width={40} height={40} className='size-10 object-contain'/>
                                        <p className='flex-1'>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className='mt-10 flex w-full justify-center'>
                                <Button icon={plan.icon}>Get Started</Button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </Element>
    </div>
  )
}

export default Pricing