import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filters } from '../utils/filterOptions';
import { products } from '../utils/productsMock';
import ProductCard from './productCard';
import SearchFilters from './searchFilters';

const MainSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    glutenFree: false,
    dairyFree: false,
    vegan: false,
    nutFree: false,
    soyFree: false,
    eggFree: false,
    sugarFree: false,
    lowSodium: false,
    lowCarb: false,
    highProtein: false,
    keto: false,
    paleo: false,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>(''); 

  const categories = [
    { name: 'Bakery', label: 'Bakery' },
    { name: 'Sandwiches', label: 'Sandwiches' },
    { name: 'Dishes', label: 'Dishes' },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterName: keyof Filters, value: boolean) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterName]: value,
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm =
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
  
    const matchesFilters = Object.keys(selectedFilters).every((filterName) => {
      return !selectedFilters[filterName as keyof Filters] || product.filters[filterName as keyof Filters];
    });
  
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
  
    return matchesSearchTerm && matchesFilters && matchesCategory;
  });
  
  return (
    <div className="bg-white flex-1 flex flex-col items-center justify-center w-full pb-8">
      <div className="container mx-auto px-4 text-center">
    
      <SearchFilters
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />

      <div className="my-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Categories</h3>
        <div className="flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category.name
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } hover:bg-teal-400 transition`}
            >
              {category.label}
            </button>
          ))}
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === ''
                ? 'bg-teal-500 text-white'
                : 'bg-gray-200 text-gray-700'
            } hover:bg-teal-400 transition`}
          >
            All
          </button>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
        <p className="text-gray-600 mt-4">Delicious, healthy, and crafted with care for you.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            productName={product.productName}
            description={product.description}
            defaultImage={product.defaultImage}
            hoverImage={product.hoverImage}
            soldBy={product.soldBy}
            filters={product.filters}
            price={product.price}
          />
        ))}
      </div>
    </div>
  </div>

  );
};

export default MainSection;
