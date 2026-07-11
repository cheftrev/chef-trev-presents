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
  { src: IMAGES.hero.peopleDinnerMoment1, alt: "Two guests deep in conversation at the chef's table", category: "people" },
  { src: IMAGES.atmosphere.bambooBar, alt: "The bamboo bar at the Bamboo Oasis, lit for the night", category: "atmosphere" },
  { src: IMAGES.hero.peopleDinnerMoment2, alt: "Guests talking over candlelight, plates still going around", category: "people" },
  { src: IMAGES.events.chefSpeakingGuests, alt: "Trevor telling the table where the night's menu came from", category: "events" },
  { src: IMAGES.people.guestsLaughing, alt: "The whole end of the table cracking up between courses", category: "people" },
  { src: IMAGES.hero.candlelitTableFilm, alt: "The long table on film — candles down the middle, nobody on their phone", category: "atmosphere" },
  { src: IMAGES.people.laughingChef, alt: "Trevor mid-laugh with guests", category: "people" },
  { src: IMAGES.atmosphere.tableBamboo, alt: "The table set under the bamboo, before anyone sits down", category: "atmosphere" },
  { src: IMAGES.events.tableCandelit, alt: "A private event table by candlelight", category: "events" },
  { src: IMAGES.people.guestsCandid, alt: "Guests caught mid-moment — no posing at this table", category: "people" },
  { src: IMAGES.hero.chefPlating, alt: "Trevor plating a course, hands in frame", category: "food" },
  { src: IMAGES.people.candlelitTable, alt: "Faces around the table in the candle glow", category: "people" },
  { src: IMAGES.events.kitchenChefPrep, alt: "Prep in the kitchen before service", category: "events" },
  { src: IMAGES.people.laughingGuestsFilm, alt: "Guests laughing, shot on film", category: "people" },
  { src: IMAGES.events.tableEmptySet, alt: "The table set and waiting — the quiet before the first guest", category: "atmosphere" },
  { src: IMAGES.food.platedTable, alt: "A finished course on the table, ready to pass", category: "food" },
  { src: IMAGES.people.teamShot, alt: "The team — Trevor and Adam — after service", category: "people" },
  { src: IMAGES.events.foodServing, alt: "Platters going down the table, family style", category: "events" },
  { src: IMAGES.hero.tableCloseUp, alt: "Table detail up close — what's in season that week", category: "atmosphere" },
  { src: IMAGES.food.tableCandid, alt: "Food on the table mid-dinner, half passed already", category: "food" },
  { src: IMAGES.people.guestsEating, alt: "Guests eating — the part where the talking stops for a minute", category: "people" },
  { src: IMAGES.events.tableEmpty, alt: "The empty table in low light, end of the night", category: "atmosphere" },
  { src: IMAGES.food.platedKitchenFilm, alt: "Plating in the kitchen, shot on film", category: "food" },
  { src: IMAGES.events.teamDog, alt: "Behind the scenes — the team and the dog who supervises", category: "events" },
] as const;
