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
      note: "All pizzas are K180.",
      columns: ["Price"],
      items: [
        {
          name: "The Boerie Bella",
          description:
            "Boerewors, caramelised onion & peppadew with a balsamic glaze.",
          prices: ["K180"],
        },
        {
          name: "The Pumpkin Don",
          description:
            "Pumpkin, caramelised onion, feta & sage.",
          prices: ["K180"],
        },
        {
          name: "The Banano Baconio",
          description: "Bacon and banana.",
          prices: ["K180"],
        },
        {
          name: "The Brie-lissimo",
          description: "Brie, fig jam & crispy bacon.",
          prices: ["K180"],
        },
        {
          name: "Hot Sopran-oh!",
          description: "Salami & a hot honey drizzle.",
          prices: ["K180"],
        },
        {
          name: "BBQ Bambino",
          description: "BBQ chicken & mushroom.",
          prices: ["K180"],
        },
        {
          name: "Philly Mozzino",
          description: "Philly cheesesteak.",
          prices: ["K180"],
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
  items: [
    "Street-style corn, loaded nachos and loud, messy tacos."
  ],
  bgColor: "#b42025",
  textColor: "#ffffff",

  menu: [
    {
      id: "snacks",
      label: "Snacks",
      columns: ["Price"],
      items: [
        {
          name: "Elotes",
          description:
            "Small bite, big attitude. Grilled sweet corn with house sauce, feta and tajin.",
          prices: ["K 90"],
        },
        {
          name: "Nachos",
          description:
            "Share if you dare. Vegetarian | Chicken | Beef. All served with pickled onions, avocado cream & sour cream.",
          prices: ["K 150"],
        },
      ],
    },
    {
      id: "tacos",
      label: "Tacos",
      columns: ["Price"],
      note: "Loud. Messy. Perfect.",
      items: [
        { name: "Chicken Taco", prices: ["K 150"] },
        { name: "Pork Taco", prices: ["K 150"] },
        { name: "Beef Steak Taco", prices: ["K 150"] },
        { name: "Crayfish Taco", prices: ["K 150"] },
        { name: "Roasted Cauliflower Taco", prices: ["K 150"] },
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
  items: [
    "Paprika stir-fry, Korean pulled beef and balsamic noodz bowls."
  ],
  bgColor: "#000000",
  textColor: "#ffffff",

  menu: [
    {
      id: "bowls",
      label: "Noodz Bowls",
      columns: ["Price"],
      items: [
        {
          name: "Paprika Stir-Fry",
          description:
            "Bok choy, seasonal veg, and a paprika kick. Choose your partner: chicken | beef | tofu. Get tossed.",
          prices: [""], // fill in e.g. "K 150"
        },
        {
          name: "Korean Pulled Beef",
          description:
            "Slow-cooked, saucy, and falls apart at the touch. Go ahead... pull it.",
          prices: [""], // fill in price
        },
        {
          name: "Balsamic Noodz",
          description:
            "Tangy balsamic, seasonal veg, glossy noodles. Choose your partner: chicken | beef | tofu. Make it exciting.",
          prices: [""], // fill in price
        },
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
  // You can keep these as general highlights if you like
  items: ["Hand-folded dumplings and wontons, 6 pieces per serving."],
  bgColor: "#e6c61f",
  textColor: "#000000",

  menu: [
    {
      id: "dumplings",
      label: "Dumplings",
      columns: ["Price"],
      note: "All dumplings are 6 for K150.",
      items: [
        { name: "Beef & Kimchi",                          prices: ["K 150"] },
        { name: "Pork & Butternut",                       prices: ["K 150"] },
        { name: "Chicken & Pickled Cabbage",              prices: ["K 150"] },
        {name: "__title__", label: "Optional Items", prices: [] },
          
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
  // required by your Brand type: quick highlight lines
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
          prices: [""], // fill with "K 150" when ready
        },
        {
          name: "Pulled BBQ Beef",
          description: "With pulled beef and BBQ sauce.",
          prices: [""],
        },
        {
          name: "Mediterranean Chicken",
          description:
            "Shredded chicken, tomato & cucumber salad, tzatziki & feta crumble.",
          prices: [""],
        },
      ],
    },

    {
      id: "loaded-dogs",
      label: "Loaded Dogs",
      note: "All loaded dogs are K150.",
      columns: ["Price"],
      items: [
        {
          name: "Korean Slaw Dog",
          description: "",
          prices: [""],
        },
        {
          name: "Jalapeño Popper Dog",
          description: "Cream cheese, pickled jalapeños & bacon.",
          prices: [""],
        },
        {
          name: "New York Style Hot Dog",
          description:
            "Pickled cabbage, tomato & onion relish, crispy onions.",
          prices: [""],
        },
        {
          name: "Teriyaki Dog",
          description: "Fresh vegetable mix and pickled ginger.",
          prices: [""],
        },
        {
          name: "Boerewors Roll",
          description: "Classic tomato & onion gravy.",
          prices: [""],
        },
      ],
    },
  ],
},



 
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
  },

  // ---------------- DRINKS ----------------

  {
  id: "copper-hog",
  name: "Copper Hog",
  logo: "/brands/copper-hog.svg",
  category: "drinks",
  blurb: "“Tap into something stronger”",
  tags: ["Beer", "Ciders", "Cocktails", "Spirits", "Shooters"],
  // You can keep or adjust these highlight blurbs:
  items: [
    "Ice-cold beers and ciders by the bucket or single.",
    "Copperhog original cocktails and gin spritzes.",
    "A full back bar of whiskies, rums and shooters."
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
        { name: "Castle Lite",        prices: ["K 60", "K 300"] },
        { name: "Corona",             prices: ["K 80", "K 400"] },
        { name: "Stella",             prices: ["K 70", "K 350"] },
        { name: "Heineken",           prices: ["K 70", "K 350"] },
        { name: "Heineken Silver",    prices: ["K 70", "K 350"] },
        { name: "Windhoek Draught",   prices: ["K 70", "K 350"] },
        { name: "Guinness",           prices: ["K 90", ""] },
        { name: "Rebel Pilsner",      prices: ["K 75", ""] },
        { name: "Rebel Dark Lager",   prices: ["K 75", ""] }
      ]
    },

    // CIDERS
    {
      id: "ciders",
      label: "Ciders",
      columns: ["Single", "Bucket"],
      items: [
        { name: "Brutal Fruit",  prices: ["K 60", "K 300"] },
        { name: "Flying Fish",   prices: ["K 60", "K 300"] },
        { name: "Savanna Dry",   prices: ["K 70", "K 350"] }
      ]
    },

    // COCKTAILS – COPPERHOG ORIGINALS
    {
      id: "originals",
      label: "Copperhog Originals",
      columns: ["Price"],
      items: [
        { name: "Summer Sangria",          prices: ["K 180"] },
        { name: "The Tipsy Hog Margarita", prices: ["K 180"] },
        { name: "Bloody Mary",            prices: ["K 180"] },
        { name: "Irish Gold",             prices: ["K 180"] },
        { name: "Rum Runner",             prices: ["K 180"] },
        { name: "Ice Tropez",             prices: ["K 250"] }
      ]
    },

    {
  id: "gin-spritz",
  label: "Gin Spritz",
  columns: ["Price"],
  items: [
    { name: "Cucumber & Mint", prices: ["K150"] },
    { name: "Ginger & Peach", prices: ["K150"] },
    { name: "Strawberry, Orange & Basil", prices: ["K150"] },
    { name: "Guava & Grapefruit", prices: ["K150"] }
  ]
},


    // SPIRITS & SHOTS
    {
      id: "spirits",
      label: "Spirits & Shots",
      columns: ["Shot", "Bottle"],
      items: [
        { name: "Jameson Original",           prices: ["50", "1200"] },
        { name: "Jameson Black Barrel",       prices: ["70", "1900"] },
        { name: "Johnnie Walker Black",       prices: ["65", "1500"] },
        { name: "Monkey Shoulder",            prices: ["80", "1800"] },
        { name: "The Glenlivet Founders",     prices: ["90", "2500"] },
        { name: "The Glenlivet 15 YO",        prices: ["150", "3600"] },
        { name: "Jack Daniels",               prices: ["60", "1500"] },
        { name: "Jack Daniels Rye",           prices: ["60", "1500"] },
        { name: "Balvenie 12",                prices: ["95", "2500"] },
        { name: "Glenmorangie 12",            prices: ["90", "2500"] },
        { name: "Absolut Original",           prices: ["50", "1200"] },
        { name: "Triple Three",               prices: ["60", "900"] },
        { name: "Inverroche",                 prices: ["90", "1900"] },
        { name: "1964",                       prices: ["70", "1400"] },

        { name: "KWV",                        prices: ["50", "950"] },
        { name: "Captain Morgan Spiced Gold", prices: ["50", "950"] },
        { name: "Captain Morgan Dark Rum",    prices: ["50", "950"] },
        { name: "Hennessy VS",                prices: ["90", "2450"] },
        { name: "Hennessy VSOP",              prices: ["120", "3500"] },
        { name: "Southern Comfort",           prices: ["50", "1200"] }
      ]
    },

    // SHOOTERS
    {
      id: "shooters",
      label: "Shooters",
      columns: ["Price"],
      items: [
        // Please double-check the spelling of “Po10cy” on your side; I’ve kept it as it appears.
        { name: "Po10cy",              prices: ["K 50"] },
        { name: "Altos Blanco",        prices: ["K 75"] },
        { name: "Altos Reposado",      prices: ["K 75"] },
        { name: "1800 Coconut",        prices: ["K 80"] },
        { name: "Jagermeister",        prices: ["K 60"] },
        { name: "Jagermeister Orange", prices: ["K 60"] }
      ]
    },

    // MIXERS
    {
      id: "mixers",
      label: "Mixers & Soft Drinks",
      columns: ["Price"],
      items: [
        { name: "All mixers and softies", prices: ["K 40"] }
      ]
    }
  ]
},


  {
    id: "pour-house",
    name: "Pour House",
    logo: "/brands/pour-house.svg",
    category: "drinks",
    blurb: "“Your midweek merit moment”",
    tags: ["Wine", "Cocktails", "After-Work"],
    items: [
      "Wine by the glass or bottle, classic cocktails and easy sippers.",
    ],
    bgColor: "#86a988",
    textColor: "#ffffff",
  },
];
