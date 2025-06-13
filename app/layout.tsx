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
          "min-h-screen overflow-x-hidden font-sans antialiase bg-lightWhite",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <div className="absolute inset-0 -z-10 h-full w-full bg-lightWhite">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background to-transparent opacity-30"></div>
            </div>
            <main className="container mx-auto flex-grow bg-lightWhite">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Agentic Document Understanding. All rights reserved.
              </p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
