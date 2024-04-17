"use client";
import { useEffect } from 'react'
import Nav from "./Components/Navbar/Nav";
import Image from "next/image";
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
     AOS.init({once: false})
  }, [])
  return (
    <div className="bg-black">
      <header className="bg-black shadow">
        <Nav />
      </header>
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h1 className="mb-4 text-9xl text-gray-900 dark:text-white md:text-8xl lg:text-9xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r bg-white">Portfolio</span>
            </h1>
            <h2 className="mb-4 text-7xl leading-none tracking-tight text-gray-900 md:text-7xl dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r bg-white">By: Kyle Davis</span></h2>
          </div>
        </div>

        <div className="h-screen items-center justify-center flex">
          <div data-aos="fade-up" data-aos-duration="1000" data-delay="1500" className="flex flex-row justify-evenly h-2/3 w-4/5 bg-black bg-opacity-60">
            <Image data-aos="fade-right" data-aos-duration="1000" src='/businessman.webp' alt="Proffesional photo" height={500} width={500}/>
            <div data-aos="fade-left" data-aos-duration="1500" className="flex flex-col justify-evenly">
              <h1 className="text-4xl text-center">About Me</h1>
              <div className="w-full flex justify-center">
                <h4 className="text-center w-4/6 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto recusandae consequuntur aut quae id incidunt ea, odio necessitatibus atque harum consequatur nihil eum eius dolore exercitationem. Perferendis voluptate incidunt id quasi harum vel velit sequi recusandae natus debitis nisi, eligendi laborum error quam dicta dignissimos similique quas aperiam non! Saepe.</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    
  );
}