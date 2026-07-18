export type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: readonly string[];
  image: {
    src: string;
    alt: string;
    position?: string;
  };
};

export const services: readonly Service[] = [
  {
    slug: "groundworks-site-development",
    title: "Groundworks and site development",
    summary:
      "Reliable preparation and groundwork for residential construction, development sites and outdoor projects.",
    bullets: [
      "Site clearance and preparation",
      "Excavation and ground levelling",
      "Foundations",
      "Drainage",
      "Residential development groundworks",
    ],
    image: {
      src: "/projects/new-build-garden-makeover/new-build-garden-construction-process.webp",
      alt: "Ground and timber preparation during an outdoor construction project",
      position: "center 58%",
    },
  },
  {
    slug: "driveways-patios-paths",
    title: "Driveways, patios and paths",
    summary:
      "Durable, carefully finished surfaces designed around the way each property and outdoor space is used.",
    bullets: [
      "Driveways and parking areas",
      "Patios and paved seating areas",
      "Garden paths",
      "Block paving",
      "Concrete work",
    ],
    image: {
      src: "/projects/compass-patio-garden/compass-patio-after.webp",
      alt: "Completed circular compass patio set into a lawn",
      position: "center 58%",
    },
  },
  {
    slug: "landscaping-garden-transformations",
    title: "Landscaping and garden transformations",
    summary:
      "Practical garden improvements that bring together access, planting, structure and spaces for everyday use.",
    bullets: [
      "Complete garden transformations",
      "Lawns and turfing",
      "Gravel landscaping",
      "Retaining walls and borders",
      "Ground preparation and finishing",
    ],
    image: {
      src: "/projects/new-build-garden-makeover/new-build-garden-overview-after.webp",
      alt: "Completed landscaped garden with a paved patio, lawn and curved path",
      position: "center 62%",
    },
  },
  {
    slug: "fencing-outdoor-structures",
    title: "Fencing and outdoor structures",
    summary:
      "Functional boundaries and outdoor features built to complement the wider garden or site layout.",
    bullets: [
      "Fencing and gates",
      "Pergolas",
      "Outdoor seating areas",
      "Bespoke garden features",
    ],
    image: {
      src: "/projects/gravel-landscaping-pergola/gravel-garden-pergola-after.webp",
      alt: "Timber pergola seating area in a finished landscaped garden",
      position: "center 55%",
    },
  },
];
