import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandLogos from './components/BrandLogos';
import DesignSpaces from './components/DesignSpaces';
import DedicatedExperts from './components/DedicatedExperts';
import WhatWeDo from './components/WhatWeDo';
import OurInteriors from './components/OurInteriors';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import NewsroomTicker from './components/Banner';
import ProfessionalBanner from './components/Banner';
import OurWorks from './components/Newdesign';
import { MeetUsSection } from './components/DedicatedExperts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <BrandLogos /> */}
      <ProfessionalBanner />
      {/* <OurWorks /> */}
      <DesignSpaces />
      <DedicatedExperts />
      
      <MeetUsSection />
      <WhatWeDo />
      {/* <OurInteriors /> */}
      <Testimonial />
      <CallToAction />

      <Footer />
    </div>
  );
}

export default App;