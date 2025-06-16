'use client';
import React from "react";
import Image from "next/image";
import { subtitle } from "@/components/primitives";
import SplitPane, { Pane } from 'split-pane-react';
import { button as buttonStyles, Button, Link } from "@heroui/react";
import { Code, MoveUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import ModalComponent from "@/components/commons/modal";
import invoice from '@/public/use-cases/invoice-doc.webp';
import labReport from '@/public/use-cases/lab-report-doc.webp';
import performanceChart from '@/public/use-cases/performance-doc.jpg';
import accidentStatement from '@/public/use-cases/accident-statement-doc.png';
import { CardProps } from "@/types/index";
import Upload from "@/components/project.components/upload";
import AgentConfigPanel from "@/components/project.components/agent-config-panel";
import 'split-pane-react/esm/themes/default.css';
import { TableExtraction } from "@/components/project.components/table-project";

const exampleFiles = [
  {
    title: "Invoice",
    descriptionArr: ["Tables", "Multiple-column"],
    illustration: invoice,
  },
  {
    title: "Lab Report",
    descriptionArr: ["Tables", "Multiple-column"],
    illustration: labReport,
  },
  {
    title: "Accident Statement",
    descriptionArr: ["Forms", "Checkboxes"],
    illustration: accidentStatement,
  },
  {
    title: "Performance Charts",
    descriptionArr: ["Charts", "Reading Order"],
    illustration: performanceChart,
  },
];

function Card({ name, descriptionArr, illustration }: CardProps) {
  return (
    <div className="flex flex-col justify-between items-center bg-gray-50 border border-gray-300 rounded-lg w-full max-w-xs min-w-[220px] h-full pt-2 mt-2 mx-1 shadow hover:border-primary hover:cursor-pointer transition-all">
      <div className="w-full">
        <div className="text-md font-semibold text-foreground text-center mb-2">{name}</div>
        <div className="flex flex-row flex-wrap gap-2 justify-center items-center mb-2">
          {descriptionArr?.map((desc, index) => (
            <span
              key={index}
              className="text-xs text-gray-700 bg-white border border-gray-300 font-medium text-center px-2 py-1 rounded"
            >
              {desc}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center w-full flex-1">
          {illustration && (
            <Image
              src={illustration}
              alt={name}
              className="object-contain rounded-md bg-white border border-gray-200"
              width={140}
              height={100}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function getExtensionFromMime(mime: string) {
  const map: Record<string, string> = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "application/pdf": "pdf",
    "application/msword": "doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
  };
  return map[mime] || "";
}

export default function ExtractDocMainPage() {
  const [isSchema, setIsSchema] = React.useState(false);
  const [exampleFile, setExampleFile] = React.useState<File | null>(null);

  async function handleExampleFileSelect(illustration: any, name: string) {
    const url = typeof illustration === 'string' ? illustration : illustration.src;
    const response = await fetch(url);
    const blob = await response.blob();
    const ext = getExtensionFromMime(blob.type);
    const file = new File([blob], `${name}.${ext}`, { type: blob.type });
    setExampleFile(file);
  }

  const ExampleFiles = (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 w-full justify-items-center">
      {exampleFiles.map((file, index) => (
        <div
          key={index}
          onClick={(_event: React.MouseEvent<HTMLDivElement>) => handleExampleFileSelect(file.illustration, file.title)}
          className="cursor-pointer flex justify-center transition-transform duration-200"
        >
          <Card
            name={file.title}
            descriptionArr={file.descriptionArr}
            illustration={file.illustration}
          />
        </div>
      ))}
    </div>
  );

  // Sizeable Splitpane
  const [sizes, setSizes] = React.useState([100, '30%', 'auto']);

  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-10 px-2 sm:px-4 md:px-8 lg:px-11">
      <div className="flex flex-col gap-2 w-full mx-auto flex-1">
        {/* Header */}
        <div className="flex flex-col w-full mx-auto md:flex-row md:justify-between md:items-center border-b py-5">
          <div className="flex items-center">
            <div>
              <div className={subtitle({ size: "sm", class: "font-regular leading-tight lg:leading-snug" })}>
                <Link href="/project/extract-doc/agent" className="hover:cursor-pointer">Extraction</Link> &gt; <Link href="/project/extract-doc" className="hover:cursor-pointer">Extraction</Link>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <div className={subtitle({ size: "lg", class: "font-semibold text-darkBlue leading-tight lg:leading-snug" })}>
                  Project Name
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4 md:mt-0">
            <Link
              className={buttonStyles({ variant: "bordered", radius: "full", color: "primary" })}
              href={siteConfig.links.docs}
            >
              API Doc <MoveUpRight size={16} className="font-semibold" />
            </Link>
            <Button variant="solid" radius="full" color="primary">
              Code snippet <Code size={16} className="text-white font-semibold" />
            </Button>
          </div>
        </div>

        {/* Main */}
      <div className="flex-1 min-h-0 flex flex-col gap-4">
                    {/* Switch Schema and Extraction Result */}
              <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit mb-2">
                <button
                  onClick={() => setIsSchema(true)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${isSchema
                      ? "bg-white text-gray-900 shadow"
                      : "bg-transparent text-gray-400"
                    }`}
                >
                  Schema
                </button>
                <button
                  onClick={() => setIsSchema(false)}
                  className={`px-4 py-2 rounded-md font-semibold transition ${!isSchema
                      ? "bg-white text-gray-900 shadow"
                      : "bg-transparent text-gray-400"
                    }`}
                >
                  Extraction Results
                </button>
              </div>
        {isSchema ? (
          <div className="flex flex-col lg:flex-row">
            {/* Left Panel: AgentConfigPanel */}
            <div className="h-full flex-shrink-0 w-full lg:w-[600px]">
              <AgentConfigPanel />
            </div>
            {/* Right Panel: Main Content */}
            <div className="flex-1 flex flex-col justify-center px-4">
              <Upload passedFile={exampleFile} onFileChange={setExampleFile} />

              <div className="relative flex justify-between mt-8 text-md font-semibold px-2 w-full">
                <ModalComponent modelTitle="Example files" modalContent={ExampleFiles} buttonName="Example files" buttonVariant="bordered" buttonColor="primary" buttonAction="OK" />
                <Button variant="solid" radius="md" color="primary"> Run Extraction</Button>
              </div>
            </div>
          </div>
        ) : (
          <TableExtraction />
        )}
      </div>
      </div>
    </div>
  );
}