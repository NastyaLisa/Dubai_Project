import React from 'react';
import Hero  from '../cotainers/Home/Hero/Hero';
import Projects from '../cotainers/Home/Projects/Projects';
import Expertise from '../cotainers/Home/Expertise/Expertise';
import Examples from '../cotainers/Home/Examples/Examples';
import FormInner from '../components/Form/FormInner';
import Articles from '../cotainers/Home/Articles/Articles';
import Reviews from '../cotainers/Home/Reviews/Reviews';
import Faq from '../cotainers/Home/Faq/Faq';
import '../scss/main.scss';


const Home = () => {
  return(
    <main className="section">
      <Hero/>
      <Projects/>
      <Expertise/>
      <Examples/>
      <FormInner/>
      <Articles/>
      <Reviews/>
      <Faq/>
    </main>
 
  );
};

export default Home;