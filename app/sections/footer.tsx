import Link from "next/link";
import { Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@heroui/react";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-screen bg-darkBlue text-white pt-16 mt-20 pb-8 px-5 md:px-8 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="mb-12 flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <h2
              className={title({
                size: "lg",
                class: "mb-4 leading-tight lg:leading-snug",
              })}
            >
              Let Us Accompany You
            </h2>
            <div className="flex flex-wrap gap-8 md:gap-16">
              <ul className="space-y-2 text-lg font-medium">
                <li>
                  <Link href={siteConfig.links.fpt}>About</Link>
                </li>
                <li>
                  <Link href={siteConfig.links.fptCareers}> Careers</Link>
                </li>
              </ul>
              <ul className="space-y-2 text-lg font-medium">
                <li>
                  <Link href={siteConfig.links.fpt}>Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <Button className="mt-5" color="secondary" variant="shadow">
              {" "}
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <h3 className="text-lg font-bold text-white mb-2">
              Công ty TNHH FPT IS
            </h3>
            <p>
              <span className="font-semibold">Registered Office:</span> Số 10
              phố Phạm Văn Bạch, P. Dịch Vọng, Q. Cầu Giấy, TP. Hà Nội, Việt Nam
            </p>
            <p>
              <span className="font-semibold">
                Content Management Responsibility:
              </span>{" "}
              Công ty TNHH FPT IS, <span className="font-semibold">BR No.</span>{" "}
              0101601092
            </p>
            <p>
              <span className="font-semibold">Hotline:</span> (+84) 24 7300 7373
            </p>
            <p>
              <span className="font-semibold">Contact:</span> Contact@fpt.com
            </p>
          </div>
        </div>

        {/* Policy Links */}
        <div className="border-t border-gray-700 pt-6 flex flex-wrap gap-6 text-sm mb-8">
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy">Privacy Statement</Link>
          <Link href="/vulnerability">Vulnerability Disclosure</Link>
          <Link href="/data-protection">Data Protection Policy</Link>
          <Link href="/risk-reporting">Risk Violation Reporting</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          <a
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a aria-label="Email" href="mailto:Contact@fpt.com">
            <Mail className="w-6 h-6" />
          </a>
          <a
            aria-label="Website"
            href={siteConfig.links.fptIS}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Globe className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs p-3 text-center align-middle">
          &copy; {new Date().getFullYear()} FPT IS.
        </p>
      </div>
    </footer>
  );
}
