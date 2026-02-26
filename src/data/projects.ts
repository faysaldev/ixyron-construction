export interface Project {
  slug: string;
  img: string;
  title: string;
  category: string;
  desc: string;
  client: string;
  location: string;
  duration: string;
  year: string;
  scope: string[];
  challenge: string;
  solution: string;
  result: string;
}

export const projects: Project[] = [
  {
    slug: "oakwood-family-residence",
    img: "/images/project-residential.jpg",
    title: "Oakwood Family Residence",
    category: "Residential",
    desc: "A 4,500 sq ft custom home featuring sustainable materials and smart home technology.",
    client: "The Anderson Family",
    location: "Oakwood Hills, Metro City",
    duration: "14 months",
    year: "2025",
    scope: [
      "Architecture",
      "Construction",
      "Smart Home Integration",
      "Landscaping",
    ],
    challenge:
      "The clients wanted a fully sustainable home with smart technology integration while maintaining a warm, traditional aesthetic on a sloped hillside lot.",
    solution:
      "We designed a terraced foundation that works with the natural slope, used reclaimed wood and recycled steel throughout, and installed a comprehensive smart home system controlling lighting, climate, security, and energy management.",
    result:
      "The home achieved LEED Platinum certification, reduces energy consumption by 60% compared to traditional homes, and was featured in Architectural Digest's 'Homes of the Year' list.",
  },
  {
    slug: "metro-business-center",
    img: "/images/project-commercial.jpg",
    title: "Metro Business Center",
    category: "Commercial",
    desc: "A 12-story commercial complex with modern amenities and LEED Gold certification.",
    client: "Metro Development Corp.",
    location: "Downtown Metro City",
    duration: "24 months",
    year: "2024",
    scope: [
      "Design-Build",
      "Structural Engineering",
      "MEP Systems",
      "LEED Certification",
    ],
    challenge:
      "Building a Class A office tower in a dense urban area with strict environmental regulations and a tight construction timeline.",
    solution:
      "We employed modular construction techniques for the structural core, used BIM technology for precise coordination, and installed high-efficiency HVAC and water systems to achieve sustainability targets.",
    result:
      "Delivered 2 weeks ahead of schedule with LEED Gold certification. The building is now 95% leased and has become a landmark in the downtown skyline.",
  },
  {
    slug: "luxe-living-penthouse",
    img: "/images/project-interior.jpg",
    title: "Luxe Living Penthouse",
    category: "Interior",
    desc: "Complete interior design and fit-out of a luxury penthouse with bespoke furniture.",
    client: "Private Client",
    location: "Skyline Towers, Metro City",
    duration: "8 months",
    year: "2025",
    scope: [
      "Interior Design",
      "Custom Furniture",
      "Lighting Design",
      "Art Curation",
    ],
    challenge:
      "Creating a cohesive luxury interior across 6,000 sq ft of open-plan living space while accommodating an extensive art collection and specific material preferences.",
    solution:
      "We developed a neutral palette of concrete, warm wood, and brushed brass that serves as a backdrop for the art collection. Every furniture piece was custom-designed and handcrafted by local artisans.",
    result:
      "The penthouse was featured in Interior Design Magazine and has become a showcase for our bespoke interior design capabilities.",
  },
  {
    slug: "heritage-kitchen-remodel",
    img: "/images/project-renovation.jpg",
    title: "Heritage Kitchen Remodel",
    category: "Renovation",
    desc: "Full kitchen renovation with marble countertops, custom cabinetry, and premium appliances.",
    client: "The Martinez Family",
    location: "Heritage District, Metro City",
    duration: "4 months",
    year: "2025",
    scope: [
      "Kitchen Design",
      "Structural Modification",
      "Plumbing",
      "Electrical",
    ],
    challenge:
      "Modernizing a century-old kitchen while preserving the historic character of the home and working within the Heritage District's strict renovation guidelines.",
    solution:
      "We carefully preserved original architectural details like crown molding and window frames, while completely rebuilding the kitchen with modern infrastructure hidden behind period-appropriate finishes.",
    result:
      "The kitchen seamlessly blends historic charm with modern functionality, earning approval from the Heritage Preservation Board and a feature in Renovation Monthly.",
  },
  {
    slug: "skyline-office-tower",
    img: "/images/project-commercial.jpg",
    title: "Skyline Office Tower",
    category: "Commercial",
    desc: "State-of-the-art office tower with collaborative workspaces and rooftop amenities.",
    client: "Skyline Properties Ltd.",
    location: "Innovation District, Metro City",
    duration: "18 months",
    year: "2024",
    scope: [
      "Commercial Construction",
      "Workspace Design",
      "Rooftop Development",
      "Sustainability",
    ],
    challenge:
      "Designing flexible office spaces that could accommodate both traditional and modern collaborative work styles, with premium rooftop amenities.",
    solution:
      "We created modular floor plates with movable walls, integrated biophilic design elements throughout, and developed a rooftop featuring a garden, fitness area, and event space.",
    result:
      "The tower has become the most sought-after office address in the Innovation District, with a waitlist for tenancy.",
  },
  {
    slug: "riverside-villas",
    img: "/images/project-residential.jpg",
    title: "Riverside Villas",
    category: "Residential",
    desc: "A collection of 8 waterfront villas with contemporary architecture and private docks.",
    client: "Riverside Development Group",
    location: "River Bend, Metro County",
    duration: "20 months",
    year: "2024",
    scope: [
      "Master Planning",
      "Residential Construction",
      "Waterfront Engineering",
      "Landscaping",
    ],
    challenge:
      "Building luxury waterfront properties that respect the natural environment while providing premium amenities including private boat docks.",
    solution:
      "We used elevated construction techniques to minimize environmental impact, incorporated native landscaping, and engineered custom dock systems that adapt to changing water levels.",
    result:
      "All 8 villas sold before completion. The development received a Green Building Award for environmentally sensitive waterfront construction.",
  },
];
