import Link from "next/link";
import { title, subtitle } from "@/components/primitives";
import { Linkedin, Facebook, Mail, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";

export default function Footer() {
  return (
    <footer className="w-screen bg-darkBlue text-white pt-16 mt-20 pb-8 px-4 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="mb-12 flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <h2 className={title({ size: "lg" }) + " mb-4"}>Let Us Accompany You</h2>
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
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <Button href="/contact" variant="shadow" color="secondary" className="mt-5"> Contact Us </Button>

          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <h3 className="text-lg font-bold text-white mb-2">Công ty TNHH FPT IS</h3>
            <p>
              <span className="font-semibold">Registered Office:</span> Số 10 phố Phạm Văn Bạch, P. Dịch Vọng, Q. Cầu Giấy, TP. Hà Nội, Việt Nam
            </p>
            <p>
              <span className="font-semibold">Content Management Responsibility:</span> Công ty TNHH FPT IS, <span className="font-semibold">BR No.</span> 0101601092
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
          <Link href="/procurement">Procurement @ FPT Software</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Website">
            <Globe className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs p-3 text-center align-middle">&copy; {new Date().getFullYear()} FPT IS.</p>
      </div>
    </footer>
  );
}