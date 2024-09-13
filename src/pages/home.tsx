import React from 'react';
import Navbar from '../components/navbar';
import MainSection from '../components/mainSection';
import Footer from '../components/footer';
import Banner from '../components/banner';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Aseguramos que ocupe toda la pantalla */}
      <Navbar />
      <Banner />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
