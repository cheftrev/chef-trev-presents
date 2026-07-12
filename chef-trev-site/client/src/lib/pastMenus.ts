// Real menus from past Chef Trev Presents nights, transcribed from printed
// event menus. Dates are shown exactly as printed (no year was on the
// originals) -- never invented. Alcohol/cocktail content is intentionally
// omitted sitewide, including from these archived menus.

export type PastDish = {
  name: string;
  description: string;
};

export type PastMenu = {
  slug: string;
  eyebrow: string;
  title: string;
  occasion?: string;
  date?: string;
  dishes: PastDish[];
  team: string[];
  credit?: string;
};

export const PAST_MENUS: PastMenu[] = [
  {
    slug: "serving-gratitude",
    eyebrow: "Community Dinner",
    title: "Serving Gratitude",
    occasion: "Bring the Attitude — hosted by Justin Compito",
    dishes: [
      { name: "Crudité Board", description: "Seasonal vegetables with classic lemon hummus & roasted red pepper hummus, topped with pepitas." },
      { name: "Za'atar Flatbreads", description: "Veg — spanakopita-inspired with greens, feta & herbs. Non-veg — red sauce, prosciutto & parmesan." },
      { name: "Kale Caesar Salad", description: "Crisp kale tossed in our house lemon-caesar dressing with crispy chickpeas." },
      { name: "Roasted Carrots over Labneh", description: "Harissa-roasted carrots layered over creamy labneh." },
      { name: "Whipped Butternut Squash", description: "Silky squash purée infused with garlic & sage." },
      { name: "14-Hour Slow-Cooked Brisket", description: "Tender brisket finished with its own jus." },
      { name: "Flourless Chocolate Cake", description: "Rich dark chocolate with pomegranate & raspberry sauce." },
    ],
    team: ["Head Chef, Trevor Brown", "Sous Chef, Ren Shaw", "Head of Experience, Adam Sanchez"],
  },
  {
    slug: "la-dolce-vita",
    eyebrow: "Birthday Celebration",
    title: "La Dolce Vita",
    occasion: "Steeve's Birthday Brunch Celebration",
    date: "Feb. 7th",
    dishes: [
      { name: "Crostini", description: "Whipped feta, olive tapenade, toasted organic sourdough." },
      { name: "Arugula Lemon Caesar", description: "Baby arugula, shaved parmesan, lemon-caesar dressing." },
      { name: "Breaded Chicken", description: "Organic crispy cutlets, heirloom tomatoes, fresh basil, aged balsamic." },
      { name: "Spinach & Ricotta Pasta", description: "Creamy ricotta, wilted spinach, garlic, parmesan." },
      { name: "Tiramisu", description: "Classic Sorrento-style tiramisu with orange zest." },
    ],
    team: ["Head Chef, Trevor Brown", "Head of Experience, Adam Sanchez", "Live Cello, Sebastian Lee"],
  },
  {
    slug: "a-taste-of-lebanon",
    eyebrow: "Brand Collaboration",
    title: "A Taste of Lebanon",
    occasion: "In collaboration with Skaf's",
    date: "Nov. 9th",
    dishes: [
      { name: "Mezze Platter", description: "Cucumber, za'atar chips, hummus, babaghanoush, yogurt." },
      { name: "Fresh Tabbouleh", description: "Parsley, mint, tomato, lemon." },
      { name: "Fire-Roasted Carrots over Labneh", description: "Sunrise Organic Farm oak-fired carrots, labneh, local honey, mint, pepita." },
      { name: "Smash Potatoes with Garlic & Herbs", description: "Crispy gold potatoes, roasted garlic, parsley." },
      { name: "Whole-Roasted Cauliflower", description: "Roasted cauliflower, Skaf spice blend, muhammara base." },
      { name: "Za'atar Crispy Rice", description: "Crispy jasmine rice, za'atar, lemon." },
      { name: "Chicken & Kafta Skewers", description: "Oak-fired chicken and kafta, toum." },
      { name: "Osmalieh", description: "Skaf family recipe from Aunt Marleane." },
    ],
    team: ["Head Chef, Trevor Brown", "Head of Experience, Adam Sanchez", "Sous Chef, Jayden Martinez", "Lead Server, Fernando Villegas"],
    credit: "Proudly featuring Sunrise Organic Farm's produce",
  },
  {
    slug: "a-celebration-of-our-land",
    eyebrow: "Chef's Table",
    title: "A Celebration of Our Land",
    occasion: "A Chef's Table Experience",
    date: "Nov. 21st",
    dishes: [
      { name: "Mushroom Avocado Tostada", description: "Crispy corn, avocado, feta, pepitas." },
      { name: "Soy-Glazed Delicata Squash", description: "Hoisin, sriracha, sesame, peanut sauce." },
      { name: "Charred Broccolini & Broccoli", description: "Beet hummus, lemon, parmesan." },
      { name: "Sesame Salad", description: "Dew drop cabbage, bok choy, scallion, furikake, citrus-soy." },
      { name: "Butternut Squash Chicken Pasta", description: "Sage, slow-cooked chicken, parmesan." },
      { name: "Flourless Chocolate Cake", description: "Salted caramel, raspberry, pomegranate." },
    ],
    team: ["Head Chef, Trevor Brown", "Sous Chef, Ren Shaw", "Head of Experience, Adam Sanchez"],
    credit: "Proudly serving Sunrise Organic Farm's produce",
  },
  {
    slug: "lovers-of-life",
    eyebrow: "Valentine's Day",
    title: "Lovers of Life",
    occasion: "A Valentine's Day Culinary Experience",
    date: "Feb. 14th",
    dishes: [
      { name: "Crostini", description: "Whipped feta, olive tapenade, toasted organic sourdough." },
      { name: "Little Gem Salad", description: "Charred lemon vinaigrette." },
      { name: "Braised Beef Short Ribs", description: "Braising jus, thyme." },
      { name: "Rosemary Garlic Mashed Potatoes", description: "Slow-roasted garlic, rosemary, oat milk." },
      { name: "Broccolini", description: "Lemon, crispy fried shallots." },
      { name: "Flourless Chocolate Cake", description: "Raspberry sauce, rose-water ice cream." },
    ],
    team: ["Head Chef, Trevor Brown", "Sous Chef, Ren Shaw", "Head of Experience, Adam Sanchez", "Live Cello, Luke Wilder"],
  },
  {
    slug: "dogs-only-supper-club",
    eyebrow: "Brand Collaboration",
    title: "Dogs Only: Supper Club",
    occasion: "A human menu — and a pup menu, sponsored by Edgard & Cooper",
    dishes: [
      { name: "Whipped Feta Crostini", description: "Toasted crostini with whipped feta, pesto, cherry tomatoes, and microgreens." },
      { name: "Organic Pesto Pasta", description: "Fresh pasta tossed in vibrant house-made pesto." },
      { name: "Lemon Caper Chicken", description: "Organic chicken thighs braised with lemon, capers, and herbs." },
      { name: "Family-Style Caesar Salad", description: "Crisp arugula with parmesan, crispy chickpeas, and house lemon vinaigrette." },
      { name: "Flourless Chocolate Cake", description: "Rich flourless chocolate cake and homemade strawberry sauce." },
    ],
    team: ["Head Chef, Trevor Brown", "Sous Chef, Ren Shaw", "Head of Experience, Adam Sanchez", "In partnership with Vanessa Steinmann"],
    credit: "Pup menu sponsored by Edgard & Cooper",
  },
  {
    slug: "a-night-in-cartagena",
    eyebrow: "Destination Night",
    title: "A Night in Cartagena",
    date: "3/13",
    dishes: [
      { name: "Mushroom + Aji Tostadas", description: "Tortilleria La California tostadas, roasted beech mushrooms, charred pineapple, lime crema." },
      { name: "Citrus Ceviche", description: "Fresh fish, lime, herbs, chili, red onion." },
      { name: "Caribbean Coconut Rice", description: "Fresh coconut, citrus zest." },
      { name: "Bright Beet Salad", description: "Roasted beets, cucumber, red onion, bell pepper, citrus, herbs, olive oil, salt." },
      { name: "Caribbean-Spiced Brisket", description: "12-hour pulled brisket, citrus, warm spices, herbs." },
      { name: "Passion Fruit Sorbet & Flourless Chocolate Cake", description: "Honey, powdered sugar." },
    ],
    team: ["Head Chef, Trevor Brown", "Sous Chef, Ren Shaw", "Head of Experience, Adam Sanchez", "Head of Content, Alexandria Salazar", "Director of Photography, Alisha Jucevic"],
  },
  {
    slug: "a-rooted-futures-fundraising-feast",
    eyebrow: "Fundraiser",
    title: "A Rooted Futures Fundraising Feast",
    date: "4/11",
    dishes: [
      { name: "Root Vegetable Terrine Crostini", description: "Whipped goat cheese, fresh herbs." },
      { name: "Saffron Rice Pilaf", description: "Currants, toasted almonds, candied Swiss chard stems." },
      { name: "Roasted Japanese Sweet Potatoes", description: "Coriander spice, tahini." },
      { name: "Honey Roasted Carrots", description: "Labneh, herbs." },
      { name: "Roasted Herbed Chicken & Mushrooms", description: "Sugar snap peas, garlic butter." },
      { name: "Spiced Parsnip Cake", description: "Lemon black sesame buttercream frosting." },
    ],
    team: ["Head Chef, Trevor Brown", "Head of Experience, Adam Sanchez", "Host & Guest Chef, Melissa Schwimmer", "Host & Founder, Brett Fleisher"],
    credit: "Proudly serving local produce from Santa Monica and South Pasadena Farmers Markets",
  },
  {
    slug: "chef-trev-and-jaxxnsax",
    eyebrow: "Live Music Collaboration",
    title: "A Night with Chef Trev & Jaxxnsax",
    date: "4/17",
    dishes: [
      { name: "Za'atar Flatbread", description: "Lemon, tahini, fresh herbs." },
      { name: "Little Gem Caesar", description: "Shaved dill, sourdough breadcrumbs, lemon, black pepper, pine nuts." },
      { name: "Roasted Japanese Sweet Potatoes", description: "Lemon tahini, thyme, citrus zest, truffle heat." },
      { name: "Roasted Rainbow Carrots", description: "White bean purée, carrot top pesto, herbs." },
      { name: "Saffron Rice Pilaf", description: "Toasted almonds, currants, caramelized onion, herbs." },
      { name: "Slow-Roasted Grass-Fed Brisket", description: "Green herb sauce, garlic confit, pickled red onion." },
      { name: "Chocolate Profiterole", description: "Hazelnut crunch, chocolate ganache." },
    ],
    team: ["Head Chef, Trevor Brown", "Guest Chef, Jacqueline Spiegel", "Head of Experience, Adam Sanchez", "Live Cellist, Luke Wilder"],
    credit: "Proudly serving local produce from Sunrise Organic Farms",
  },
  {
    slug: "dogs-only-brunch-club",
    eyebrow: "Brand Collaboration",
    title: "Dogs Only: Brunch Club",
    occasion: "A human menu — and a pup menu, in partnership with Vanessa Steinmann",
    dishes: [
      { name: "Peanut Butter & Black Sesame Toast", description: "Banana, honey drizzle." },
      { name: "Summer Farmer's Market Salad", description: "" },
      { name: "Leek, Zucchini & Feta Frittata", description: "With house pesto and crispy bacon." },
      { name: "Strawberries with Mint & Honey", description: "" },
      { name: "Fresh Blueberry Muffins", description: "" },
    ],
    team: ["Head Chef, Trevor Brown", "Head of Experience, Adam Sanchez", "In partnership with Vanessa Steinmann", "Dogs Only Social Club"],
    credit: "Pup menu sponsored by Edgard & Cooper",
  },
  {
    slug: "dry-humor-comedy-dinner",
    eyebrow: "Comedy Collaboration",
    title: "Dry Humor",
    occasion: "A Comedy Dinner Experience, x Season Of",
    date: "5/31",
    dishes: [
      { name: "Tin Fish Summer Toast", description: "Toasted sourdough, whipped feta, tinned fish, heirloom tomato, fresh basil, garlic, balsamic." },
      { name: "Summer Salad", description: "Seasonal greens, farmers market vegetables, lemon vinaigrette." },
      { name: "Grilled Chicken over Arugula", description: "Grilled chicken and peppery arugula." },
      { name: "Farmer's Market Zucchini & Sweet Onions", description: "Zucchini, sweet onions, olive oil, sea salt." },
      { name: "Crispy Saffron Rice", description: "Saffron, jasmine rice, olive oil, sea salt." },
      { name: "Flourless Chocolate Cake", description: "Served with baobab ice cream and raspberry sauce." },
    ],
    team: ["Head Chef, Trevor Brown", "Head of Experience, Adam Sanchez", "Sous-Chef, Kuda-Grace", "Host Partner, Taylor Roberts"],
    credit: "Proudly serving local Sunrise Organic Farms",
  },
  {
    slug: "living-by-design-showhouse",
    eyebrow: "Brand Collaboration",
    title: "Living by Design",
    occasion: "Virtual Showhouse Luncheon — brought to you by Embello, Luxe Interiors + Design, and Western",
    dishes: [
      { name: "Summer Garden Tostada", description: "Avocado, enoki mushrooms, tomato, cilantro, pickled red onion." },
      { name: "Farmers Market Salad", description: "Seasonal vegetables, arugula, parmesan, lemon vinaigrette." },
      { name: "Lime Crispy Rice", description: "Fresh herbs and citrus." },
      { name: "Grilled Chicken Thighs", description: "Springy churri of fresh herbs, grilled asparagus, scallions, peas, lemon, radish." },
      { name: "Cape Grim 100% Grass-Fed Tri-Tip", description: "Marinated and grilled, served with chimichurri." },
      { name: "Flourless Chocolate Cake", description: "Served with baobab ice cream and raspberry sauce." },
    ],
    team: ["Head Chef, Trevor Brown", "Sous-Chef, Kuda-Grace"],
    credit: "Proudly serving local produce from Sunrise Organic Farms",
  },
  {
    slug: "a-celebration-of-new-beginnings",
    eyebrow: "Milestone Celebration",
    title: "A Celebration of New Beginnings",
    date: "6/6",
    dishes: [
      { name: "Seasonal Crudité Board", description: "Seasonal vegetables served with house hummus." },
      { name: "Chef's Surprise Brisket Tostada", description: "Slow-braised brisket layered on tostada with seasonal garnishes." },
      { name: "Summer Market Salad", description: "Arugula, seasonal lettuces, farmers market vegetables, sourdough croutons, lemon-Dijon vinaigrette." },
      { name: "Grilled Wagyu NY Strip Steak", description: "Full Blood American Wagyu served with house chimichurri." },
      { name: "Herb Butter Lobster Tail", description: "Lobster tail finished with a light herb butter." },
      { name: "Crispy Lime Cilantro Rice", description: "Fragrant jasmine rice with fresh lime and cilantro." },
      { name: "Charred Zucchini", description: "Grilled zucchini with garlic, lemon, and fresh herbs." },
      { name: "Flourless Chocolate Cake", description: "Fresh raspberry sauce and baobab ice cream." },
    ],
    team: ["Head Chef, Trevor Brown", "Service Captain, Adam Sanchez"],
    credit: "Proudly serving local produce from Sunrise Organic Farms",
  },
  {
    slug: "katies-ultimate-girl-dinner",
    eyebrow: "Private Celebration",
    title: "Katie's Ultimate Girl Dinner",
    occasion: "Celebrating Katie — where little luxuries, nostalgic comforts, and beautiful company come together around one table",
    date: "6/20",
    dishes: [
      { name: "Golden Potato Crisps", description: "Crème fraîche, chives & caviar." },
      { name: "House Caesar Salad", description: "Parmesan, black pepper & toasted sourdough croutons." },
      { name: "Buttermilk Crispy Chicken", description: "Organic chicken thigh, house garlic aioli, honey mustard & Japanese barbecue sauce." },
      { name: "Baked Rigatoni Mac & Cheese", description: "Sharp cheddar, gruyère & golden edges." },
      { name: "Rosemary Roasted Potatoes", description: "Rosemary & flaky sea salt." },
      { name: "Grilled Steak au Chimichurri", description: "Grass-fed flank steak, house chimichurri." },
      { name: "Classic Tiramisu", description: "Laurel's latte-soaked ladyfingers, mascarpone & cocoa." },
    ],
    team: ["Head Chef, Trevor Brown", "Service Captain, Adam Sanchez"],
  },
];
