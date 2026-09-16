export type ProjectImage = {
  src: string;
  alt: string;
  position?: string;
};

export type BeforeAfter = {
  before: ProjectImage;
  after: ProjectImage;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  cover: ProjectImage;
  comparisons?: readonly BeforeAfter[];
  gallery: readonly ProjectImage[];
};

export const projects: readonly Project[] = [
  {
    slug: "compass-patio-garden",
    title: "Compass patio, brick path and pergola",
    description:
      "A multi-area garden improvement combining a distinctive compass patio, traditional brick paths and a pergola-covered outdoor area. The project creates clear routes through the garden while adding practical spaces for seating and relaxation.",
    tags: ["Paving", "Landscaping", "Paths", "Outdoor structures"],
    cover: {
      src: "/projects/compass-patio-garden/compass-garden-path-pergola.webp",
      alt: "Finished brick path leading through the landscaped garden to a pergola",
      position: "center 58%",
    },
    comparisons: [
      {
        before: {
          src: "/projects/compass-patio-garden/compass-patio-before.webp",
          alt: "Lawn marked out before construction of the circular patio",
        },
        after: {
          src: "/projects/compass-patio-garden/compass-patio-after.webp",
          alt: "Completed circular compass patio set into the lawn",
        },
      },
    ],
    gallery: [
      {
        src: "/projects/compass-patio-garden/compass-garden-pergola-after.webp",
        alt: "Pergola-covered outdoor area on a newly paved garden base",
      },
      {
        src: "/projects/compass-patio-garden/compass-patio-seating-after.webp",
        alt: "Circular compass patio furnished as an outdoor seating area",
      },
    ],
  },
  {
    slug: "formal-garden-path",
    title: "Formal garden path",
    description:
      "A new pathway installed through an established garden, with careful excavation and base preparation to create a clean, durable route between mature planting and hedges.",
    tags: ["Paths", "Groundworks", "Landscaping"],
    cover: {
      src: "/projects/formal-garden-path/formal-garden-path-after.webp",
      alt: "Completed straight garden path running between established hedges",
      position: "center 52%",
    },
    comparisons: [
      {
        before: {
          src: "/projects/formal-garden-path/formal-garden-path-before.webp",
          alt: "Excavated route through the garden before the path was installed",
        },
        after: {
          src: "/projects/formal-garden-path/formal-garden-path-after.webp",
          alt: "Completed straight garden path running between established hedges",
        },
      },
    ],
    gallery: [
      {
        src: "/projects/formal-garden-path/formal-garden-path-base.webp",
        alt: "Straight garden path base installed between established planting",
      },
    ],
  },
  {
    slug: "garden-border-wall",
    title: "Garden border and retaining wall",
    description:
      "A garden border improvement using a low retaining wall to define the planting area, tidy the lawn edge and create a more structured finish around established trees and shrubs.",
    tags: ["Landscaping", "Groundworks"],
    cover: {
      src: "/projects/garden-border-wall/garden-border-wall-after.webp",
      alt: "Finished low retaining wall defining a planted garden border",
      position: "center 58%",
    },
    comparisons: [
      {
        before: {
          src: "/projects/garden-border-wall/garden-border-wall-before.webp",
          alt: "Garden border before construction of the retaining wall",
        },
        after: {
          src: "/projects/garden-border-wall/garden-border-wall-after.webp",
          alt: "Finished low retaining wall defining a planted garden border",
        },
      },
    ],
    gallery: [],
  },
  {
    slug: "gravel-landscaping-pergola",
    title: "Gravel paths, landscaping and pergola",
    description:
      "A practical garden refresh combining edged gravel paths, improved lawn areas and a timber pergola for outdoor seating. The finished layout creates low-maintenance access around the garden while retaining its established features.",
    tags: ["Landscaping", "Paths", "Outdoor structures"],
    cover: {
      src: "/projects/gravel-landscaping-pergola/gravel-garden-landscaping-after.webp",
      alt: "Landscaped back garden with gravel paths and a retained feature tree",
      position: "center 58%",
    },
    comparisons: [
      {
        before: {
          src: "/projects/gravel-landscaping-pergola/gravel-garden-before.webp",
          alt: "Back garden before the landscaping and path work began",
        },
        after: {
          src: "/projects/gravel-landscaping-pergola/gravel-garden-pergola-after.webp",
          alt: "Finished lawn and timber pergola seating area",
        },
      },
    ],
    gallery: [
      {
        src: "/projects/gravel-landscaping-pergola/gravel-garden-side-path-after.webp",
        alt: "Finished gravel side path with dark edging beside an outbuilding",
      },
    ],
  },
  {
    slug: "sunken-fire-pit",
    title: "Sunken fire pit",
    description:
      "A precisely constructed sunken fire pit finished with large-format tiles and integrated into the surrounding patio. The stepped design creates a sheltered outdoor gathering space while providing a strong focal point within the garden.",
    tags: ["Paving", "Groundworks"],
    cover: {
      src: "/projects/sunken-fire-pit/sunken-fire-pit-landscape.webp",
      alt: "Completed tiled sunken fire pit viewed across the surrounding patio",
      position: "center 55%",
    },
    gallery: [],
  },
  {
    slug: "new-build-garden-makeover",
    title: "New-build garden transformation",
    description:
      "A complete new-build garden transformation incorporating a paved patio, new lawn, curved gravel paths, raised timber features and a pergola-covered seating area. The design turns an open lawn into a practical garden with distinct spaces for access, planting and relaxation.",
    tags: ["Landscaping", "Paving", "Paths", "Outdoor structures"],
    cover: {
      src: "/projects/new-build-garden-makeover/new-build-garden-overview-after.webp",
      alt: "Completed new-build garden with paved patio, lawn and curved gravel path",
      position: "center 62%",
    },
    comparisons: [
      {
        before: {
          src: "/projects/new-build-garden-makeover/new-build-garden-overview-before.webp",
          alt: "New-build back garden before landscaping work began",
        },
        after: {
          src: "/projects/new-build-garden-makeover/new-build-garden-overview-after.webp",
          alt: "Completed new-build garden with paved patio, lawn and curved gravel path",
        },
      },
      {
        before: {
          src: "/projects/new-build-garden-makeover/new-build-garden-path-before.webp",
          alt: "Lawn marked out before construction of the curved garden path",
        },
        after: {
          src: "/projects/new-build-garden-makeover/new-build-garden-path-after.webp",
          alt: "Finished curved gravel path leading across the landscaped garden",
        },
      },
    ],
    gallery: [
      {
        src: "/projects/new-build-garden-makeover/new-build-garden-pergola-after.webp",
        alt: "Pergola-covered patio and stepping-stone path in the finished garden",
      },
      {
        src: "/projects/new-build-garden-makeover/new-build-garden-construction-process.webp",
        alt: "Raised timber area, path and ground preparation during construction",
      },
      {
        src: "/projects/new-build-garden-makeover/new-build-garden-patio-seating-after.webp",
        alt: "Finished paved seating area overlooking the landscaped garden",
      },
    ],
  },
];
