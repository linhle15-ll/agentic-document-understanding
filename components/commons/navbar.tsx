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
  X,
  Menu,
} from "lucide-react";
import { sideNavSections } from "@/config/site";
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

export const SideNavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  return (
        <>
      {/* Hamburger button for small/medium screens */}
      {!open && (
        <button
          aria-label="Open sidebar"
          className="fixed top-4 right-4 z-50 block lg:hidden p-2 rounded-full bg-white shadow"
          type="button"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Overlay for mobile when sidebar is open */}
      {open && (
        <button
          aria-label="Close sidebar"
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          style={{ all: "unset", cursor: "pointer" }}
          tabIndex={0}
          type="button"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed h-screen w-64 bg-white border-r z-50 transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block
          flex flex-col px-4 py-6
        `}
      >
        {/* Close button inside sidebar for mobile */}
        <div className="flex justify-end lg:hidden mb-4">
          {open && (
            <button
              aria-label="Close sidebar"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              type="button"
              onClick={() => setOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <nav className="flex-1 flex flex-col gap-6">
          {sideNavSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">{section.title}</div>
              <div className="flex flex-col gap-1">
                {section.items.map((item) => (
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
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

