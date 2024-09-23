import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Marker from './marker'

interface ButtonProps {
  icon?: string; 
  children: React.ReactNode;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
}

const Button: React.FC<ButtonProps> = ({icon , children, href, containerClassName, onClick, markerFill}) => {
const Inner = () => (
        <>
          <span className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden cursor-pointer'>
            <span className='absolute -left-[1px]'>
              <Marker fill={markerFill}/>
            </span>
            {icon && (
              <Image 
              src={icon} 
              alt="circle"
              className="size-10 mr-5 object-contain z-10"
              width={20}
              height={20}
              />
            )}
            <span className='relative z-2 font-poppins base-bold text-p1 uppercase'>{children}</span>
          </span>

          <span className='glow-before glow-after'></span>
        </>
    );
  
    return href ? (
    <a href={href} className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group", containerClassName)}>
        <Inner />
    </a>
  ) : (
    <div onClick={onClick} className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group", containerClassName)}>
        <Inner/>
    </div>
  )
}

export default Button