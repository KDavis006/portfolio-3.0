'use client';
import { useEffect } from 'react';
import Nav from './Components/Navbar/Nav';
import Slider from './Components/Carousel/Slider';
import Background from '../public/BackgroundOne.svg';
import Image from 'next/image';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className='h-full bg-[url("../public/BackgroundOne.svg")'>
      <header className='bg-black shadow w-full'>
        <Nav />
      </header>
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
          <h1 className='mb-4 text-6xl text-gray-900 dark:text-white md:text-8xl lg:text-9xl'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r bg-white text-center'>
              Portfolio
            </span>
          </h1>
          <h2 className='mb-4 text-5xl leading-none tracking-tight text-gray-900 md:text-7xl dark:text-white'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r bg-white'>
              By: Kyle Davis
            </span>
          </h2>
        </div>
      </div>

      <div className='h-screen items-center justify-center flex'>
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          data-delay='500'
          className='flex flex-col md:flex-row md:content-center md:justify-center justify-evenly h-2/3 w-4/5 bg-black bg-opacity-60'
        >
          <div className='flex justify-center w-full'>
            <Image
              data-aos='fade-right'
              data-aos-duration='3000'
              src='/businessman.webp'
              alt='Proffesional photo'
              className='w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem]'
              height={400}
              width={400}
            />
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='1500'
            className='flex flex-col justify-evenly'
          >
            <h1 className='text-4xl text-center'>About Me</h1>
            <div className='w-full flex justify-center'>
              <h4 className='text-center w-4/6 xl:text-xl lg:text-lg sm:text-base text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto recusandae consequuntur aut quae id incidunt ea, odio
                necessitatibus atque harum consequatur nihil eum eius dolore
                exercitationem. Perferendis voluptate incidunt id quasi harum
                vel velit sequi recusandae natus debitis nisi, eligendi laborum
                error quam dicta dignissimos similique quas aperiam non! Saepe.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-4xl text-center'>My Achievments</h1>
      <div className='h-screen items-center justify-center flex'>
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          data-delay='1500'
          className='flex justify-evenly h-2/3 w-4/5 bg-black bg-opacity-60'
        >
          <main className='bg-gradient-to-r from-[#c8dba] to-[#a49d9b] w-full mx-auto grid'>
            <Slider />
          </main>
        </div>
      </div>
    </div>
  );
}
