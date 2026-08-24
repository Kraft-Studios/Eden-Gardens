import doorstep from "@/assets/doorstep.jpg";
import worker from "@/assets/worker.jpg";
import careVisit from "@/assets/care-visit.jpg";
import work3 from "@/assets/work-3.jpg";
import wedding from "@/assets/wedding.jpj.jpg";
import treefall from "@/assets/treefall.jpg";
import treecutting from "@/assets/treecutting.jpg";
import maintainance from "@/assets/maintainance.jpg";

export type ServiceDetail = {
  number: string;
  title: string;
  subtitle?: string;
  paragraph: string;
  intro?: string[];
  supporting?: string[];
  includes?: Array<{ label: string; description: string }>;
  includesHeading?: string;
  includesLead?: string | false;
  closing?: string;
  featured?: boolean;
  refinedTypography?: boolean;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** CSS object-position value — used for portrait source photos cropped into a landscape frame. */
  imagePosition?: string;
  /** Overrides the default aspect-[4/3] image frame — use a taller ratio for a bit more height. */
  imageAspectClass?: string;
  /** Places the text column before the image column on desktop. */
  textFirst?: boolean;
  /** Caps the row at the same max-w-[1400px] contained width as the
   *  featured/dark rows, instead of the default "plain row" full-bleed
   *  image — keeps this row's pictures the same size as those rows. */
  contained?: boolean;
  secondaryImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    position?: string;
  };
  thirdImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    position?: string;
  };
  footerTone?: boolean;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    number: "01",
    title: "Lawn Mowing",
    featured: true,
    intro: [
      "Regular mowing is one of the biggest factors in how a lawn looks and performs, so we treat it as more than a quick pass with the mower. Grass height and cutting frequency are considered according to the season and how the lawn is growing, rather than following the same schedule throughout the year.",
      "Our approach focuses on leaving the entire lawn area looking neat and cared for, with attention given to the grass itself as well as the surrounding edges, pathways and garden areas.",
      "Edges are trimmed cleanly along paving, garden beds and fence lines, while clippings are cleared away from the lawn and surrounding surfaces. The result is a lawn that looks neat, cared for and professionally finished — not simply shorter.",
    ],
    supporting: [
      "A well-maintained lawn is about more than cutting the grass. We pay attention to the details around the lawn as well, ensuring that edges are defined and surrounding areas are left tidy once the work is complete.",
      "Our service is focused on providing a clean, consistent finish while taking care around garden beds, plants, pathways and other features within the garden.",
    ],
    includes: [
      {
        label: "Consistent Mowing",
        description: "Grass is cut according to its condition and seasonal growth.",
      },
      {
        label: "Clean Edge Trimming",
        description:
          "Paving, garden beds and fence lines are neatly finished for a defined, professional appearance.",
      },
      {
        label: "Full Clean-Up",
        description:
          "Grass clippings and debris are cleared from the lawn and surrounding hard surfaces once the work is complete.",
      },
      {
        label: "Attention to Detail",
        description:
          "Care is taken around garden beds, plants, pathways and other garden features.",
      },
    ],
    paragraph:
      "Regular mowing is the single biggest factor in how a lawn looks, so we treat it as more than a quick pass with the mower. Grass height and cutting frequency are matched to the season and to how the lawn is actually growing, rather than following the same schedule all year round. Edges are trimmed cleanly along paving, beds and fence lines, and clippings are cleared away, so the lawn is left looking finished — not just shorter.",
    image: doorstep,
    imageAlt: "A garden worker mowing a lawn in warm late-afternoon light",
    imageWidth: 1408,
    imageHeight: 1008,
    secondaryImage: {
      src: worker,
      alt: "Garden worker carrying out routine lawn care",
      width: 736,
      height: 1104,
    },
  },
  {
    number: "02",
    title: "Hedge Trimming",
    refinedTypography: true,
    paragraph:
      "Hedges are cut to a clean, consistent line rather than just knocked back when they get out of hand. We work to the natural shape of each hedge, keep growth controlled between visits, and clear cuttings away so the finished line reads sharp from the first look.",
    intro: [
      "A well-maintained hedge can define an entire garden. It creates structure, privacy and a clean boundary between different areas of an outdoor space. At Eden Gardens Services, we don't simply cut hedges back when they become overgrown — we shape and maintain them with a focus on achieving a neat, consistent and well-balanced finish.",
      "We work with the natural form of each hedge while keeping its growth controlled and its overall shape tidy. Attention is given to the height, line and surrounding areas so the hedge complements the garden rather than looking like an afterthought.",
      "The difference is in the finish. Clean, defined lines and carefully maintained growth can make an immediate difference to the appearance of a property, giving the garden a more organised, cared-for and professional look. Once the trimming is complete, cuttings are cleared away so the garden is left clean and presentable.",
    ],
    includes: [
      {
        label: "Shape & Definition",
        description:
          "Hedges are trimmed to create a clean, consistent appearance while working with their natural form.",
      },
      {
        label: "Controlled Growth",
        description:
          "Regular maintenance helps prevent hedges from becoming overgrown and difficult to manage.",
      },
      {
        label: "Clean Lines",
        description:
          "Attention is given to the height, edges and overall shape for a sharp, structured finish.",
      },
      {
        label: "Garden Protection",
        description:
          "Care is taken around surrounding plants, garden beds, pathways and other features.",
      },
      {
        label: "Full Clean-Up",
        description:
          "Cuttings and debris are cleared from the work area, leaving the garden neat and presentable.",
      },
    ],
    image: careVisit,
    imageAlt: "Gloved hands trimming a green hedge with garden shears",
    imageWidth: 1408,
    imageHeight: 1008,
    imageAspectClass: "aspect-[4/3.5]",
  },
  {
    number: "03",
    title: "Weeding & Bed Care",
    subtitle: "The Details That Complete the Garden",
    intro: [
      "Clean garden beds make a garden feel finished. We remove weeds, maintain defined edges and, where required, mulch beds to keep them neat, controlled and well presented.",
      "Regular attention prevents beds and borders from becoming overgrown, allowing your plants and garden features to stand out. It’s the detail that turns a maintained garden into a well-kept one.",
    ],
    refinedTypography: true,
    footerTone: true,
    paragraph:
      "Beds and borders are cleared of weeds, edged and mulched as part of the same visit — the detail work that separates a garden that's properly looked after from one that's only had its lawn cut. Regular attention here keeps beds from ever getting away from us.",
    image: work3,
    imageAlt: "Tidy garden bed with fresh mulch and clipped shrubs",
    imageWidth: 1200,
    imageHeight: 1200,
    thirdImage: {
      src: wedding,
      alt: "A neatly maintained coastal garden lawn",
      width: 736,
      height: 1104,
      position: "center",
    },
  },
  {
    number: "04",
    title: "Tree Felling",
    subtitle: "Removing What’s In The Way — With Care",
    refinedTypography: true,
    intro: [
      "A tree can add character to a garden, but when it becomes damaged, overgrown, unwanted or unsuitable for its surroundings, it can affect the safety, appearance and usability of the space. Eden Gardens Services provides careful tree felling with a focus on doing the job properly from assessment through to clean-up.",
      "We don't approach every tree as something that simply needs to come down. We assess the tree and its surroundings on-site before recommending removal, considering the garden, nearby structures and the space available. Where removal is the right option, our team works carefully to complete the job while keeping disruption to the surrounding area to a minimum.",
      "The job doesn't end when the tree is down. We clear branches, cuttings and debris from the working area, leaving the site clean and presentable. Whether you're clearing an overgrown garden, removing a damaged tree or making space for a new outdoor project, our goal is to leave you with a safer, cleaner and more usable space.",
    ],
    includesHeading: "What You Can Expect",
    includesLead: false,
    includes: [
      {
        label: "On-Site Assessment",
        description:
          "We look at the tree and its surroundings before recommending the appropriate approach.",
      },
      {
        label: "Careful Removal",
        description:
          "Attention is given to the surrounding garden and property throughout the work.",
      },
      {
        label: "Complete Clean-Up",
        description: "Branches, cuttings and debris are cleared from the working area.",
      },
      {
        label: "A Better-Prepared Space",
        description: "We leave the area neat and ready for whatever comes next.",
      },
    ],
    closing:
      "From the first assessment to the final clean-up, we take care of the work so you can take back the space.",
    textFirst: true,
    contained: true,
    paragraph:
      "Damaged, overgrown or unwanted trees are removed carefully, with the site cleared and left tidy once the work is done. We assess each tree on-site before recommending removal, rather than treating it as a first resort.",
    image: treefall,
    imageAlt: "A large tree brought down and cleared during tree felling work",
    imageWidth: 736,
    imageHeight: 981,
    imagePosition: "center 35%",
    secondaryImage: {
      src: treecutting,
      alt: "Tree cutting work in progress",
      width: 1080,
      height: 720,
    },
  },
  {
    number: "05",
    title: "Garden Maintenance",
    refinedTypography: true,
    footerTone: true,
    paragraph:
      "Beyond the lawn, hedges and beds, we provide the ongoing general upkeep that keeps a wider outdoor space looking cared for — pruning, tidying and the routine maintenance that stops small jobs from becoming big ones.",
    image: maintainance,
    imageAlt: "A landscaped South African hillside garden bed with rocks and succulents",
    imageWidth: 1024,
    imageHeight: 576,
  },
];
