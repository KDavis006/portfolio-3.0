'use client';
import { useState } from 'react';
import Link from 'next/link';

function Nav() {
  const people = [
    ['Home', ''],
    ['Resume', 'Resume'],
    ['Projects', 'Portfolio'],
  ];

  const listItems = people.map((person) => (
    <li className='px-3 py-2 bg-black cursor-pointer'>
      <Link href={`/${person[1]}`}>{person[0]}</Link>
    </li>
  ));

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container fixed m-auto p-3 flex justify-between items-center w-screen z-10'>
      <h1 className='text-2xl md:text-2xl sm:text-base font-bold text-white'>
        Portfolio
      </h1>
      <nav className={isOpen ? 'flex' : ' hidden md:flex'}>
        <ul className='flex absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-12 left-0 md:top-0 md:flex bg-transparent text-white'>
          {listItems}
        </ul>
      </nav>
      <div className='md:hidden'>
        <button
          className='flex justify-center items-center '
          onClick={toggleNavbar}
        >
          <svg
            viewBox='0 0 24 24'
            width='24'
            height='24'
            stroke='currentColor'
            stroke-width='2'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            className={isOpen ? 'hidden' : 'flex'}
          >
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
          </svg>
          <svg
            viewBox='0 0 24 24'
            width='24'
            height='24'
            stroke='currentColor'
            stroke-width='2'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            className={isOpen ? 'flex' : 'hidden'}
          >
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Nav;
