'use client'
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { button as buttonStyles, link as linkStyles, Link } from "@heroui/react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Home,
  BookCheck,
  Notebook,
  Settings,
  KeyRound,
  FileCode,
  Mail,
  BarChart2,
  Layers,
  Menu
} from "lucide-react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import FPTLogo from "@/public/commons/fpt-logo.png";

import { useState } from "react";

export const MainNavbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src={FPTLogo.src} alt="FPT Logo" className="w-11 h-11 object-contain flex items-center justify-center" width={160} height={160}/>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.mainNavItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href='/project'
          >
            Get started
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "bordered",
            })}
            href='/contact'
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.mainNavItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.mainNavItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

// --- Responsive SideNavBar ---

const sideNavSections = [
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
        label: "Integrations",
        href: "/integrations",
        icon: Layers,
      },
      {
        label: "API Keys",
        href: "/api-keys",
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

export const SideNavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon for mobile */}
      {!open && (
        <button
          className="lg:hidden fixed top-4 right-4 z-50 rounded-full p-2 shadow"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed w-64 bg-white border-r z-40 transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block
          flex flex-col px-4 py-6
        `}
      >
        {/* Close button for mobile */}
        <button
          className="lg:hidden absolute top-4 right-4"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 mt-2">
          <Image src={FPTLogo.src} alt="FPT Logo" className="w-11 h-11 object-contain flex items-center justify-center" width={40} height={40} />
          <span className="font-bold text-xl">Document Understanding</span>
        </div>
        {/* Org Switcher */}
        <div className="bg-blue-50 rounded-sm px-3 py-2 mb-6 flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">N</div>
            <div>
              <div className="font-medium">Default</div>
              <div className="text-xs text-gray-500">Ngọc Linh Lê's Org</div>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-1">
          <nav className="flex-1 flex flex-col gap-6">
            {sideNavSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <div className="text-xs text-gray-500 font-medium">{section.title}</div>
                <div className="flex flex-col gap-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-50 transition nav-text"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="w-5 h-5 text-sm text-gray-900 hover:text-darkBlue" />
                      <span className="text-gray-900 hover:text-darkBlue text-sm">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
        {/* User info */}
        <div className="relative mt-5 mb-0 flex items-center gap-2 py-2 px-2 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-medium">N</div>
          <div>
            <div className="font-medium">Ngoc Linh Le</div>
            <div className="text-xs text-gray-500">Free Plan</div>
          </div>
        </div>
      </aside>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};