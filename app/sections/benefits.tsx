import Image from "next/image";

import { title } from "@/components/primitives";
import { CardProps } from "@/types/index";
import benefit1 from "@/public/benefits/benefit1.webp";
import benefit2 from "@/public/benefits/benefit2.webp";
import PlaceHolderImg from "@/public/commons/placeholder-image.jpg";
// TODO: Add benefits illustration of this product
const benefits = [
  {
    name: "Complex Layout Extraction",
    descriptionArr: [
      "Parse documents into semantic chunks to ensure high-quality data ingestion to prepare data for RAG in downstream LLM applications",
      "Zero-shot parsing of diverse document formats (PDFs, scans, tables) without requiring layout-specific training",
      "Captures intricate semantic relationships between elements beyond basic OCR to extract enriched data, including form fields and layouts",
    ],
    illustration: benefit1,
    alt: "Benefit 1: Complex Layout Extraction",
  },
  {
    name: "Accurate Extraction of Tables and Charts",
    descriptionArr: [
      "Accurately extracts data from charts, tables, and complex visual layouts",
      "Eliminates errors and partial interpretations common in text-only analysis",
      "Enables comprehensive data capture for precise insights across industries",
    ],
    illustration: benefit2,
    alt: "Benefit 2: Accurate Extraction of Tables and Charts",
  },
];

const BenefitCard = ({ name, descriptionArr, illustration }: CardProps) => {
  return (
    <div className="w-full py-8 px-2">
      <div
        className={
          "flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12"
        }
      >
        <div className="flex-1 flex flex-col items-start w-full">
          <h3 className="text-2xl font-bold mb-6 text-left">{name}</h3>
          <ul className="list-disc pl-6 text-base flex flex-col gap-2 items-start text-left">
            {descriptionArr?.map((desc, i) => <li key={i}>{desc}</li>)}
          </ul>
        </div>
        <div className="flex-1 flex justify-center w-full max-w-xl">
          <Image
            priority
            alt={name}
            className="rounded-lg object-cover w-full h-auto max-w-full"
            height={400}
            src={illustration || PlaceHolderImg}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default function ProductBenefits() {
  return (
    <div>
      <section className="flex flex-col gap-5 items-center text-center w-full max-w-7xl mt-20 px-8">
        <div
          className={title({
            size: "md",
            class: "pb-4 text-darkBlue leading-tight lg:leading-snug",
          })}
        >
          Why Agentic Document Understanding?
        </div>
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            descriptionArr={benefit.descriptionArr}
            illustration={benefit.illustration}
            name={benefit.name}
          />
        ))}
      </section>
    </div>
  );
}
