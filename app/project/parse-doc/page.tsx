"use client";
import React, { useState } from "react";
import Image from "next/image";
import { button as buttonStyles, Button, Link } from "@heroui/react";
import { MoveUpRight, FileCode2, Code } from "lucide-react";

import ParseOptionPanel from "../../../components/project.components/parse-options";

import { subtitle } from "@/components/primitives";
import { CardProps } from "@/types/index";
import { siteConfig } from "@/config/site";
import Upload from "@/components/project.components/upload";
import invoice from "@/public/use-cases/invoice-doc.webp";
import labReport from "@/public/use-cases/lab-report-doc.webp";
import performanceChart from "@/public/use-cases/performance-doc.jpg";
import accidentStatement from "@/public/use-cases/accident-statement-doc.png";
import ModalComponent from "@/components/commons/modal";

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
        <div className="text-md font-semibold text-foreground text-center mb-2">
          {name}
        </div>
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
              alt={name}
              className="object-contain rounded-md bg-white border border-gray-200"
              height={100}
              src={illustration}
              width={140}
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
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      "docx",
    // add more as needed
  };

  return map[mime] || "";
}

export default function ParseDocPage() {
  const [exampleFile, setExampleFile] = useState<File | null>(null);

  async function handleExampleFileSelect(illustration: any, name: string) {
    const url =
      typeof illustration === "string" ? illustration : illustration.src;
    const response = await fetch(url);
    const blob = await response.blob();
    const ext = getExtensionFromMime(blob.type);
    const file = new File([blob], `${name}.${ext}`, { type: blob.type });

    setExampleFile(file);
  }

  const ExampleFiles = (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 w-full justify-items-center">
      {exampleFiles.map((file, index) => (
        <button
          key={index}
          className="cursor-pointer flex justify-center transition-transform duration-200"
          type="button"
          onClick={() => handleExampleFileSelect(file.illustration, file.title)}
        >
          <Card
            descriptionArr={file.descriptionArr}
            illustration={file.illustration}
            name={file.title}
          />
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-10 px-2 sm:px-4 md:px-8 lg:px-11">
      <div className="flex flex-col gap-2 w-full mx-auto">
        <div className="w-full mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b py-5 mb-5 gap-4">
            <div className="flex items-center gap-3">
              <div>
                <div className="flex flex-row gap-1 items-center">
                  <FileCode2
                    className="text-fptGreen font-semibold"
                    size={35}
                  />
                  <div
                    className={subtitle({
                      size: "lg",
                      class:
                        "font-semibold text-darkBlue leading-tight lg:leading-snug",
                    })}
                  >
                    Document Parsing
                  </div>
                </div>

                <div className="text-gray-500 text-base mt-1">
                  Effortlessly parse and extract structured data from complex
                  documents, including text, tables, images, and more. The API
                  returns results in a hierarchical format with precise element
                  locations.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 mt-4 md:mt-0">
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                  color: "primary",
                })}
                href={siteConfig.links.docs}
              >
                API Doc <MoveUpRight className="font-semibold" size={16} />
              </Link>
              <Button color="primary" radius="full" variant="solid">
                Code snippet{" "}
                <Code className="text-white font-semibold" size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* General Setup */}
          <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
            <ParseOptionPanel />
          </div>
          <div className="flex-1 flex flex-col sm:mt-4 md:mt-4 justify-center">
            <Upload passedFile={exampleFile} onFileChange={setExampleFile} />

            <div className="relative flex flex-col gap-3 min-w-screen mt-8 text-md font-semibold justify-center text-center px-2 w-full">
              Explore our example files to get started with document parsing.
              <ModalComponent
                buttonAction="OK"
                buttonColor="primary"
                buttonName="Example files"
                buttonVariant="bordered"
                modalContent={ExampleFiles}
                modalTitle="Example files"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
