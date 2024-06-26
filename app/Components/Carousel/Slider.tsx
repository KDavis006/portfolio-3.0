'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { images } from './constants';
import Description from './Description';

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

    useEffect(() => {
      const timer = setTimeout(() => {
        clickNext();
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }, [activeImage]);
  return (
    <main className='grid place-items-center md:grid-cols-2 md:h-1/3 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl'>
      <div
        className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 p-6 md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? 'block h-[25rem] md:h-[40rem] object-cover transition-all duration-500 ease-in-out'
                : 'hidden'
            }`}
          >
            <Image
              src={elem.src}
              alt=''
              width={400}
              height={400}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default Slider;
