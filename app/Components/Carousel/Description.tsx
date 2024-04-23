import React from 'react';
import { images } from './constants';
import left from '../../../public/left.svg';
import right from '../../../public/right.svg';
import Image from 'next/image';

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className='grid w-full bg-[#e7dfd9] relative'>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? 'block h-[25rem] md:h-[40rem] py-5 sm:py-10 md:py-20 px-10 text-center'
              : 'hidden'
          }`}
        >
          <div className='py-8 sm:py-16 text-5xl font-extrabold'>
            {elem.title}
          </div>
          <div className=' font-medium text-sm sm:text-base tracking-wide italic text-gray-600'>
            {' '}
            {elem.desc}
          </div>
          <div className='absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center'>
            <div
              className='absolute bottom-2 right-10 cursor-pointer'
              onClick={clickPrev}
            >
              <Image src={left} alt='' />
            </div>

            <div
              className='absolute bottom-2 right-2 cursor-pointer'
              onClick={clickNext}
            >
              <Image src={right} alt='' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
