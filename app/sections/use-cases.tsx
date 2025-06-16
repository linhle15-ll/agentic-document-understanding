"use client";
import {
  Landmark,
  ScrollText,
  ChartNoAxesCombined,
  Blocks,
  ShieldCheck,
} from "lucide-react";

import { subtitle, title } from "@/components/primitives";
import HorizontalScrollCarousel from "@/components/home.components/scroll-carousel";
import financeDoc from "@/public/use-cases/finance-doc.jpg";
import scienceDoc from "@/public/use-cases/science-doc.png";
import consultDoc from "@/public/use-cases/consult-doc.jpg";
import manufactureDoc from "@/public/use-cases/manufacture-doc.png";
import insuranceDoc from "@/public/use-cases/insurance-doc.jpg";

const useCases = [
  {
    icon: <Landmark size={40} />,
    name: "Financial Services",
    description:
      "Handle numeric data in large complex tables with accuracy, handle visually complex layouts in slides, financial statements and reports",
    illustration: financeDoc,
  },
  {
    icon: <ScrollText size={40} />,
    name: "Scientific Paper",
    description:
      "Handle complex layouts, mathematical equations and chemical formulas, document structure",
    illustration: scienceDoc,
  },
  {
    icon: <ChartNoAxesCombined size={40} />,
    name: "Professional Services and Consulting",
    description:
      "Handle varying layout structures on slides, client reports in different document standards, project proposals etc.",
    illustration: consultDoc,
  },
  {
    icon: <Blocks size={40} />,
    name: "Manufacturing and Operations",
    description:
      "Transform multimodal technical docs (product manuals, operation guides) featuring flow diagrams and technical drawings into actionable data with ease.",
    illustration: manufactureDoc,
  },
  {
    icon: <ShieldCheck size={40} />,
    name: "Insurance",
    description:
      "Handle complex tables, handwritten claim forms, invoices with accuracy.",
    illustration: insuranceDoc,
  },
];

export default function ProductUseCases() {
  return (
    <section className="mt-20 flex flex-col items-center text-center w-full">
      <div
        className={title({
          class: "max-w-7xl w-full text-darkBlue leading-tight lg:leading-snug",
        })}
      >
        Transforming Use Cases Across Sectors
      </div>
      <div className={subtitle({ class: "mt-4 max-w-3xl items-center" })}>
        Unlock the power of intelligent document understanding for every
        industry. From finance and insurance to science, consulting, and
        manufacturing, our solution adapts to complex layouts and diverse
        formats—turning unstructured documents into actionable data.
      </div>
      <div className="w-full overflow-x-auto">
        <HorizontalScrollCarousel cards={useCases} />
      </div>
    </section>
  );
}
