/* global window */
// Curated Unsplash photo IDs. The Placeholder component falls back to a
// striped SVG label if any URL 404s, so the page degrades gracefully.
const u = (id, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

window.PHOTOS = {
  // Hero — actual Aroma interior photo
  heroInterior: 'uploads/hero-interior.png',
  heroFood: u('1565299624946-b28f40a0ae38', 1400),
  heroTile1: u('1453614512568-c4024d13c34c', 1200),
  heroTile2: u('1565299585323-38d6b0865b47', 900),
  heroTile3: u('1488477181946-6428a0291777', 900),

  // Over / founder
  founder: u('1583394293214-28ded15ee548', 900),

  // Menu items (best-guess matches; falls back to label if 404)
  gyros: u('1561758033-d89a9ad46330', 700),
  bougatsa: u('1551024601-bec78aea704b', 700),
  yogurtBowl: u('1488477181946-6428a0291777', 700),
  grilledVeggies: u('1540420773420-3366772f4999', 700),
  spanakopita: u('1559054663-e9e5c6e6e0e9', 700),
  loukoumades: u('1551024506-0bccd828d307', 700),

  // Gallery (8)
  gal1: u('1517248135467-4c7edcad34c4', 1200),
  gal2: u('1565299624946-b28f40a0ae38', 700),
  gal3: u('1495474472287-4d71bcdd2085', 700),
  gal4: u('1488477181946-6428a0291777', 700),
  gal5: u('1551024601-bec78aea704b', 700),
  gal6: u('1453614512568-c4024d13c34c', 700),
  gal7: u('1414235077428-338989a2e8c0', 1200),
  gal8: u('1502747983583-c9f88beea75d', 700),

  // Instagram strip (6)
  ig1: u('1565299585323-38d6b0865b47', 600),
  ig2: u('1502747983583-c9f88beea75d', 600),
  ig3: u('1488477181946-6428a0291777', 600),
  ig4: u('1551024601-bec78aea704b', 600),
  ig5: u('1453614512568-c4024d13c34c', 600),
  ig6: u('1559054663-e9e5c6e6e0e9', 600),
};
