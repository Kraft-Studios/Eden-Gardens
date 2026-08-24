import aboutImg from "@/assets/about.jpg";
import careVisit from "@/assets/care-visit.jpg";
import doorstep from "@/assets/doorstep.jpg";
import finish from "@/assets/finish.jpg";
import heroLawn from "@/assets/hero-lawn.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import ours from "@/assets/ours.jpg";
import watering from "@/assets/ef0b7524303b8fc36c471329dd8976b0.jpg";
import maintainance from "@/assets/maintainance.jpg";
import garden from "@/assets/garden.jpg";
import lawn from "@/assets/lawn.jpg";
import manWorking from "@/assets/man_working.jpg";
import out from "@/assets/out.jpg";
import mhlanga from "@/assets/mhlanga.jpg";
import treefall from "@/assets/treefall.jpg";

export const GALLERY_CATEGORIES = [
  "Lawns",
  "Garden Maintenance",
  "Mowing",
  "Tree Work",
  "Outdoor Spaces",
  "Finished Work",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  width: number;
  height: number;
};

/**
 * Central gallery catalogue. Add new images here — no component changes needed.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "hero-lawn",
    src: heroLawn,
    alt: "A freshly mown coastal South African garden lawn bordered by indigenous shrubs",
    caption: "Coastal garden lawn",
    category: "Outdoor Spaces",
    width: 1920,
    height: 1400,
  },
  {
    id: "doorstep",
    src: doorstep,
    alt: "A garden worker mowing a lawn in a coastal South African garden",
    caption: "Local garden care",
    category: "Mowing",
    width: 1408,
    height: 1008,
  },
  {
    id: "work-3",
    src: work3,
    alt: "Tidy garden bed with fresh mulch and clipped shrubs",
    caption: "Garden maintenance",
    category: "Garden Maintenance",
    width: 1200,
    height: 1200,
  },
  {
    id: "care-visit",
    src: careVisit,
    alt: "Gloved hands trimming a green hedge with garden shears",
    caption: "Care in every visit",
    category: "Garden Maintenance",
    width: 1408,
    height: 1008,
  },
  {
    id: "work-4",
    src: work4,
    alt: "Garden after a clean-up with raked lawn and swept paving",
    caption: "Garden clean-ups",
    category: "Finished Work",
    width: 1500,
    height: 1100,
  },
  {
    id: "finish",
    src: finish,
    alt: "A crisply edged lawn beside a paved garden path",
    caption: "The finished result",
    category: "Finished Work",
    width: 1408,
    height: 1008,
  },
  {
    id: "about",
    src: aboutImg,
    alt: "Garden maintenance equipment on a trailer beside a well-kept South African garden",
    caption: "Professional equipment",
    category: "Garden Maintenance",
    width: 1408,
    height: 1104,
  },
  {
    id: "ours",
    src: ours,
    alt: "A close-up of a flower bed with fresh mulch at golden hour",
    caption: "Flower bed detail",
    category: "Garden Maintenance",
    width: 736,
    height: 979,
  },
  {
    id: "watering",
    src: watering,
    alt: "A garden sprinkler watering a lawn at sunset",
    caption: "Lawn watering",
    category: "Lawns",
    width: 736,
    height: 1313,
  },
  {
    id: "maintainance",
    src: maintainance,
    alt: "A landscaped hillside garden bed with rocks and succulents",
    caption: "Hillside garden bed",
    category: "Garden Maintenance",
    width: 1024,
    height: 576,
  },
  {
    id: "garden",
    src: garden,
    alt: "A rock garden with succulents and aloe beside a South African home",
    caption: "Rock garden design",
    category: "Outdoor Spaces",
    width: 1024,
    height: 576,
  },
  {
    id: "lawn",
    src: lawn,
    alt: "Two people walking through an overgrown garden site",
    caption: "Site assessment",
    category: "Garden Maintenance",
    width: 1024,
    height: 484,
  },
  {
    id: "man-working",
    src: manWorking,
    alt: "A gardener and client surveying an overgrown garden plot",
    caption: "On-site consultation",
    category: "Garden Maintenance",
    width: 1024,
    height: 484,
  },
  {
    id: "out",
    src: out,
    alt: "A landscaped front entrance with a paved path and palm trees",
    caption: "Landscaped entrance",
    category: "Outdoor Spaces",
    width: 576,
    height: 1024,
  },
  {
    id: "mhlanga",
    src: mhlanga,
    alt: "A garden lit at dusk with a stone fountain and flowering shrubs",
    caption: "Evening garden lighting",
    category: "Outdoor Spaces",
    width: 1600,
    height: 1200,
  },
  {
    id: "treefall",
    src: treefall,
    alt: "A large tree brought down and cleared during tree felling work",
    caption: "Tree felling",
    category: "Tree Work",
    width: 736,
    height: 981,
  },
];
