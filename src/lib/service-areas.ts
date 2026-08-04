// Service-area cities within ~50 miles of the Escondido HQ (1249 Simpson Way, Escondido, CA 92029).
// Drives the /water-filtration/[city] local-SEO pages.

export type RegionKey = "north-coastal" | "san-diego" | "inland-empire" | "south-oc";

export const REGIONS: Record<RegionKey, { label: string; water: string }> = {
  "north-coastal": {
    label: "North County San Diego",
    water:
      "is served largely by imported Colorado River and Northern California water, which arrives hard and heavily chlorinated. That's the scale on your glass shower doors, the white spots on your dishes, and the chemical edge you taste at the tap.",
  },
  "san-diego": {
    label: "San Diego County",
    water:
      "relies on roughly 85% imported, chloramine-treated water, leaving a persistent chlorine taste and mineral hardness that builds up on your fixtures and inside your plumbing and appliances.",
  },
  "inland-empire": {
    label: "the Inland Empire",
    water:
      "is known for some of the hardest water in the region — many homes are on wells or receive very high-mineral supply, which means heavy scale, dry skin and hair, and appliances that wear out years early.",
  },
  "south-oc": {
    label: "South Orange County",
    water:
      "runs hard and chlorinated along the coast, leaving spotty dishes, scale on fixtures, and a chemical taste that a proper filtration system removes for good.",
  },
};

export type City = { slug: string; name: string; county: string; region: RegionKey };

export const CITIES: City[] = [
  // North County San Diego
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
  // San Diego metro / South
  { slug: "san-diego", name: "San Diego", county: "San Diego County", region: "san-diego" },
  { slug: "la-mesa", name: "La Mesa", county: "San Diego County", region: "san-diego" },
  { slug: "el-cajon", name: "El Cajon", county: "San Diego County", region: "san-diego" },
  { slug: "santee", name: "Santee", county: "San Diego County", region: "san-diego" },
  { slug: "lakeside", name: "Lakeside", county: "San Diego County", region: "san-diego" },
  { slug: "chula-vista", name: "Chula Vista", county: "San Diego County", region: "san-diego" },
  { slug: "national-city", name: "National City", county: "San Diego County", region: "san-diego" },
  { slug: "spring-valley", name: "Spring Valley", county: "San Diego County", region: "san-diego" },
  { slug: "coronado", name: "Coronado", county: "San Diego County", region: "san-diego" },
  // Inland Empire (SW Riverside County)
  { slug: "temecula", name: "Temecula", county: "Riverside County", region: "inland-empire" },
  { slug: "murrieta", name: "Murrieta", county: "Riverside County", region: "inland-empire" },
  { slug: "menifee", name: "Menifee", county: "Riverside County", region: "inland-empire" },
  { slug: "lake-elsinore", name: "Lake Elsinore", county: "Riverside County", region: "inland-empire" },
  { slug: "wildomar", name: "Wildomar", county: "Riverside County", region: "inland-empire" },
  { slug: "hemet", name: "Hemet", county: "Riverside County", region: "inland-empire" },
  { slug: "perris", name: "Perris", county: "Riverside County", region: "inland-empire" },
  // South Orange County
  { slug: "san-clemente", name: "San Clemente", county: "Orange County", region: "south-oc" },
  { slug: "san-juan-capistrano", name: "San Juan Capistrano", county: "Orange County", region: "south-oc" },
  { slug: "dana-point", name: "Dana Point", county: "Orange County", region: "south-oc" },
  { slug: "mission-viejo", name: "Mission Viejo", county: "Orange County", region: "south-oc" },
];

export const CITY_MAP: Record<string, City> = Object.fromEntries(CITIES.map((c) => [c.slug, c]));

export function nearbyCities(city: City, limit = 6): City[] {
  return CITIES.filter((c) => c.region === city.region && c.slug !== city.slug).slice(0, limit);
}
