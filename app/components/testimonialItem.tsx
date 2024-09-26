import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

interface TestimonialItemProps {
    item: {
      name: string;
      role: string;
      comment: string;
      avatarUrl: string;
    };
    containerClassName: string;
  }

const TestimonialItem: React.FC<TestimonialItemProps>  = ({item, containerClassName}) => {
  return (
    <div className={clsx("relative px-14 pt-11 pb-14 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4", containerClassName)}>
        <blockquote className='h6 mb-8 text-p4'>
            {item.comment}
        </blockquote>

        <div className='flex items-center max-xl:-mr-8 '>
            <div className='mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5'>
                <Image src={item.avatarUrl} alt={item.name} width={50} height={50} className='size-full object-cover'/>
            </div>
        </div>
        <h4 className='body-2 mb-0.5 text-p1 '>{item.name}</h4>
        <p className='small-compact uppercase text-s3'>{item.role}</p>
    </div>
  )
}

export default TestimonialItem