'use client';
import Nav from '../Components/Navbar/Nav';
import Carousel from '../Components/Carousel/Carousel-2.0';
import AOS from 'aos';

const page = () => {
  return (
    <div className='bg-black'>
      <header className='bg-black shadow'>
        <Nav />
      </header>
      <main>
        <div className='flex justify-center items-center h-screen'>
          <div className='text-center'>
            <h1 className='mb-4 text-9xl  text-gray-900 dark:text-white md:text-8xl lg:text-9xl'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r bg-white'>
                Resume
              </span>
            </h1>
          </div>
        </div>

        <div className='h-screen items-center justify-center flex'>
          <div className='flex flex-col md:flex-row md:content-center md:justify-center justify-evenly h-2/3 w-4/5 bg-black bg-opacity-60'>
            <div className='flex justify-center items-center w-full'>
              <p className='text-6xl text-center'>Work History</p>
            </div>
            <Carousel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
