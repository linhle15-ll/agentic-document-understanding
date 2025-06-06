import Image, { StaticImageData } from "next/image";
import benefit1 from "@/public/benefit1.webp";
import benefit2 from "@/public/benefit2.webp";

type BenefitCardProps = {
  title: string;
  descriptions: string[];
  imgSrc: StaticImageData | string;
  imgAlt: string;
  reverse?: boolean;
};

function BenefitCard({ title, descriptions, imgSrc, imgAlt, reverse }: BenefitCardProps) {
  return (
    <div className="w-full py-12">
      <div className={`flex flex-col md:flex-row${reverse ? '-reverse' : ''} items-center gap-12`}>
        <div className="flex-1 flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-6 text-left">{title}</h3>
          <ul className="list-disc pl-6 text-black dark:text-white text-base flex flex-col gap-2 items-start text-left">
            {descriptions.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={840}
            height={600}
            className="rounded-lg object-cover max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function ProductBenefits() {
  return (
    <div>
      <section className="flex flex-col gap-5 items-center w-full max-w-7xl">
        <BenefitCard
          title="Complex Layout Extraction"
          descriptions={[
            "Parse documents into semantic chunks to ensure high-quality data ingestion to prepare data for RAG in downstream LLM applications",
            "Zero-shot parsing of diverse document formats (PDFs, scans, tables) without requiring layout-specific training",
            "Captures intricate semantic relationships between elements beyond basic OCR to extract enriched data, including form fields and layouts",
          ]}
          imgSrc={benefit1}
          imgAlt="Benefit 1: Complex Layout Extraction"
        />
        <BenefitCard
          title="Accurate Extraction of Tables and Charts"
          descriptions={[
            "Accurately extracts data from charts, tables, and complex visual layouts",
            "Eliminates errors and partial interpretations common in text-only analysis",
            "Enables comprehensive data capture for precise insights across industries",
          ]}
          imgSrc={benefit2}
          imgAlt="Benefit 2: Accurate Extraction of Tables and Charts"
          reverse
        />
        {/* Add more BenefitCard components as needed */}
      </section>
    </div>
  );
}