import React from 'react';
import banner1 from '../assets/Fblack.png';
import banner2 from '../assets/bedit.png';
import banner3 from '../assets/bm.jpg';

import Sliding from '../components/Sliding';

const Home = () => {
  let slides = [banner1, banner2, banner3]; 
  return (
    <div className=' min-h-screen mt-9 mb-9 w-[80%] m-auto'>
      <Sliding slides={slides} />
    </div>
  );
};

export default Home;
