import Link from "next/link";
import { title, subtitle } from "@/components/primitives";
import { Linkedin, Facebook, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="mb-12 flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <h2 className={title({ size: "lg" }) + " mb-4"}>Let Us Accompany You</h2>
            <div className="flex flex-wrap gap-8 md:gap-16">
              <ul className="space-y-2 text-lg font-medium">
                <li>
                  <Link href="/about" className="hover:text-orange-400 transition">About</Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-orange-400 transition">Careers</Link>
                </li>
              </ul>
              <ul className="space-y-2 text-lg font-medium">
                <li>
                  <Link href="/industries" className="hover:text-orange-400 transition">Industries</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400 transition">Services</Link>
                </li>
              </ul>
            </div>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 font-semibold flex items-center gap-2">
              <span>Contact us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <h3 className="text-lg font-bold text-white mb-2">FPT Software Company Limited</h3>
            <p>
              <span className="font-semibold">Registered Office:</span> FPT Cau Giay Building, Duy Tan Street, Dich Vong Hau Ward, Cau Giay District, Hanoi City, Vietnam
            </p>
            <p>
              <span className="font-semibold">Content Management Responsibility:</span> FPT Software Company Limited, <span className="font-semibold">BR No.</span> 0101601092
            </p>
            <p>
              <span className="font-semibold">Hotline:</span> (+84) 243 768 9048
            </p>
          </div>
        </div>

        {/* Policy Links */}
        <div className="border-t border-gray-700 pt-6 flex flex-wrap gap-6 text-sm mb-8">
          <Link href="/terms" className="hover:text-orange-400 transition">Terms of Use</Link>
          <Link href="/privacy" className="hover:text-orange-400 transition">Privacy Statement</Link>
          <Link href="/vulnerability" className="hover:text-orange-400 transition">Vulnerability Disclosure</Link>
          <Link href="/data-protection" className="hover:text-orange-400 transition">Data Protection Policy</Link>
          <Link href="/risk-reporting" className="hover:text-orange-400 transition">Risk Violation Reporting</Link>
          <Link href="/procurement" className="hover:text-orange-400 transition">Procurement @ FPT Software</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          <a href="#" aria-label="LinkedIn" className="hover:text-orange-400 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-orange-400 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Email" className="hover:text-orange-400 transition">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Website" className="hover:text-orange-400 transition">
            <Globe className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} FPT Software.</p>
      </div>
    </footer>
  );
}