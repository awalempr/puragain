// PurAgain Water Southern California service area.
// Footprint: Santa Barbara and south, Lancaster and south, Indio and west,
// Chula Vista and north, across 7 counties. Drives the /water-filtration/[city]
// local-SEO pages and the /water-filtration/county/[county] hub pages.

export type RegionKey =
  | "north-coastal"
  | "san-diego"
  | "inland-empire"
  | "high-desert"
  | "coachella-valley"
  | "south-oc"
  | "orange-county"
  | "los-angeles"
  | "san-gabriel"
  | "antelope-valley"
  | "ventura"
  | "santa-barbara";

// Each region has a genuinely different water story so city pages are not duplicates.
export const REGIONS: Record<RegionKey, { label: string; water: string }> = {
  "north-coastal": {
    label: "North County San Diego",
    water:
      "is served largely by imported Colorado River and Northern California water, which arrives hard and heavily chlorinated. That is the scale on your glass shower doors, the white spots on your dishes, and the chemical edge you taste at the tap.",
  },
  "san-diego": {
    label: "San Diego County",
    water:
      "relies on roughly 85% imported, chloramine-treated water, leaving a persistent chlorine taste and mineral hardness that builds up on your fixtures and inside your plumbing and appliances.",
  },
  "inland-empire": {
    label: "the Inland Empire",
    water:
      "is known for some of the hardest water in the state. Much of it comes from high-mineral groundwater, which means heavy scale, dry skin and hair, and appliances that wear out years early.",
  },
  "high-desert": {
    label: "the High Desert",
    water:
      "draws on desert groundwater with very high mineral content and hardness. Homes here fight aggressive scale on fixtures and water heaters, chalky spots on everything, and dry skin and hair.",
  },
  "coachella-valley": {
    label: "the Coachella Valley",
    water:
      "comes from a desert aquifer that runs hard and mineral-rich, often with high total dissolved solids. The result is scale on fixtures, cloudy ice and glassware, and a heavy taste that a proper system removes.",
  },
  "south-oc": {
    label: "South Orange County",
    water:
      "runs hard and chlorinated along the coast, leaving spotty dishes, scale on fixtures, and a chemical taste that a proper filtration system removes for good.",
  },
  "orange-county": {
    label: "Orange County",
    water:
      "blends imported Colorado River and State Water Project supply with the local groundwater basin, so most homes get hard, chlorinated water that scales up fixtures and appliances and spots every dish.",
  },
  "los-angeles": {
    label: "Los Angeles County",
    water:
      "runs on imported Colorado River and State Water Project supply that arrives hard and heavily chloraminated. You see it as scale on glassware and fixtures, dry skin and hair, and a chlorine edge at the tap.",
  },
  "san-gabriel": {
    label: "the San Gabriel and San Fernando Valleys",
    water:
      "draws on local groundwater basins blended with imported supply, and it runs consistently hard. The high mineral content scales up plumbing, water heaters, and appliances and leaves spots on every surface.",
  },
  "antelope-valley": {
    label: "the Antelope Valley",
    water:
      "is served by high-desert groundwater and State Water Project supply, some of the hardest, most mineral-heavy water in the region. Expect rapid scale buildup, appliances that wear out early, and dry skin and hair.",
  },
  "ventura": {
    label: "Ventura County",
    water:
      "blends local groundwater, including the notably hard Oxnard Plain aquifer, with imported supply. Most homes see heavy scale, dry skin, spotty dishes, and a chlorine taste at the tap.",
  },
  "santa-barbara": {
    label: "the Santa Barbara South Coast",
    water:
      "is served by a mix of imported State Water Project supply and local reservoirs, arriving hard and chlorinated along the coast. That means scale on fixtures, spots on glassware, and a chemical edge you can taste.",
  },
};

export type City = { slug: string; name: string; county: string; region: RegionKey };

export const CITIES: City[] = [
  // ---------- SAN DIEGO COUNTY (Chula Vista and north) ----------
  { slug: "escondido", name: "Escondido", county: "San Diego County", region: "north-coastal" },
  { slug: "san-marcos", name: "San Marcos", county: "San Diego County", region: "north-coastal" },
  { slug: "vista", name: "Vista", county: "San Diego County", region: "north-coastal" },
  { slug: "carlsbad", name: "Carlsbad", county: "San Diego County", region: "north-coastal" },
  { slug: "oceanside", name: "Oceanside", county: "San Diego County", region: "north-coastal" },
  { slug: "encinitas", name: "Encinitas", county: "San Diego County", region: "north-coastal" },
  { slug: "poway", name: "Poway", county: "San Diego County", region: "north-coastal" },
  { slug: "rancho-bernardo", name: "Rancho Bernardo", county: "San Diego County", region: "north-coastal" },
  { slug: "del-mar", name: "Del Mar", county: "San Diego County", region: "north-coastal" },
  { slug: "solana-beach", name: "Solana Beach", county: "San Diego County", region: "north-coastal" },
  { slug: "ramona", name: "Ramona", county: "San Diego County", region: "north-coastal" },
  { slug: "fallbrook", name: "Fallbrook", county: "San Diego County", region: "north-coastal" },
  { slug: "rancho-santa-fe", name: "Rancho Santa Fe", county: "San Diego County", region: "north-coastal" },
  { slug: "valley-center", name: "Valley Center", county: "San Diego County", region: "north-coastal" },
  { slug: "bonsall", name: "Bonsall", county: "San Diego County", region: "north-coastal" },
  { slug: "cardiff", name: "Cardiff by the Sea", county: "San Diego County", region: "north-coastal" },
  { slug: "4s-ranch", name: "4S Ranch", county: "San Diego County", region: "north-coastal" },
  { slug: "rancho-penasquitos", name: "Rancho Peñasquitos", county: "San Diego County", region: "north-coastal" },
  { slug: "san-diego", name: "San Diego", county: "San Diego County", region: "san-diego" },
  { slug: "la-mesa", name: "La Mesa", county: "San Diego County", region: "san-diego" },
  { slug: "el-cajon", name: "El Cajon", county: "San Diego County", region: "san-diego" },
  { slug: "santee", name: "Santee", county: "San Diego County", region: "san-diego" },
  { slug: "lakeside", name: "Lakeside", county: "San Diego County", region: "san-diego" },
  { slug: "chula-vista", name: "Chula Vista", county: "San Diego County", region: "san-diego" },
  { slug: "national-city", name: "National City", county: "San Diego County", region: "san-diego" },
  { slug: "spring-valley", name: "Spring Valley", county: "San Diego County", region: "san-diego" },
  { slug: "coronado", name: "Coronado", county: "San Diego County", region: "san-diego" },
  { slug: "carmel-valley", name: "Carmel Valley", county: "San Diego County", region: "san-diego" },
  { slug: "scripps-ranch", name: "Scripps Ranch", county: "San Diego County", region: "san-diego" },
  { slug: "mira-mesa", name: "Mira Mesa", county: "San Diego County", region: "san-diego" },
  { slug: "bonita", name: "Bonita", county: "San Diego County", region: "san-diego" },
  { slug: "lemon-grove", name: "Lemon Grove", county: "San Diego County", region: "san-diego" },
  { slug: "alpine", name: "Alpine", county: "San Diego County", region: "san-diego" },

  // ---------- RIVERSIDE COUNTY (Indio and west) ----------
  { slug: "riverside", name: "Riverside", county: "Riverside County", region: "inland-empire" },
  { slug: "moreno-valley", name: "Moreno Valley", county: "Riverside County", region: "inland-empire" },
  { slug: "corona", name: "Corona", county: "Riverside County", region: "inland-empire" },
  { slug: "temecula", name: "Temecula", county: "Riverside County", region: "inland-empire" },
  { slug: "murrieta", name: "Murrieta", county: "Riverside County", region: "inland-empire" },
  { slug: "menifee", name: "Menifee", county: "Riverside County", region: "inland-empire" },
  { slug: "hemet", name: "Hemet", county: "Riverside County", region: "inland-empire" },
  { slug: "san-jacinto", name: "San Jacinto", county: "Riverside County", region: "inland-empire" },
  { slug: "perris", name: "Perris", county: "Riverside County", region: "inland-empire" },
  { slug: "lake-elsinore", name: "Lake Elsinore", county: "Riverside County", region: "inland-empire" },
  { slug: "wildomar", name: "Wildomar", county: "Riverside County", region: "inland-empire" },
  { slug: "canyon-lake", name: "Canyon Lake", county: "Riverside County", region: "inland-empire" },
  { slug: "jurupa-valley", name: "Jurupa Valley", county: "Riverside County", region: "inland-empire" },
  { slug: "eastvale", name: "Eastvale", county: "Riverside County", region: "inland-empire" },
  { slug: "norco", name: "Norco", county: "Riverside County", region: "inland-empire" },
  { slug: "beaumont", name: "Beaumont", county: "Riverside County", region: "inland-empire" },
  { slug: "banning", name: "Banning", county: "Riverside County", region: "inland-empire" },
  { slug: "sun-city", name: "Sun City", county: "Riverside County", region: "inland-empire" },
  { slug: "winchester", name: "Winchester", county: "Riverside County", region: "inland-empire" },
  { slug: "french-valley", name: "French Valley", county: "Riverside County", region: "inland-empire" },
  { slug: "palm-springs", name: "Palm Springs", county: "Riverside County", region: "coachella-valley" },
  { slug: "palm-desert", name: "Palm Desert", county: "Riverside County", region: "coachella-valley" },
  { slug: "indio", name: "Indio", county: "Riverside County", region: "coachella-valley" },
  { slug: "la-quinta", name: "La Quinta", county: "Riverside County", region: "coachella-valley" },
  { slug: "cathedral-city", name: "Cathedral City", county: "Riverside County", region: "coachella-valley" },
  { slug: "rancho-mirage", name: "Rancho Mirage", county: "Riverside County", region: "coachella-valley" },
  { slug: "coachella", name: "Coachella", county: "Riverside County", region: "coachella-valley" },
  { slug: "indian-wells", name: "Indian Wells", county: "Riverside County", region: "coachella-valley" },
  { slug: "desert-hot-springs", name: "Desert Hot Springs", county: "Riverside County", region: "coachella-valley" },

  // ---------- SAN BERNARDINO COUNTY ----------
  { slug: "san-bernardino", name: "San Bernardino", county: "San Bernardino County", region: "inland-empire" },
  { slug: "fontana", name: "Fontana", county: "San Bernardino County", region: "inland-empire" },
  { slug: "rancho-cucamonga", name: "Rancho Cucamonga", county: "San Bernardino County", region: "inland-empire" },
  { slug: "ontario", name: "Ontario", county: "San Bernardino County", region: "inland-empire" },
  { slug: "rialto", name: "Rialto", county: "San Bernardino County", region: "inland-empire" },
  { slug: "chino", name: "Chino", county: "San Bernardino County", region: "inland-empire" },
  { slug: "chino-hills", name: "Chino Hills", county: "San Bernardino County", region: "inland-empire" },
  { slug: "upland", name: "Upland", county: "San Bernardino County", region: "inland-empire" },
  { slug: "redlands", name: "Redlands", county: "San Bernardino County", region: "inland-empire" },
  { slug: "colton", name: "Colton", county: "San Bernardino County", region: "inland-empire" },
  { slug: "yucaipa", name: "Yucaipa", county: "San Bernardino County", region: "inland-empire" },
  { slug: "highland", name: "Highland", county: "San Bernardino County", region: "inland-empire" },
  { slug: "montclair", name: "Montclair", county: "San Bernardino County", region: "inland-empire" },
  { slug: "loma-linda", name: "Loma Linda", county: "San Bernardino County", region: "inland-empire" },
  { slug: "grand-terrace", name: "Grand Terrace", county: "San Bernardino County", region: "inland-empire" },
  { slug: "victorville", name: "Victorville", county: "San Bernardino County", region: "high-desert" },
  { slug: "hesperia", name: "Hesperia", county: "San Bernardino County", region: "high-desert" },
  { slug: "apple-valley", name: "Apple Valley", county: "San Bernardino County", region: "high-desert" },
  { slug: "adelanto", name: "Adelanto", county: "San Bernardino County", region: "high-desert" },

  // ---------- ORANGE COUNTY ----------
  { slug: "anaheim", name: "Anaheim", county: "Orange County", region: "orange-county" },
  { slug: "santa-ana", name: "Santa Ana", county: "Orange County", region: "orange-county" },
  { slug: "irvine", name: "Irvine", county: "Orange County", region: "orange-county" },
  { slug: "huntington-beach", name: "Huntington Beach", county: "Orange County", region: "orange-county" },
  { slug: "garden-grove", name: "Garden Grove", county: "Orange County", region: "orange-county" },
  { slug: "fullerton", name: "Fullerton", county: "Orange County", region: "orange-county" },
  { slug: "orange", name: "Orange", county: "Orange County", region: "orange-county" },
  { slug: "costa-mesa", name: "Costa Mesa", county: "Orange County", region: "orange-county" },
  { slug: "westminster", name: "Westminster", county: "Orange County", region: "orange-county" },
  { slug: "buena-park", name: "Buena Park", county: "Orange County", region: "orange-county" },
  { slug: "tustin", name: "Tustin", county: "Orange County", region: "orange-county" },
  { slug: "yorba-linda", name: "Yorba Linda", county: "Orange County", region: "orange-county" },
  { slug: "fountain-valley", name: "Fountain Valley", county: "Orange County", region: "orange-county" },
  { slug: "placentia", name: "Placentia", county: "Orange County", region: "orange-county" },
  { slug: "cypress", name: "Cypress", county: "Orange County", region: "orange-county" },
  { slug: "brea", name: "Brea", county: "Orange County", region: "orange-county" },
  { slug: "la-habra", name: "La Habra", county: "Orange County", region: "orange-county" },
  { slug: "stanton", name: "Stanton", county: "Orange County", region: "orange-county" },
  { slug: "los-alamitos", name: "Los Alamitos", county: "Orange County", region: "orange-county" },
  { slug: "seal-beach", name: "Seal Beach", county: "Orange County", region: "orange-county" },
  { slug: "newport-beach", name: "Newport Beach", county: "Orange County", region: "orange-county" },
  { slug: "mission-viejo", name: "Mission Viejo", county: "Orange County", region: "south-oc" },
  { slug: "lake-forest", name: "Lake Forest", county: "Orange County", region: "south-oc" },
  { slug: "san-clemente", name: "San Clemente", county: "Orange County", region: "south-oc" },
  { slug: "san-juan-capistrano", name: "San Juan Capistrano", county: "Orange County", region: "south-oc" },
  { slug: "dana-point", name: "Dana Point", county: "Orange County", region: "south-oc" },
  { slug: "laguna-niguel", name: "Laguna Niguel", county: "Orange County", region: "south-oc" },
  { slug: "aliso-viejo", name: "Aliso Viejo", county: "Orange County", region: "south-oc" },
  { slug: "rancho-santa-margarita", name: "Rancho Santa Margarita", county: "Orange County", region: "south-oc" },
  { slug: "laguna-hills", name: "Laguna Hills", county: "Orange County", region: "south-oc" },
  { slug: "laguna-beach", name: "Laguna Beach", county: "Orange County", region: "south-oc" },

  // ---------- LOS ANGELES COUNTY (Lancaster and south) ----------
  { slug: "los-angeles", name: "Los Angeles", county: "Los Angeles County", region: "los-angeles" },
  { slug: "long-beach", name: "Long Beach", county: "Los Angeles County", region: "los-angeles" },
  { slug: "santa-clarita", name: "Santa Clarita", county: "Los Angeles County", region: "los-angeles" },
  { slug: "santa-monica", name: "Santa Monica", county: "Los Angeles County", region: "los-angeles" },
  { slug: "torrance", name: "Torrance", county: "Los Angeles County", region: "los-angeles" },
  { slug: "inglewood", name: "Inglewood", county: "Los Angeles County", region: "los-angeles" },
  { slug: "carson", name: "Carson", county: "Los Angeles County", region: "los-angeles" },
  { slug: "compton", name: "Compton", county: "Los Angeles County", region: "los-angeles" },
  { slug: "gardena", name: "Gardena", county: "Los Angeles County", region: "los-angeles" },
  { slug: "hawthorne", name: "Hawthorne", county: "Los Angeles County", region: "los-angeles" },
  { slug: "culver-city", name: "Culver City", county: "Los Angeles County", region: "los-angeles" },
  { slug: "redondo-beach", name: "Redondo Beach", county: "Los Angeles County", region: "los-angeles" },
  { slug: "manhattan-beach", name: "Manhattan Beach", county: "Los Angeles County", region: "los-angeles" },
  { slug: "downey", name: "Downey", county: "Los Angeles County", region: "los-angeles" },
  { slug: "norwalk", name: "Norwalk", county: "Los Angeles County", region: "los-angeles" },
  { slug: "bellflower", name: "Bellflower", county: "Los Angeles County", region: "los-angeles" },
  { slug: "lakewood", name: "Lakewood", county: "Los Angeles County", region: "los-angeles" },
  { slug: "cerritos", name: "Cerritos", county: "Los Angeles County", region: "los-angeles" },
  { slug: "whittier", name: "Whittier", county: "Los Angeles County", region: "los-angeles" },
  { slug: "la-mirada", name: "La Mirada", county: "Los Angeles County", region: "los-angeles" },
  { slug: "pasadena", name: "Pasadena", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "glendale", name: "Glendale", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "burbank", name: "Burbank", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "alhambra", name: "Alhambra", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "arcadia", name: "Arcadia", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "monterey-park", name: "Monterey Park", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "rosemead", name: "Rosemead", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "el-monte", name: "El Monte", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "west-covina", name: "West Covina", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "covina", name: "Covina", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "glendora", name: "Glendora", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "baldwin-park", name: "Baldwin Park", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "montebello", name: "Montebello", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "pomona", name: "Pomona", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "san-dimas", name: "San Dimas", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "walnut", name: "Walnut", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "diamond-bar", name: "Diamond Bar", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "la-verne", name: "La Verne", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "azusa", name: "Azusa", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "temple-city", name: "Temple City", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "san-gabriel", name: "San Gabriel", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "monrovia", name: "Monrovia", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "claremont", name: "Claremont", county: "Los Angeles County", region: "san-gabriel" },
  { slug: "lancaster", name: "Lancaster", county: "Los Angeles County", region: "antelope-valley" },
  { slug: "palmdale", name: "Palmdale", county: "Los Angeles County", region: "antelope-valley" },

  // ---------- VENTURA COUNTY ----------
  { slug: "oxnard", name: "Oxnard", county: "Ventura County", region: "ventura" },
  { slug: "ventura", name: "Ventura", county: "Ventura County", region: "ventura" },
  { slug: "thousand-oaks", name: "Thousand Oaks", county: "Ventura County", region: "ventura" },
  { slug: "simi-valley", name: "Simi Valley", county: "Ventura County", region: "ventura" },
  { slug: "camarillo", name: "Camarillo", county: "Ventura County", region: "ventura" },
  { slug: "moorpark", name: "Moorpark", county: "Ventura County", region: "ventura" },
  { slug: "ojai", name: "Ojai", county: "Ventura County", region: "ventura" },
  { slug: "santa-paula", name: "Santa Paula", county: "Ventura County", region: "ventura" },
  { slug: "port-hueneme", name: "Port Hueneme", county: "Ventura County", region: "ventura" },

  // ---------- SANTA BARBARA COUNTY (Santa Barbara and south) ----------
  { slug: "santa-barbara", name: "Santa Barbara", county: "Santa Barbara County", region: "santa-barbara" },
  { slug: "goleta", name: "Goleta", county: "Santa Barbara County", region: "santa-barbara" },
  { slug: "carpinteria", name: "Carpinteria", county: "Santa Barbara County", region: "santa-barbara" },
  { slug: "montecito", name: "Montecito", county: "Santa Barbara County", region: "santa-barbara" },
];

export const CITY_MAP: Record<string, City> = Object.fromEntries(CITIES.map((c) => [c.slug, c]));

export function nearbyCities(city: City, limit = 6): City[] {
  const sameRegion = CITIES.filter((c) => c.region === city.region && c.slug !== city.slug);
  if (sameRegion.length >= limit) return sameRegion.slice(0, limit);
  // top up with same-county cities so smaller regions still show neighbors
  const sameCounty = CITIES.filter(
    (c) => c.county === city.county && c.slug !== city.slug && !sameRegion.includes(c)
  );
  return [...sameRegion, ...sameCounty].slice(0, limit);
}

// ---------- Counties (drive the /water-filtration/county/[county] hub pages) ----------
export type County = { slug: string; name: string; water: string };

export const COUNTIES: County[] = [
  {
    slug: "san-diego",
    name: "San Diego County",
    water:
      "San Diego County relies on roughly 85% imported, chloramine-treated water. That leaves homes across the county with a persistent chlorine taste and hard-water minerals that scale up fixtures, water heaters, and appliances.",
  },
  {
    slug: "riverside",
    name: "Riverside County",
    water:
      "Riverside County spans hard inland-valley groundwater in the west and mineral-heavy desert aquifer water across the Coachella Valley. Either way, homes here deal with heavy scale, spotty dishes, and dry skin and hair.",
  },
  {
    slug: "san-bernardino",
    name: "San Bernardino County",
    water:
      "San Bernardino County has some of the hardest water in California, from inland-valley groundwater to the high-desert aquifers around Victorville. Expect aggressive scale, chalky spots, and appliances that wear out early.",
  },
  {
    slug: "orange",
    name: "Orange County",
    water:
      "Orange County blends imported supply with the local groundwater basin, leaving most homes with hard, chlorinated water that scales fixtures and appliances and spots every dish.",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles County",
    water:
      "Los Angeles County is served mostly by imported Colorado River and State Water Project water, hard and heavily chloraminated, with the valleys and the high desert around Lancaster among the hardest in the region.",
  },
  {
    slug: "ventura",
    name: "Ventura County",
    water:
      "Ventura County blends local groundwater, including the notably hard Oxnard Plain aquifer, with imported supply. Most homes see heavy scale, dry skin, and a chlorine taste at the tap.",
  },
  {
    slug: "santa-barbara",
    name: "Santa Barbara County",
    water:
      "The Santa Barbara South Coast runs on a mix of imported State Water Project supply and local reservoirs, arriving hard and chlorinated. That means scale on fixtures, spots on glassware, and a chemical edge you can taste.",
  },
];

export const COUNTY_MAP: Record<string, County> = Object.fromEntries(COUNTIES.map((c) => [c.slug, c]));

export function citiesInCounty(countyName: string): City[] {
  return CITIES.filter((c) => c.county === countyName);
}
