import Nav from "./Components/Navbar/Nav";

export default function Home() {
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
      </main>
    </div>
    
  );
}