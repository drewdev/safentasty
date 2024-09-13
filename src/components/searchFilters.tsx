import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filters, filterOptions } from '../utils/filterOptions'; // Asegúrate de ajustar la ruta según la ubicación del archivo

const SearchFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Filters>(
    filterOptions.reduce((acc, filter) => ({ ...acc, [filter.name]: false }), {} as Filters)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
    console.log('Selected filters:', filters);
    // Aquí puedes agregar la lógica para hacer la búsqueda filtrada
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-4">
          <h2 className="text-2xl text-gray-800">What are you craving today? 😋</h2>
        </motion.div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center mb-4">
            <input
              type="text"
              placeholder="A delicious dairy free cake 🎂..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {filterOptions.map((filter) => (
              <label key={filter.name} className="flex items-center text-gray-800">
                <input
                  type="checkbox"
                  name={filter.name}
                  checked={filters[filter.name as keyof Filters]} // TypeScript necesita saber que estas propiedades existen
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                {filter.label}
              </label>
            ))}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition">
              Apply Filters 😉
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFilters;
