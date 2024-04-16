import Nav from '../Components/Navbar/Nav'

const page = () => {
  return (
    <div className="bg-black">
      <header className="bg-black shadow">
        <Nav />
      </header>
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h1 className="mb-4 text-9xl  text-gray-900 dark:text-white md:text-8xl lg:text-9xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r bg-white">Resume</span>
            </h1>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page