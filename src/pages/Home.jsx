import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import AboutUsSection from '../components/HomePage/AboutUsSection';
import ProgramsOfferedSection from '../components/HomePage/ProgramsOfferedSection';
import MeetTheTrainersPage from '../components/HomePage/MeetTheTrainersPage';
import TransformationsPage from '../components/HomePage/TransformationsPage';
import ContactUsSection from '../components/HomePage/ContactUsSection';

const Home = () => {
  return (
   <div className="min-h-screen">
  <div id="home">
    <HeroSection />
  </div>

  <div id="about">
    <AboutUsSection />
  </div>

  <div id="programs">
    <ProgramsOfferedSection />
  </div>

  <div id="trainers">
    <MeetTheTrainersPage />
  </div>

  <div id="transformations">
    <TransformationsPage />
  </div>

  <div id="contact">
    <ContactUsSection />
  </div>
</div>

  );
};

export default Home;
