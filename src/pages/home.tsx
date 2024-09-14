import Navbar from '../components/navbar';
import MainSection from '../components/mainSection';
import Footer from '../components/footer';
import Banner from '../components/banner';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
