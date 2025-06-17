import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    // { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen overflow-x-hidden font-sans antialiase bg-lightWhite flex flex-col",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="flex flex-row gap-4">
            <main className="w-full flex-grow bg-lightWhite">{children}</main>
          </div>
          <footer className="w-full flex items-center justify-center text-center py-6 px-5 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Agentic Document Understanding. All
              rights reserved.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
