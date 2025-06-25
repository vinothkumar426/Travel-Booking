import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Destinations from './Destinations';
import About from './About';
import Testimonials from './Testimonials';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <About />
      <Testimonials />
    </>
  );
}

export default Home;
