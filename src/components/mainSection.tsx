import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './productCard';

const MainSection = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-start w-full py-12 h-screen">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <h2 className="text-3xl text-gray-800">Our Featured Products</h2>
          <p className="text-gray-600 mt-4">Delicious, healthy, and crafted with care for you.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            soldBy="VeggieBakes"
            productName="Vegan Chocolate Cake"
            description="Dairy-free, gluten-free, and irresistibly delicious."
            defaultImage="/images/choco-cake-a.png"
            hoverImage="/images/choco-cake-b.png"
          />
          <ProductCard
            soldBy="VeggieBakes"
            productName="Gluten-Free Brownie"
            description="Rich and chewy with zero gluten."
            defaultImage="/images/brownie-a.png"
            hoverImage="/images/brownie-b.png"
          />
          <ProductCard
            soldBy="VeggieBakes"
            productName="Keto Almond Cookies"
            description="Crunchy, delicious, and keto-friendly."
            defaultImage="/images/keto-almond-a.png"
            hoverImage="/images/keto-almond-b.png"
          />
        </div>

          {/* Puedes agregar más productos aquí */}
        </div>
      </div>
  );
};

export default MainSection;
