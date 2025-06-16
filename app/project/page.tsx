import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";
import { TextQuote, Grid3x3 } from "lucide-react";
import React from "react";

import Metrics from "../sections/metrics";

import { title, subtitle } from "@/components/primitives";
import { CardProps } from "@/types/index";

function Card({
  name,
  description,
  icon,
  documentation,
  playground,
}: CardProps) {
  return (
    <div className="relative bg-white border-gray-200 shadow-lg rounded-lg p-5 flex flex-col items-center justify-center text-center h-80 w-full max-w-xs mx-auto">
      {icon}
      <div
        className={subtitle({
          size: "md",
          class:
            "mt-4 font-semibold text-darkBlue leading-tight lg:leading-snug",
        })}
      >
        {name}
      </div>
      <p
        className={subtitle({
          size: "sm",
          class: "text-gray-500 leading-tight lg:leading-snug",
        })}
      >
        {description}
      </p>
      <div className="flex gap-3 justify-center mt-4">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={documentation}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={playground}
        >
          Playground
        </Link>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Parse",
    descriptions:
      "Parse your documents into tables and images to connect them to LLM",
    icon: <Grid3x3 className="w-12 h-12 mb-4" />,
    documentation: "/doc/parse",
    playground: "/project/parse-doc",
  },
  {
    title: "Extraction",
    descriptions:
      "Provide your documents, define the schema and extract the information",
    icon: <TextQuote className="w-12 h-12 mb-4" />,
    documentation: "/doc/extraction",
    playground: "/project/extract-doc",
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen w-full bg-lightWhite flex flex-col items-center pt-8 pb-10">
      <div
        className={title({
          size: "sm",
          class:
            "font-semibold text-center text-darkBlue mb-8 leading-tight lg:leading-snug",
        })}
      >
        Agentic Document Extraction
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
        {features.map((feature, index) => (
          <Card
            key={index}
            description={feature.descriptions}
            documentation={feature.documentation}
            icon={feature.icon}
            name={feature.title}
            playground={feature.playground}
          />
        ))}
      </div>

      <div className="mt-10 w-full flex justify-center">
        <Metrics />
      </div>
    </div>
  );
}
