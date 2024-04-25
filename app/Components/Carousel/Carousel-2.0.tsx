'use client';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Image from 'next/image';
import left from '../../../public/left.svg';
import right from '../../../public/right.svg';

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        dotsNav={{
          show: true,
          itemBtnProps: {
            className: 'h-4 w-4 mx-1 rounded-full border-0 bg-gray-500',
          },
          activeItemBtnProps: {
            className: 'h-4 w-4 mx-1 rounded-full border-0 bg-white',
          },
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={1000}
        easing='linear'
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[40rem] h-[40rem] p-16'>
          <p className='text-2xl py-2'>Job Title</p>
          <p className='text-xl py-2'>Time of work</p>
          <p className='text-lg py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae consequuntur aut quae id incidunt ea, odio necessitatibus
            atque harum consequatur nihil eum eius dolore exercitationem.
            Perferendis voluptate incidunt id quasi harum vel velit sequi
            recusandae natus debitis nisi, eligendi laborum error quam dicta
            dignissimos similique quas aperiam non! Saepe.
          </p>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
