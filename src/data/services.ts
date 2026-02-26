import {
  Building2,
  Home as HomeIcon,
  Paintbrush,
  Wrench,
  ClipboardList,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  heroImg: string;
  description: string;
  features: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
  benefits: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "construction-management",
    icon: ClipboardList,
    title: "Construction Management",
    tagline: "Expert oversight from planning to handover",
    heroImg: "/images/hero-construction.jpg",
    description:
      "Our Construction Management service provides comprehensive project oversight, ensuring every phase — from pre-construction planning through final handover — is executed with precision, on time, and within budget. We act as your single point of accountability.",
    features: [
      {
        title: "Budget Control",
        desc: "Rigorous cost tracking and value engineering to maximize every dollar spent.",
      },
      {
        title: "Timeline Management",
        desc: "Detailed scheduling with milestone tracking and proactive delay mitigation.",
      },
      {
        title: "Quality Assurance",
        desc: "Multi-stage inspection protocols ensuring the highest construction standards.",
      },
      {
        title: "Risk Mitigation",
        desc: "Comprehensive risk assessment and contingency planning for every project phase.",
      },
      {
        title: "Subcontractor Coordination",
        desc: "Vetted subcontractor management with performance monitoring and accountability.",
      },
      {
        title: "Reporting & Transparency",
        desc: "Regular progress reports with real-time dashboards for complete project visibility.",
      },
    ],
    process: [
      {
        step: "Discovery & Planning",
        desc: "We assess your project requirements, establish scope, budget, and timelines.",
      },
      {
        step: "Pre-Construction",
        desc: "Detailed design review, permitting, subcontractor procurement, and scheduling.",
      },
      {
        step: "Construction Phase",
        desc: "Active site management with daily oversight, quality control, and progress tracking.",
      },
      {
        step: "Handover & Close-out",
        desc: "Final inspections, punch list completion, documentation, and warranty coordination.",
      },
    ],
    benefits: [
      "Single point of contact for entire project",
      "Reduced risk of cost overruns",
      "Faster project completion",
      "Higher quality outcomes",
      "Full regulatory compliance",
      "Transparent communication throughout",
    ],
  },
  {
    slug: "residential-construction",
    icon: HomeIcon,
    title: "Residential Construction",
    tagline: "Custom homes built to your vision",
    heroImg: "/images/project-residential.jpg",
    description:
      "From custom luxury homes to multi-family developments, we build living spaces that combine comfort, style, and lasting quality. Every home we construct reflects the unique personality and needs of its owners.",
    features: [
      {
        title: "Custom Home Design",
        desc: "Collaborate with our architects to design a home that's uniquely yours.",
      },
      {
        title: "Multi-Unit Developments",
        desc: "Townhomes, duplexes, and apartment complexes built to the highest standards.",
      },
      {
        title: "Smart Home Integration",
        desc: "Cutting-edge home automation for lighting, climate, security, and entertainment.",
      },
      {
        title: "Energy Efficiency",
        desc: "Sustainable building practices and materials for lower energy costs.",
      },
      {
        title: "Premium Materials",
        desc: "Only the finest materials sourced from trusted suppliers worldwide.",
      },
      {
        title: "Warranty & Support",
        desc: "Comprehensive warranty coverage with responsive post-construction support.",
      },
    ],
    process: [
      {
        step: "Consultation",
        desc: "Understanding your lifestyle, preferences, and budget to shape the perfect home.",
      },
      {
        step: "Design & Approval",
        desc: "Architectural drawings, material selections, and permit acquisition.",
      },
      {
        step: "Foundation & Structure",
        desc: "Site preparation, foundation work, framing, and structural systems.",
      },
      {
        step: "Finishing & Handover",
        desc: "Interior finishing, landscaping, final walkthrough, and keys in your hand.",
      },
    ],
    benefits: [
      "Fully customizable floor plans",
      "Energy Star certified options",
      "10-year structural warranty",
      "Transparent pricing — no hidden fees",
      "Dedicated project manager",
      "Post-move-in support program",
    ],
  },
  {
    slug: "commercial-construction",
    icon: Building2,
    title: "Commercial Construction",
    tagline: "Modern spaces designed for business impact",
    heroImg: "/images/project-commercial.jpg",
    description:
      "We deliver commercial construction projects that combine functional excellence with architectural distinction. From office towers to retail centers, our commercial builds drive business performance.",
    features: [
      {
        title: "Office Buildings",
        desc: "Class A office spaces with flexible floor plans and modern amenities.",
      },
      {
        title: "Retail Spaces",
        desc: "Attractive, high-traffic retail environments designed to boost sales.",
      },
      {
        title: "Industrial & Warehouses",
        desc: "Efficient, scalable facilities for manufacturing and logistics.",
      },
      {
        title: "Mixed-Use Developments",
        desc: "Integrated commercial and residential projects for vibrant communities.",
      },
      {
        title: "Tenant Fit-outs",
        desc: "Custom interior buildouts tailored to tenant specifications.",
      },
      {
        title: "LEED Certification",
        desc: "Sustainable design and construction for green building certifications.",
      },
    ],
    process: [
      {
        step: "Feasibility Study",
        desc: "Site analysis, market research, and financial modeling for your project.",
      },
      {
        step: "Design-Build",
        desc: "Integrated design and construction approach for faster delivery.",
      },
      {
        step: "Construction",
        desc: "Professional execution with strict quality, safety, and timeline standards.",
      },
      {
        step: "Commissioning",
        desc: "Systems testing, occupancy permits, and tenant coordination.",
      },
    ],
    benefits: [
      "Design-build efficiency",
      "Fast-track construction capability",
      "ADA compliance guaranteed",
      "Sustainable building practices",
      "Flexible financing options",
      "Long-term maintenance partnerships",
    ],
  },
  {
    slug: "interior-design",
    icon: Paintbrush,
    title: "Interior Design & Fit-outs",
    tagline: "Spaces that inspire and perform",
    heroImg: "/images/project-interior.jpg",
    description:
      "Our interior design team transforms spaces into environments that inspire, function beautifully, and reflect your brand or personality. From concept to installation, every detail is thoughtfully curated.",
    features: [
      {
        title: "Space Planning",
        desc: "Optimizing layouts for flow, functionality, and aesthetic harmony.",
      },
      {
        title: "Material & Finish Selection",
        desc: "Curated palettes of premium materials, fabrics, and finishes.",
      },
      {
        title: "Custom Furniture",
        desc: "Bespoke furniture pieces designed and crafted for your specific space.",
      },
      {
        title: "Lighting Design",
        desc: "Layered lighting schemes that enhance mood and functionality.",
      },
      {
        title: "Art & Accessories",
        desc: "Curated art collections and accessories that complete your interior story.",
      },
      {
        title: "Brand Integration",
        desc: "Commercial interiors that authentically express your brand identity.",
      },
    ],
    process: [
      {
        step: "Concept Development",
        desc: "Mood boards, style exploration, and design direction setting.",
      },
      {
        step: "Detailed Design",
        desc: "Floor plans, 3D renderings, material specifications, and budgeting.",
      },
      {
        step: "Procurement",
        desc: "Sourcing, ordering, and quality-checking all materials and furnishings.",
      },
      {
        step: "Installation",
        desc: "Professional installation, styling, and final reveal of your transformed space.",
      },
    ],
    benefits: [
      "3D visualization before construction",
      "Access to trade-only materials",
      "Project managed installation",
      "Budget-conscious luxury options",
      "Sustainable material alternatives",
      "Post-project styling support",
    ],
  },
  {
    slug: "renovation",
    icon: Wrench,
    title: "Renovation & Remodeling",
    tagline: "Breathe new life into existing spaces",
    heroImg: "/images/project-renovation.jpg",
    description:
      "Whether it's a kitchen remodel, a complete home renovation, or a historic restoration, we bring expertise, creativity, and precision to transform your existing space into something extraordinary.",
    features: [
      {
        title: "Kitchen & Bath Remodels",
        desc: "Complete kitchen and bathroom transformations with premium finishes.",
      },
      {
        title: "Whole-Home Renovation",
        desc: "Comprehensive renovations that reimagine your entire living space.",
      },
      {
        title: "Structural Upgrades",
        desc: "Wall removal, additions, and structural reinforcement with engineering expertise.",
      },
      {
        title: "Historic Restoration",
        desc: "Sensitive restoration of heritage properties preserving original character.",
      },
      {
        title: "Additions & Extensions",
        desc: "Seamlessly expand your living space with well-integrated additions.",
      },
      {
        title: "Aging-in-Place",
        desc: "Accessibility modifications for comfortable, safe long-term living.",
      },
    ],
    process: [
      {
        step: "Assessment",
        desc: "Thorough evaluation of existing conditions, structural integrity, and possibilities.",
      },
      {
        step: "Design & Planning",
        desc: "Renovation plans, material selections, and detailed cost estimates.",
      },
      {
        step: "Renovation",
        desc: "Careful demolition, construction, and installation with minimal disruption.",
      },
      {
        step: "Completion",
        desc: "Final touches, cleaning, inspection, and walkthrough with warranty documentation.",
      },
    ],
    benefits: [
      "Live-in renovation options",
      "Dust and noise containment",
      "Flexible phased approach",
      "Historic preservation expertise",
      "Code compliance guaranteed",
      "Increased property value",
    ],
  },
];
