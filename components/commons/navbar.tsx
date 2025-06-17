"use client";
import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import {
  button as buttonStyles,
  link as linkStyles,
  Link,
} from "@heroui/react";
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
  Menu,
  Building,
  CircleDollarSign,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/commons/icons";
import FPTLogo from "@/public/commons/fpt-logo.png";

export const MainNavbar = () => {
  return (
    <HeroUINavbar position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="FPT Logo"
              className="w-11 h-11 object-contain flex items-center justify-center"
              height={160}
              src={FPTLogo.src}
              width={160}
            />
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
            href="/project"
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
            href="/contact"
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

export const SideNavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  return (
    <>
      {/* Hamburger icon for mobile */}
      {!open && (
        <button
          aria-label="Open sidebar"
          className="fixed top-4 right-4 z-50 rounded-full p-2 shadow"
          style={{ all: "unset", cursor: "pointer" }}
          tabIndex={0}
          type="button"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed h-screen w-64 bg-white border-r z-40 transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block
          flex flex-col px-4 py-6
        `}
      >
        {/* ...logo, org switcher, etc... */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-1">
          <nav className="flex-1 flex flex-col gap-6">
            {sideNavSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <div className="text-xs text-gray-500 font-medium">
                  {section.title}
                </div>
                <div className="flex flex-col gap-1">
                  {section.title === "Resources" ? (
                    <>
                      {/* Settings with subpanel */}
                      <button
                        className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-50 transition nav-text w-full text-left"
                        onClick={() => setSettingsOpen((v) => !v)}
                      >
                        <Settings className="w-5 h-5 text-sm text-gray-900 hover:text-darkBlue" />
                        <span className="text-gray-900 hover:text-darkBlue text-sm">
                          Settings
                        </span>
                        {settingsOpen ? (
                          <ChevronUp className="w-4 h-4 ml-auto" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-auto" />
                        )}
                      </button>
                      {settingsOpen && (
                        <div className="ml-8 flex flex-col gap-1">
                          <Link
                            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-50 transition nav-text"
                            href="/settings/organization"
                            onClick={() => setOpen(false)}
                          >
                            <Building className="w-4 h-4 text-gray-900" />
                            <span className="text-gray-900 text-sm">
                              Organization
                            </span>
                          </Link>
                          <Link
                            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-50 transition nav-text"
                            href="/settings/members"
                            onClick={() => setOpen(false)}
                          >
                            <Users className="w-4 h-4 text-gray-900" />
                            <span className="text-gray-900 text-sm">
                              Members
                            </span>
                          </Link>
                          <Link
                            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-50 transition nav-text"
                            href="/settings/billing"
                            onClick={() => setOpen(false)}
                          >
                            <CircleDollarSign className="w-4 h-4 text-gray-900" />
                            <span className="text-gray-900 text-sm">
                              Billing
                            </span>
                          </Link>
                        </div>
                      )}
                      {/* Render the rest of the section except Settings, Organization, Members, Billing */}
                      {section.items
                        .filter(
                          (item) =>
                            ![
                              "Settings",
                              "Organization",
                              "Members",
                              "Billing",
                            ].includes(item.label),
                        )
                        .map((item) => (
                          <Link
                            key={item.href}
                            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-50 transition nav-text"
                            href={item.href}
                            onClick={() => setOpen(false)}
                          >
                            <item.icon className="w-5 h-5 text-sm text-gray-900 hover:text-darkBlue" />
                            <span className="text-gray-900 hover:text-darkBlue text-sm">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                    </>
                  ) : (
                    section.items.map((item) => (
                      <Link
                        key={item.href}
                        className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-50 transition nav-text"
                        href={item.href}
                        onClick={() => setOpen(false)}
                      >
                        <item.icon className="w-5 h-5 text-sm text-gray-900 hover:text-darkBlue" />
                        <span className="text-gray-900 hover:text-darkBlue text-sm">
                          {item.label}
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            ))}
          </nav>
        </div>
        {/* User info */}
        <div className="relative mt-5 mb-0 flex items-center gap-2 py-2 px-2 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-medium">
            N
          </div>
          <div>
            <div className="font-medium">Ngoc Linh Le</div>
            <div className="text-xs text-gray-500">Free Plan</div>
          </div>
        </div>
      </aside>
      {/* Overlay for mobile */}
      {open && (
        <button
          aria-label="Close sidebar"
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          style={{ all: "unset", cursor: "pointer" }}
          tabIndex={0}
          type="button"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};
