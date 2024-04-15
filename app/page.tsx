import Nav from "./Components/Navbar/Nav";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <header className="bg-black shadow">
        <Nav />
      </header>
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h1 className="mb-4 text-9xl font-extrabold text-gray-900 dark:text-white md:text-8xl lg:text-9xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Portfolio</span>
            </h1>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">By: Kyle Davis</span></h2>
          </div>
        </div>
      </main>
    </div>
    
  );
}