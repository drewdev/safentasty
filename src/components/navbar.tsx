import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="text-2xl font-semibold">
            <Link to="/" className="text-teal-400 hover:text-teal-600">Safe-n-Tasty</Link>
          </motion.div>

          <ul className="flex space-x-8 text-xs md:text-sm custom-xs:text-xxs">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition duration-300">Become a seller</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition duration-300">About Us</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition duration-300">Contact</Link>
            </motion.li>
          </ul>
        </div>
      </nav>

      <style>{`
        @media (max-width: 400px) {
          .custom-xs\\:text-xxs {
            font-size: 0.6rem; /* Tamaño más pequeño para pantallas menores de 400px */
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
