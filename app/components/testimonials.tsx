import React from 'react'
import TestimonialItem from './testimonialItem';

const Testimonials = () => {
    const testimonials = [
        {
          id: '0',
          name: 'Jessica Saunders',
          role: 'Globalnomads',
          avatarUrl: '/images/testimonials/jessica-saunders.png',
          comment:
            "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
        },
        {
          id: '1',
          name: 'Mark Erixon',
          role: 'Vid capital intl',
          avatarUrl: '/images/testimonials/mark-erixon.png',
          comment:
            "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
        },
        {
          id: '2',
          name: 'Melanie Hurst',
          role: 'Cyberleap',
          avatarUrl: '/images/testimonials/melanie-hurst.png',
          comment:
            "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
        },
        {
          id: '3',
          name: 'Alicia Barker',
          role: 'Cyberleap',
          avatarUrl: '/images/testimonials/alicia-barker.png',
          comment:
            "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
        },
        {
          id: '4',
          name: 'Becky Snider',
          role: 'Floclips',
          avatarUrl: '/images/testimonials/becky-snider.png',
          comment:
            "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
        },
        {
          id: '5',
          name: 'Jim Bradley',
          role: 'Vid capital intl',
          avatarUrl: '/images/testimonials/jim-bradley.png',
          comment:
            'The efficiency boost is undeniable. This platform has transformed our workflow, forever.',
        },
      ];

      const halfLength = Math.floor(testimonials.length/2);

  return (
    <div className='relative z-2 py-24 md:py-28 lg:py-40'>
        <div className='container block lg:flex'>
            <div className='testimonials_head-res relative z-2 mr-20 flex-300'>
                <p className='caption mb-5 max-mb:mb-2.5'>Wall of Love</p>
                <h3 className='h3 max-md:h5 text-p4'>Words from our fans</h3>
            </div>
            <div className='testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block'>
            <div className='testimonials_group-after flex-50'>
                {testimonials.slice(0, halfLength).map((testimonial) => (
                <TestimonialItem key={testimonial.id} item={testimonial} containerClassName="last:after:hidden last:after:max-md:block"/>
                ))}
            </div>

            <div className='flex-50'>
                {testimonials.slice(halfLength).map((testimonial) => (
                <TestimonialItem key={testimonial.id} item={testimonial} containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"/>
                ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials