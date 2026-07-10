// Chef Trev Presents - Image Asset URLs
// All images sourced from Google Drive "Manus" folder

export const IMAGES = {
  // Hero folder - primary visual assets
  hero: {
    chefPortrait: "/manus-storage/chef_trev_portrait.jpg",
    peopleDinnerMoment1: "/manus-storage/hero_people_dinner_moment_1.jpg",
    peopleDinnerMoment2: "/manus-storage/hero_people_dinner_moment_2.jpg",
    candlelitTableFilm: "/manus-storage/hero_candlelit_table_film.jpg",
    chefPlating: "/manus-storage/hero_chef_plating.jpg",
    tableCloseUp: "/manus-storage/hero_table_close_up.jpg",
  },

  // Atmosphere folder
  atmosphere: {
    bambooBar: "/manus-storage/atmosphere_bamboo_bar.jpg",
    tableBamboo: "/manus-storage/atmosphere_table_bamboo.jpg",
  },

  // People folder
  people: {
    candlelitTable: "/manus-storage/people_candlelit_table.jpg",
    guestsCandid: "/manus-storage/people_guests_candid.jpg",
    guestsEating: "/manus-storage/people_guests_eating.jpg",
    guestsLaughing: "/manus-storage/people_guests_laughing.jpg",
    laughingChef: "/manus-storage/people_laughing_chef.jpg",
    laughingGuestsFilm: "/manus-storage/people_laughing_guests_film.jpg",
    teamShot: "/manus-storage/people_team_shot.jpg",
  },

  // Events folder
  events: {
    tableCandelit: "/manus-storage/events_Table_candelit.jpg",
    chefSpeakingGuests: "/manus-storage/events_chef_speaking_guests.jpg",
    foodPlating: "/manus-storage/events_food_plating.jpg",
    foodPrep: "/manus-storage/events_food_prep.jpg",
    foodServing: "/manus-storage/events_food_serving.jpg",
    kitchenChefPrep: "/manus-storage/events_kitchen_chef_prep.jpg",
    tableEmpty: "/manus-storage/events_table_empty.jpg",
    tableEmptySet: "/manus-storage/events_table_empty_set.jpg",
    tableFood: "/manus-storage/events_table_food.jpg",
    teamDog: "/manus-storage/events_team_dog.jpg",
  },

  // Food folder
  food: {
    onTable: "/manus-storage/food_on_table.jpg",
    platedKitchen: "/manus-storage/food_plated_kitchen.jpg",
    platedKitchenFilm: "/manus-storage/food_plated_kitchen_film.jpg",
    platedTable: "/manus-storage/food_plated_table.jpg",
    platedTableOverhead: "/manus-storage/food_plated_table_overhead_salad.jpg",
    platingChef: "/manus-storage/food_plating_chef.jpg",
    prepKitchen: "/manus-storage/food_prep_Kitchen.jpg",
    tableCandid: "/manus-storage/food_table_candid.jpg",
  },
} as const;

// Gallery images - curated selection prioritizing people > atmosphere > experience > food
export const GALLERY_IMAGES = [
  { src: IMAGES.hero.peopleDinnerMoment1, alt: "Guests sharing a moment at the chef's table", category: "people" },
  { src: IMAGES.atmosphere.bambooBar, alt: "The bamboo bar at Bamboo Oasis", category: "atmosphere" },
  { src: IMAGES.hero.peopleDinnerMoment2, alt: "Candlelit dinner conversation", category: "people" },
  { src: IMAGES.events.chefSpeakingGuests, alt: "Chef Trev addressing guests", category: "events" },
  { src: IMAGES.people.guestsLaughing, alt: "Guests laughing together", category: "people" },
  { src: IMAGES.hero.candlelitTableFilm, alt: "Candlelit table setting", category: "atmosphere" },
  { src: IMAGES.people.laughingChef, alt: "Chef Trev sharing a laugh", category: "people" },
  { src: IMAGES.atmosphere.tableBamboo, alt: "Dining table in the bamboo garden", category: "atmosphere" },
  { src: IMAGES.events.tableCandelit, alt: "Candlelit event table", category: "events" },
  { src: IMAGES.people.guestsCandid, alt: "Candid guest moments", category: "people" },
  { src: IMAGES.hero.chefPlating, alt: "Chef Trev plating a dish", category: "food" },
  { src: IMAGES.people.candlelitTable, alt: "Guests at a candlelit table", category: "people" },
  { src: IMAGES.events.kitchenChefPrep, alt: "Kitchen preparation", category: "events" },
  { src: IMAGES.people.laughingGuestsFilm, alt: "Guests enjoying the evening", category: "people" },
  { src: IMAGES.events.tableEmptySet, alt: "A beautifully set table awaiting guests", category: "atmosphere" },
  { src: IMAGES.food.platedTable, alt: "Artfully plated dish", category: "food" },
  { src: IMAGES.people.teamShot, alt: "The Chef Trev Presents team", category: "people" },
  { src: IMAGES.events.foodServing, alt: "Dishes being served", category: "events" },
  { src: IMAGES.hero.tableCloseUp, alt: "Table details up close", category: "atmosphere" },
  { src: IMAGES.food.tableCandid, alt: "Food on the table", category: "food" },
  { src: IMAGES.people.guestsEating, alt: "Guests savoring the meal", category: "people" },
  { src: IMAGES.events.tableEmpty, alt: "Empty table in ambient light", category: "atmosphere" },
  { src: IMAGES.food.platedKitchenFilm, alt: "Kitchen plating on film", category: "food" },
  { src: IMAGES.events.teamDog, alt: "Behind the scenes", category: "events" },
] as const;
