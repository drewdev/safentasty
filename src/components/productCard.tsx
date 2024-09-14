import { useState } from 'react';
import { motion } from 'framer-motion';

interface Filters {
  glutenFree: boolean;
  dairyFree: boolean;
  vegan: boolean;
  nutFree: boolean;
  soyFree: boolean;
  sugarFree: boolean;
  lowSodium: boolean;
  lowCarb: boolean;
  highProtein: boolean;
  keto: boolean;
  paleo: boolean;
}

interface ProductProps {
  productName: string;
  description: string;
  defaultImage: string;
  hoverImage: string;
  soldBy: string;
  filters: Filters;
  price: number;
  ingredients: string[];
  onAddToCart: (productName: string, price: number) => void;
}

const ProductCard = ({
  productName,
  description,
  defaultImage,
  hoverImage,
  soldBy,
  filters,
  price,
  ingredients = [],
  onAddToCart
}: ProductProps) => {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const renderFilters = () => {
    const activeFilters = Object.entries(filters)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    return activeFilters.map((filter) => (
      <span key={filter} className="inline-block bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full mr-2 mb-2">
        {filter.replace(/([A-Z])/g, ' $1')}
      </span>
    ));
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-6 bg-gray-50 shadow-md rounded-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-gray-500 mb-5">Sold by {soldBy}</p>
      <div className="relative">
        <img
          src={hovered ? hoverImage : defaultImage}
          alt={productName}
          className="w-full h-80 object-contain rounded-md mb-4"
        />

        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <div className="space-x-4">
              <p className="text-lg font-bold mb-3">${price.toFixed(2)}</p>
              <button 
                onClick={() => onAddToCart(productName, price)}
                className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition">
                🛒 Add to Cart
              </button>
              <button
                onClick={toggleTooltip}
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
              >
                🔎 View Details
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-700">{productName}</h3>
      <p className="text-gray-500 mt-2">{description}</p>

      <div className="mt-4">{renderFilters()}</div>

      {showTooltip && (
        <div className="absolute top-0 left-0 bg-white shadow-lg border p-4 rounded-md mt-2 z-10">
          <h4 className="text-teal-700 text-lg font-bold mb-2">Ingredients:</h4>
          <p className="text-gray-700">{ingredients.join(', ')}</p>
          <button
            onClick={toggleTooltip}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ProductCard;
