export type SiteConfig = typeof siteConfig;
import {
  Home,
  BookCheck,
  Notebook,
  Settings,
  KeyRound,
  FileCode,
  Mail,
  BarChart2,
  Building,
  CircleDollarSign,
  Users,
  Layers
} from "lucide-react";

export const siteConfig = {
  name: "Agentic Document Understanding",
  description:
    "A powerful tool for extracting structured data from documents using AI.",
  mainNavItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "About",
      href: "https://fpt-is.com/",
    },
    {
      label: "Get started",
      href: "/project",
    },
  ],
  links: {
    github: "https://github.com",
    docs: "/docs",
    fpt: "https://fpt-is.com/",
    fptIS: "https://fpt-is.com/",
    fptCareers: "https://fpt.com/en/careers",
    linkedin: "https://www.linkedin.com/company/fptis/",
  },
};


export const sideNavSections = [
  {
    title: "Overview",
    items: [
      {
        label: "Home",
        href: "/project/",
        icon: Home,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        label: "Parse",
        href: "/project/parse-doc",
        icon: BookCheck,
      },
      {
        label: "Extraction",
        href: "/project/extract-doc",
        icon: Notebook,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        label: "Settings",
        href: "/settings",
        icon: Settings,
      },
      {
        label: "Organization",
        href: "/settings/organization",
        icon: Building,
      },
      {
        label: "Members",
        href: "/settings/members",
        icon: Users,
      },
      {
        label: "Billing",
        href: "/settings/billing",
        icon: CircleDollarSign,
      },
      {
        label: "Integrations",
        href: "/integrations",
        icon: Layers,
      },
      {
        label: "API Key",
        href: "/project/api-key",
        icon: KeyRound,
      },
      {
        label: "Documentation",
        href: "/docs",
        icon: FileCode,
      },
    ],
  },
  {
    title: "Contacts",
    items: [
      {
        label: "Contact Us",
        href: "/contact",
        icon: Mail,
      },
      {
        label: "Status",
        href: "/status",
        icon: BarChart2,
      },
    ],
  },
];