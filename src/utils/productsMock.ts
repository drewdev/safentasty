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
  price: number;
  ingredients: string[];
}


const base = process.env.BASE_URL || '/';

export const products: Product[] = [
  {
    productName: "Vegan Chocolate Cake",
    description: "Dairy-free, gluten-free, and irresistibly delicious.",
    defaultImage: `${ base }images/choco-cake-a.png`,
    hoverImage: `${ base }images/choco-cake-b.png`,
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
    price: 15.99,
    ingredients: ["Almond flour", "Cocoa powder", "Coconut oil", "Maple syrup", "Vanilla extract"],
  },
  {
    productName: "Gluten-Free Brownie",
    description: "Rich and chewy with zero gluten.",
    defaultImage: `${ base }images/brownie-a.png`,
    hoverImage: `${ base }images/brownie-b.png`,
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
    price: 7.49,
    ingredients: ["Rice flour", "Cocoa powder", "Sugar", "Butter", "Eggs", "Vanilla extract"],
  },
  {
    productName: "Keto Almond Cookies",
    description: "Crunchy, delicious, and keto-friendly.",
    defaultImage: `${ base }images/keto-almond-a.png`,
    hoverImage: `${ base }images/keto-almond-b.png`,
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
    price: 9.99,
    ingredients: ["Almond flour", "Coconut oil", "Erythritol", "Vanilla extract", "Egg whites"],
  },
  {
    productName: "Vegan Lasagna",
    description: "Layers of plant-based goodness with rich tomato sauce and dairy-free cheese.",
    defaultImage: `${ base }images/vegan-lasagna-a.png`,
    hoverImage: `${ base }images/vegan-lasagna-b.png`,
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
    price: 13.99,
    ingredients: ["Whole wheat pasta", "Tomato sauce", "Cashew cheese", "Spinach", "Mushrooms"],
  },
  {
    productName: "Gluten-Free Turkey Sandwich",
    description: "Fresh turkey slices with avocado, lettuce, and gluten-free bread.",
    defaultImage: `${ base }images/turkey-sandwich-a.png`,
    hoverImage: `${ base }images/turkey-sandwich-b.png`,
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
    price: 8.99,
    ingredients: ["Gluten-free bread", "Turkey slices", "Avocado", "Lettuce", "Olive oil"],
  },
  {
    productName: "Keto Grilled Cheese Sandwich",
    description: "A cheesy delight for keto lovers, made with low-carb bread and cheddar cheese.",
    defaultImage: `${ base }images/keto-grilled-cheese-a.png`,
    hoverImage: `${ base }images/keto-grilled-cheese-b.png`,
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
    price: 10.49,
    ingredients: ["Low-carb bread", "Cheddar cheese", "Butter", "Garlic powder"],
  },
  {
    productName: "Paleo Chicken Salad",
    description: "Fresh chicken salad with a mix of leafy greens, avocado, and olive oil dressing.",
    defaultImage: `${ base }images/paleo-chicken-salad-a.png`,
    hoverImage: `${ base }images/paleo-chicken-salad-b.png`,
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
    price: 12.99,
    ingredients: ["Chicken breast", "Avocado", "Mixed greens", "Olive oil", "Lemon juice"],
  },
  {
    productName: "Soy-Free Veggie Burger",
    description: "Delicious plant-based burger without soy, served with a gluten-free bun.",
    defaultImage: `${ base }images/veggie-burger-a.png`,
    hoverImage: `${ base }images/veggie-burger-b.png`,
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
    price: 11.99,
    ingredients: ["Gluten-free bun", "Black beans", "Quinoa", "Carrots", "Avocado"],
  },
  {
    productName: "Egg-Free Quinoa Salad",
    description: "A hearty salad with quinoa, fresh veggies, and a light lemon dressing.",
    defaultImage: `${ base }images/quinoa-salad-a.png`,
    hoverImage: `${ base }images/quinoa-salad-b.png`,
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
    price: 10.99,
    ingredients: ["Quinoa", "Cucumber", "Tomatoes", "Olive oil", "Lemon juice"],
  },
];
