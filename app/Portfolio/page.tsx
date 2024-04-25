import Nav from '../Components/Navbar/Nav';
import Carousel from '../Components/Carousel/Carousel-2.0';

const page = () => {
  return (
    <div className='bg-gray-900'>
      <header className='bg-black shadow'>
        <Nav />
      </header>
      <main>
        <Carousel></Carousel>
      </main>
    </div>
  );
};

export default page;
