export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Lawn Mowing",
    description:
      "Regular professional grass cutting to keep your lawn neat, healthy and consistently maintained. We mow according to the needs of your lawn, leaving the grass at an appropriate height with a clean and well-finished appearance.",
  },
  {
    number: "02",
    title: "Hedge Trimming",
    description:
      "Hedges and borders shaped and trimmed on a regular schedule, so lines stay crisp and growth stays controlled rather than catching up on itself between visits.",
  },
  {
    number: "03",
    title: "Weeding & Bed Care",
    description:
      "Beds, borders and paved areas kept clear of weeds, with mulching and edging carried out as part of the same visit — the detail work that keeps a garden looking properly cared for, not just mowed.",
  },
  {
    number: "04",
    title: "Tree Felling",
    description:
      "Safe removal of trees and branches that are damaged, overgrown or no longer wanted, carried out carefully and the site left clear and tidy afterwards.",
  },
  {
    number: "05",
    title: "Garden Maintenance",
    description:
      "The wider garden environment — pruning, general upkeep and outdoor-area maintenance — kept tidy, attractive and enjoyable for homeowners and businesses.",
  },
] as const;

export const SERVICE_AREAS = [
  "Shelly Beach",
  "Ramsgate",
  "Uvongo Beach",
  "Southbroom",
  "Margate",
] as const;

export const SERVICE_OPTIONS = [
  "Lawn Mowing",
  "Hedge Trimming",
  "Weeding & Bed Care",
  "Tree Felling",
  "Garden Maintenance",
  "Other",
] as const;

export const CONTACT = {
  phone: "072 690 4123",
  phoneHref: "tel:+27726904123",
  email: "edengardenservices8@gmail.com",
  emailHref: "mailto:edengardenservices8@gmail.com",
} as const;

export const SERVICE_AREAS_LINE = SERVICE_AREAS.join(" · ");
