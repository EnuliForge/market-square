// /data/marketsquare.ts

export type CategoryId = "food" | "drinks";

export type MenuItem = {
  name: string;           // "Beef & Kimchi" OR "__title__"
  description?: string;
  prices: string[];       // e.g. ["K 150"]
  label?: string;         // used only when name === "__title__"
};

export type MenuSection = {
  id: string;
  label: string;
  subtitle?: string;      // optional, if you want "6 for K150" etc.
  columns?: string[];
  items: MenuItem[];
  note?: string;
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
  category: CategoryId;
  blurb: string;
  items: string[];        // keep this as “highlights” if you like
  bgColor: string;
  textColor: string;
  tags: string[];
  menu?: MenuSection[];   // NEW: full structured menu
};


export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
];

export const BRANDS: Brand[] = [
  // ---------------- FOOD ----------------
 {
  id: "hot-shot",
  name: "Hot Shot Deli & Coffee Shop",
  logo: "/brands/hot-shot.svg",
  category: "food",
  blurb: "Neighbourhood deli & coffee comfort.",
  tags: ["Coffee", "Breakfast", "Deli"],
  items: ["Espresso bar, toasties, bakes and light deli plates."],
  bgColor: "#cfc1b4",
  textColor: "#000000",

  menu: [
    {
      id: "beverages",
      label: "Beverages",
      columns: ["Price"],
      items: [
        {
          name: "Frappes",
          description:
            "Mango, Strawberry, Apple Mint, Coffee, Coffee & Chocolate Cookie.",
          prices: ["K 100"],
        },
        { name: "Mocaccino", prices: ["K 80"] },
        { name: "Hot Chocolate", prices: ["K 80"] },
        { name: "Cappuccino", prices: ["K 80"] },
        { name: "Cafe Latte", prices: ["K 80"] },
        { name: "Americano", prices: ["K 75"] },
        {
          name: "Tea",
          description: "Rooibos, Five Roses, Green.",
          prices: ["K 50"],
        },
        { name: "Tea (Ginger)", prices: ["K 65"] },
        {
          name: "Non-dairy milk add-on",
          description: "Oat milk or almond milk.",
          prices: ["+K 20"],
        },
      ],
    },

    {
      id: "desserts",
      label: "Desserts",
      columns: ["Price"],
      items: [
        {
          name: "Mini Dessert Tarts",
          description: "Flavour of the day.",
          prices: ["K 70"],
        },
        {
          name: "Cheesecake Slice",
          description: "Flavour of the day.",
          prices: ["K 110"],
        },
        {
          name: "Muffins",
          description: "Flavour of the day.",
          prices: ["K 90"],
        },
        {
          name: "Cake Slice",
          description: "Flavour of the day.",
          prices: ["K 110"],
        },
        {
          name: "Mini Cake Tins",
          description: "Flavour of the day.",
          prices: ["K 90"],
        },
        {
          name: "Other Desserts",
          description: "See dessert display for today’s selection & pricing.",
          prices: [""],
        },
        {
          name: "Savoury",
          description: "Chat to the team about today’s savoury options.",
          prices: [""],
        },
      ],
    },
  ],
},


  {
  id: "mozza",
  name: "Mozza Pizza",
  logo: "/brands/mozza-pizza.svg",
  category: "food",
  blurb: "Proper pizza, the Italian way.",
  tags: ["Pizza", "Wood-Fired", "Italian"],
  items: ["Wood-fired pizzas made fresh."],
  bgColor: "#c82127",
  textColor: "#ffffff",

  menu: [
    {
      id: "pizzas",
      label: "Wood-Fired Pizzas",
      note: "K180 unless otherwise stated.",
      columns: ["Price"],
      items: [
        {
          name: "BBQ Chicken & Mushroom",
          description:
            "Tomato base with pulled chicken, BBQ sauce, green peppers & mushrooms.",
          prices: ["K 180"],
        },
        {
          name: "Spicy Sweet",
          description:
            "Tomato base with salami, hot honey & feta crumble.",
          prices: ["K 180"],
        },
        {
          name: "Philly Cheesesteak",
          description:
            "White base with grilled steak, caramelised onions, green peppers & cheese sauce.",
          prices: ["K 180"],
        },
        {
          name: "Margherita (v)",
          description: "Tomato base with fresh tomatoes and basil.",
          prices: ["K 180"],
        },
        {
          name: "Butternut (v)",
          description:
            "White base with roasted butternut, onion marmalade, feta & sage.",
          prices: ["K 180"],
        },
        {
          name: "The Big Fig",
          description: "Brie, fig jam & crispy bacon.",
          prices: ["K 210"],
        },
      ],
    },
  ],
},

{
  id: "noodz",
  name: "Noodz",
  logo: "/brands/noodz.svg",
  category: "food",
  blurb: "“Slurp responsibly”",
  tags: ["Noodles", "Stir-fry", "Spicy"],
  items: ["Paprika stir-fry, Korean pulled beef and balsamic noodz bowls."],
  bgColor: "#000000",
  textColor: "#ffffff",

  menu: [
    {
      id: "bowls",
      label: "Noodz Bowls",
      columns: ["Price"],
      note: "All dishes are K180.",
      items: [
        {
          name: "Paprika Stir-Fry",
          description:
            "Bok choy, seasonal veg and a paprika kick. Choose your partner: chicken | beef | tofu. Get tossed.",
          prices: ["K 180"],
        },
        {
          name: "Peanut Stir-Fry",
          description:
            "Creamy peanut & coconut sauce with seasonal veg. Choose your partner: chicken | beef | tofu. Get tossed.",
          prices: ["K 180"],
        },
        {
          name: "Thai Curry Stir Fry",
          description:
            "Thai-inspired flavours with green beans, carrots, cabbage and mushrooms. Choose your partner: chicken | beef | tofu.",
          prices: ["K 180"],
        },
        {
          name: "Korean Pulled Beef",
          description:
            "Slow-cooked, saucy, and falls apart at the touch. Go ahead... pull it.",
          prices: ["K 180"],
        },
        {
          name: "Balsamic Noodz",
          description:
            "Tangy balsamic, seasonal veg, glossy noodles. Choose your partner: chicken | beef | tofu. Make it exciting.",
          prices: ["K 180"],
        },
      ],
    },
  ],
},


{
  id: "loko",
  name: "Loko",
  logo: "/brands/loko.svg",
  category: "food",
  blurb: "“A little loco, a lotta flavour”",
  tags: ["Mexican", "Spicy", "Street Food"],
  items: ["Street-style corn, loaded nachos and loud, messy tacos."],
  bgColor: "#b42025",
  textColor: "#ffffff",

  menu: [
    {
      id: "snacks",
      label: "Snacks",
      columns: ["Price"],
      items: [
        {
          name: "Street Corn (Elotes)",
          description:
            "Small bite, big attitude. Grilled sweet corn with house sauce, feta and tajin.",
          prices: ["K 90"],
        },
        {
          name: "Nachos",
          description:
            "Share if you dare. Vegetarian | Chicken | Beef. All served with pickled onions, avocado cream & sour cream.",
          prices: ["K 200"],
        },
      ],
    },
    {
      id: "tacos",
      label: "Tacos",
      columns: ["Price"],
      note: "Loud. Messy. Perfect.",
      items: [
        { name: "Chicken Taco", prices: ["K 180"] },
        { name: "Pork Taco", prices: ["K 180"] },
        { name: "Beef Steak Taco", prices: ["K 180"] },
        { name: "Crayfish Taco", prices: ["K 180"] },
        { name: "Roasted Cauliflower Taco", prices: ["K 180"] },
      ],
    },
  ],
},


 {
  id: "dumpling-hutt",
  name: "Dumpling Hutt",
  logo: "/brands/dumpling-hutt.svg",
  category: "food",
  blurb: "“Happiness, hand-folded.”",
  tags: ["Dumplings", "Asian", "Noodles"],
  items: ["Hand-folded dumplings and wontons, 6 pieces per serving."],
  bgColor: "#e6c61f",
  textColor: "#000000",

  menu: [
    {
      id: "dumplings",
      label: "Dumplings",
      columns: ["Price"],
      note: "Dumplings – 6 for K150.",
      items: [
        { name: "Beef & Kimchi", prices: ["K 150"] },
        { name: "Pork & Butternut", prices: ["K 150"] },
        { name: "Chicken & Pickled Cabbage", prices: ["K 150"] },
        {
          name: "Tofu & Seasonal Veg with Rice Noodles",
          prices: ["K 150"],
        },
        {
          name: "Deep Fried Cream Cheese Wontons",
          prices: ["K 150"],
        },
      ],
    },
  ],
},


{
  id: "fryer-tucks",
  name: "Fryer Tucks",
  logo: "/brands/fryer-tucks.svg",
  category: "food",
  blurb: "“In Fryer We Trust”",
  tags: ["Loaded Fries", "Loaded Dogs", "Comfort Food"],
  items: ["Loaded fries and hot dogs stacked with toppings."],
  bgColor: "#9b52a0",
  textColor: "#ffffff",

  menu: [
    {
      id: "loaded-fries",
      label: "Loaded Fries",
      note: "All loaded fries are K150.",
      columns: ["Price"],
      items: [
        {
          name: "Classic",
          description:
            "Topped with cheese sauce. Add bacon and/or jalapeños (extra charge).",
          prices: ["K 150"],
        },
        {
          name: "Pulled BBQ Beef",
          description:
            "With pulled beef and BBQ sauce, coleslaw and crispy onion.",
          prices: ["K 150"],
        },
        {
          name: "Mediterranean Chicken",
          description:
            "With chicken, tomato & cucumber salad, olives, tzatziki & feta crumble.",
          prices: ["K 150"],
        },
      ],
    },

    {
      id: "loaded-dogs",
      label: "Loaded Dogs",
      note: "All loaded dogs are K150. Choose from chicken, pork or beef sausage.",
      columns: ["Price"],
      items: [
        {
          name: "Korean Slaw Dog",
          description:
            "With Korean slaw, spiced ketchup & zingy mustard.",
          prices: ["K 150"],
        },
        {
          name: "Jalapeño Popper Dog",
          description: "With cream cheese, pickled jalapeños & bacon.",
          prices: ["K 150"],
        },
        {
          name: "New York Style Hot Dog",
          description:
            "With pickled cabbage, tomato & onion relish, crispy onions and mustard.",
          prices: ["K 150"],
        },
        {
          name: "Teriyaki Dog",
          description:
            "With fresh vegetable mix, teriyaki sauce and pickled ginger.",
          prices: ["K 150"],
        },
        {
          name: "Boerewors Roll",
          description:
            "With classic tomato & onion relish and crispy onions.",
          prices: ["K 150"],
        },
      ],
    },
  ],
},

   // ---------------- DRINKS ----------------

  {
    id: "copper-hog",
    name: "Copper Hog",
    logo: "/brands/copper-hog.svg",
    category: "drinks",
    blurb: "“Tap into something stronger”",
    tags: ["Beer", "Ciders", "Cocktails", "Spirits", "Shooters"],
    items: [
      "Ice-cold beers and ciders by the bucket or single.",
      "Copperhog original cocktails and gin spritzes.",
      "A full back bar of whiskies, rums and shooters.",
    ],
    bgColor: "#1f4520",
    textColor: "#ffffff",

    menu: [
      // BEERS
      {
        id: "beers",
        label: "Beers",
        columns: ["Single", "Bucket"],
        items: [
          { name: "Castle Lite",      prices: ["K 60", "K 300"] },
          { name: "Corona",           prices: ["K 80", "K 400"] },
          { name: "Stella",           prices: ["K 70", "K 350"] },
          { name: "Heineken",         prices: ["K 70", "K 350"] },
          { name: "Heineken Silver",  prices: ["K 70", "K 350"] },
          { name: "Windhoek Lager",   prices: ["K 70", "K 350"] },
          { name: "Guinness",         prices: ["K 100", ""] },
          { name: "Rebel Pilsner",    prices: ["K 80", ""] },
          { name: "Rebel Dark Lager", prices: ["K 80", ""] },
        ],
      },

      // CIDERS
      {
        id: "ciders",
        label: "Ciders",
        columns: ["Single", "Bucket"],
        items: [
          { name: "Brutal Fruit",  prices: ["K 60", "K 300"] },
          { name: "Flying Fish",   prices: ["K 60", "K 300"] },
          { name: "Savanna Dry",   prices: ["K 70", "K 350"] },
          { name: "Belgravia",     prices: ["K 80", "K 400"] },
        ],
      },

      // COCKTAILS – ORIGINALS & FRIENDS
      {
        id: "originals",
        label: "Copperhog Originals & Cocktails",
        columns: ["Price"],
        items: [
          { name: "Summer Sangria",          prices: ["K 180"] },
          { name: "The Tipsy Hog Margarita", prices: ["K 180"] },
          { name: "Bloody Mary",             prices: ["K 180"] },
          { name: "Irish Gold",              prices: ["K 180"] },
          { name: "Rum Runner",              prices: ["K 180"] },
          { name: "Aperol Spritz",           prices: ["K 180"] },
          { name: "Mocktails",               prices: ["K 130"] },
          { name: "Ice Tropez",              prices: ["K 250"] },
        ],
      },

      // GIN SPRITZ
      {
        id: "gin-spritz",
        label: "Gin Spritz",
        columns: ["Price"],
        note: "All gin spritz flavours are K180.",
        items: [
          { name: "Cucumber & Mint",             prices: ["K 180"] },
          { name: "Ginger & Peach",              prices: ["K 180"] },
          { name: "Strawberry, Orange & Basil",  prices: ["K 180"] },
          { name: "Guava & Grapefruit",          prices: ["K 180"] },
        ],
      },

      // SPIRITS & SHOTS
      {
        id: "spirits",
        label: "Spirits & Shots",
        columns: ["Shot", "Bottle"],
        items: [
          { name: "Jameson Original",           prices: ["K 50", "K 1200"] },
          { name: "Jameson Black Barrel",       prices: ["K 70", "K 1900"] },
          { name: "Johnnie Walker Black",       prices: ["K 65", "K 1500"] },
          { name: "Monkey Shoulder",            prices: ["K 80", "K 1800"] },
          { name: "The Glenlivet Founders",     prices: ["K 90", "K 2500"] },
          { name: "The Glenlivet 15 YO",        prices: ["K 150", "K 3600"] },
          { name: "Jack Daniels",               prices: ["K 60", "K 1500"] },
          { name: "Jack Daniels Rye",           prices: ["K 60", "K 1500"] },
          { name: "Balvenie 12",                prices: ["K 95", "K 2500"] },
          { name: "Glenmorangie 12",            prices: ["K 90", "K 2500"] },
          { name: "Absolut Original",           prices: ["K 50", "K 1200"] },
          { name: "Triple Three",               prices: ["K 60", "K 900"] },
          { name: "Inverroche",                 prices: ["K 90", "K 1900"] },
          { name: "1964",                       prices: ["K 70", "K 1400"] },
          { name: "KWV",                        prices: ["K 50", "K 950"] },
          { name: "Captain Morgan Spiced Gold", prices: ["K 50", "K 950"] },
          { name: "Captain Morgan Dark Rum",    prices: ["K 50", "K 950"] },
          { name: "Hennessy VS",                prices: ["K 90", "K 2450"] },
          { name: "Hennessy VSOP",              prices: ["K 120", "K 3500"] },
          { name: "Southern Comfort",           prices: ["K 50", "K 1200"] },
        ],
      },

      // SHOOTERS
      {
        id: "shooters",
        label: "Shooters",
        columns: ["Price"],
        items: [
          { name: "Po10cy",              prices: ["K 50"] },
          { name: "Altos Blanco",        prices: ["K 75"] },
          { name: "Altos Reposado",      prices: ["K 75"] },
          { name: "1800 Coconut",        prices: ["K 80"] },
          { name: "Jagermeister",        prices: ["K 60"] },
          { name: "Jagermeister Orange", prices: ["K 60"] },
          { name: "Cactus Jack Oyster",  prices: ["K 75"] },
        ],
      },

      // MIXERS
      {
        id: "mixers",
        label: "Mixers & Soft Drinks",
        columns: ["Price"],
        items: [{ name: "All mixers and softies", prices: ["K 40"] }],
      },
    ],
  },

  {
    id: "pour-house",
    name: "Pour House",
    logo: "/brands/pour-house.svg",
    category: "drinks",
    blurb: "“Coming Soon”",
    tags: ["Wine", "Cocktails", "After-Work"],
    items: [
      "Wine by the glass or bottle, classic cocktails and easy sippers.",
    ],
    bgColor: "#86a988",
    textColor: "#ffffff",
  },
];
