import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} className="text-2xl font-semibold">
          <Link to="/" className="text-teal-400">Safe-n-Tasty</Link>
        </motion.div>
        <ul className="flex space-x-8">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition duration-300">Become a seller</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition duration-300">About Us</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/products" className="text-gray-700 hover:text-green-600 transition duration-300">Products</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition duration-300">Contact</Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
