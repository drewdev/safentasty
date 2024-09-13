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

export interface Product {
  productName: string;
  description: string;
  defaultImage: string;
  hoverImage: string;
  soldBy: string;
  filters: Filters;
  category: string;
  price: number;  // Nueva propiedad para el precio en dólares
}

export const products: Product[] = [
  {
    productName: "Vegan Chocolate Cake",
    description: "Dairy-free, gluten-free, and irresistibly delicious.",
    defaultImage: "/images/choco-cake-a.png",
    hoverImage: "/images/choco-cake-b.png",
    soldBy: "VeggieBakes",
    filters: {
      glutenFree: true,
      dairyFree: true,
      vegan: true,
      nutFree: false,
      soyFree: false,
      eggFree: false,
      sugarFree: false,
      lowSodium: false,
      lowCarb: false,
      highProtein: false,
      keto: false,
      paleo: false,
    },
    category: "Bakery",
    price: 15.99,  // Precio en dólares
  },
  {
    productName: "Gluten-Free Brownie",
    description: "Rich and chewy with zero gluten.",
    defaultImage: "/images/brownie-a.png",
    hoverImage: "/images/brownie-b.png",
    soldBy: "VeggieBakes",
    filters: {
      glutenFree: true,
      dairyFree: false,
      vegan: false,
      nutFree: false,
      soyFree: true,
      eggFree: false,
      sugarFree: false,
      lowSodium: true,
      lowCarb: false,
      highProtein: false,
      keto: false,
      paleo: false,
    },
    category: "Bakery",
    price: 7.49,  // Precio en dólares
  },
  {
    productName: "Keto Almond Cookies",
    description: "Crunchy, delicious, and keto-friendly.",
    defaultImage: "/images/keto-almond-a.png",
    hoverImage: "/images/keto-almond-b.png",
    soldBy: "VeggieBakes",
    filters: {
      glutenFree: true,
      dairyFree: true,
      vegan: false,
      nutFree: false,
      soyFree: true,
      eggFree: false,
      sugarFree: true,
      lowSodium: false,
      lowCarb: true,
      highProtein: false,
      keto: true,
      paleo: false,
    },
    category: "Bakery",
    price: 9.99,  // Precio en dólares
  },
  {
    productName: "Vegan Lasagna",
    description: "Layers of plant-based goodness with rich tomato sauce and dairy-free cheese.",
    defaultImage: "/images/vegan-lasagna-a.png",
    hoverImage: "/images/vegan-lasagna-b.png",
    soldBy: "GreenEats",
    filters: {
      glutenFree: false,
      dairyFree: true,
      vegan: true,
      nutFree: true,
      soyFree: false,
      eggFree: true,
      sugarFree: false,
      lowSodium: false,
      lowCarb: false,
      highProtein: false,
      keto: false,
      paleo: false,
    },
    category: "Dishes",
    price: 13.99,  // Precio en dólares
  },
  {
    productName: "Gluten-Free Turkey Sandwich",
    description: "Fresh turkey slices with avocado, lettuce, and gluten-free bread.",
    defaultImage: "/images/turkey-sandwich-a.png",
    hoverImage: "/images/turkey-sandwich-b.png",
    soldBy: "DailyFresh",
    filters: {
      glutenFree: true,
      dairyFree: false,
      vegan: false,
      nutFree: true,
      soyFree: true,
      eggFree: true,
      sugarFree: true,
      lowSodium: true,
      lowCarb: false,
      highProtein: true,
      keto: false,
      paleo: false,
    },
    category: "Sandwiches",
    price: 8.99,  // Precio en dólares
  },
  {
    productName: "Keto Grilled Cheese Sandwich",
    description: "A cheesy delight for keto lovers, made with low-carb bread and cheddar cheese.",
    defaultImage: "/images/keto-grilled-cheese-a.png",
    hoverImage: "/images/keto-grilled-cheese-b.png",
    soldBy: "CheesyKeto",
    filters: {
      glutenFree: true,
      dairyFree: false,
      vegan: false,
      nutFree: true,
      soyFree: true,
      eggFree: true,
      sugarFree: true,
      lowSodium: false,
      lowCarb: true,
      highProtein: false,
      keto: true,
      paleo: false,
    },
    category: "Sandwiches",
    price: 10.49,  // Precio en dólares
  },
  {
    productName: "Paleo Chicken Salad",
    description: "Fresh chicken salad with a mix of leafy greens, avocado, and olive oil dressing.",
    defaultImage: "/images/paleo-chicken-salad-a.png",
    hoverImage: "/images/paleo-chicken-salad-b.png",
    soldBy: "PaleoBites",
    filters: {
      glutenFree: true,
      dairyFree: true,
      vegan: false,
      nutFree: true,
      soyFree: true,
      eggFree: true,
      sugarFree: true,
      lowSodium: false,
      lowCarb: true,
      highProtein: true,
      keto: true,
      paleo: true,
    },
    category: "Dishes",
    price: 12.99,  // Precio en dólares
  },
  {
    productName: "Soy-Free Veggie Burger",
    description: "Delicious plant-based burger without soy, served with a gluten-free bun.",
    defaultImage: "/images/veggie-burger-a.png",
    hoverImage: "/images/veggie-burger-b.png",
    soldBy: "HealthyEats",
    filters: {
      glutenFree: true,
      dairyFree: true,
      vegan: true,
      nutFree: false,
      soyFree: true,
      eggFree: true,
      sugarFree: false,
      lowSodium: true,
      lowCarb: false,
      highProtein: false,
      keto: false,
      paleo: false,
    },
    category: "Sandwiches",
    price: 11.99,  // Precio en dólares
  },
  {
    productName: "Egg-Free Quinoa Salad",
    description: "A hearty salad with quinoa, fresh veggies, and a light lemon dressing.",
    defaultImage: "/images/quinoa-salad-a.png",
    hoverImage: "/images/quinoa-salad-b.png",
    soldBy: "VeganDelights",
    filters: {
      glutenFree: true,
      dairyFree: true,
      vegan: true,
      nutFree: true,
      soyFree: true,
      eggFree: true,
      sugarFree: true,
      lowSodium: true,
      lowCarb: false,
      highProtein: true,
      keto: false,
      paleo: true,
    },
    category: "Dishes",
    price: 10.99,  // Precio en dólares
  },
];
