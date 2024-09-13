import React from 'react';
import Navbar from '../components/navbar';
import SearchFilters from '../components/searchFilters';
import MainSection from '../components/mainSection';
import Footer from '../components/footer';
import Banner from '../components/banner';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Aseguramos que ocupe toda la pantalla */}
      <Navbar />
      <Banner />
      <SearchFilters />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
