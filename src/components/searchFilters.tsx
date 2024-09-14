import React from 'react';
import { motion } from 'framer-motion';
import { Filters, filterOptions } from '../utils/filterOptions';

interface FiltersProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFilters: Filters;
  onFilterChange: (filterName: keyof Filters, value: boolean) => void;
}

const SearchFilters = ({ searchTerm, onSearchChange, selectedFilters, onFilterChange }: FiltersProps) => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-4">
          <h2 className="text-2xl text-gray-800">What are you craving today? 😋</h2>
        </motion.div>
        <div className="flex items-center justify-center mb-4">
          <input
            type="text"
            placeholder="A delicious dairy free cake 🎂..."
            value={searchTerm}
            onChange={onSearchChange}
            className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <h3 className="text-2xl text-teal-600 mb-6">Select your filters 😉</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {filterOptions.map((filter) => (
            <label key={filter.name} className="flex items-center text-gray-800">
              <input
                type="checkbox"
                name={filter.name}
                checked={selectedFilters[filter.name as keyof Filters]}
                onChange={(e) => onFilterChange(filter.name as keyof Filters, e.target.checked)}
                className="mr-2"
              />
              {filter.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
