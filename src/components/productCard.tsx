import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ productName, description, defaultImage, hoverImage, soldBy }:
  { productName: string; description: string; defaultImage: string; hoverImage: string; soldBy: string; }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-6 bg-gray-50 shadow-md rounded-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-gray-500 mb-5">Sold by {soldBy}</p>
      <img
        src={hovered ? hoverImage : defaultImage}
        alt={productName}
        className="w-full h-80 object-contain rounded-md mb-4"
      />
      
      <h3 className="text-xl font-semibold text-gray-700">{productName}</h3>
      <p className="text-gray-500 mt-2">{description}</p>

      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex justify-evenly items-center"
        >
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            🛒 Add to Cart
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
            🔎 View Details
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProductCard;
