export interface Filters {
  glutenFree: boolean;
  dairyFree: boolean;
  vegan: boolean;
  nutFree: boolean;
  soyFree: boolean;
  eggFree: boolean;
  sugarFree: boolean;
  lowSodium: boolean;
  lowCarb: boolean;
  highProtein: boolean;
  keto: boolean;
  paleo: boolean;
}

export const filterOptions = [
  { name: 'glutenFree', label: 'Gluten Free' },
  { name: 'dairyFree', label: 'Dairy Free' },
  { name: 'vegan', label: 'Vegan' },
  { name: 'nutFree', label: 'Nut Free' },
  { name: 'soyFree', label: 'Soy Free' },
  { name: 'eggFree', label: 'Egg Free' },
  { name: 'sugarFree', label: 'Sugar Free' },
  { name: 'lowSodium', label: 'Low Sodium' },
  { name: 'lowCarb', label: 'Low Carb' },
  { name: 'highProtein', label: 'High Protein' },
  { name: 'keto', label: 'Keto' },
  { name: 'paleo', label: 'Paleo' },
];
