import React from 'react';
import banner1 from '../assets/banner2black.png';
// import banner2 from '../assets/addStation.png';

import Sliding from '../components/Sliding';

const Home = () => {
  let slides = [banner1, banner1, banner1]; 
  return (
    <div className=' min-h-screen mt-9 mb-9 w-[80%] m-auto'>
      <Sliding slides={slides} />
    </div>
  );
};

export default Home;
