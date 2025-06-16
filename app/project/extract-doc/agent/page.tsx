"use client";
import { Input } from "@heroui/input";
import { FileOutput } from "lucide-react";

import { subtitle } from "@/components/primitives";
import ModalComponent from "@/components/commons/modal";
import { TableExtraction } from "@/components/project.components/table-project";

export default function ExtractDocAgentPage() {
  const AgentCreateModal = (
    <Input
      isRequired
      label="Name"
      placeholder="e.g. Annual Report 2025"
      type="name"
    />
  );

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-10 px-2 sm:px-4 md:px-8 lg:px-11">
      <div className="flex flex-col gap-2 w-full mx-auto">
        <div className="w-full mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b py-5 mb-5 gap-4">
            <div className="flex items-center gap-3">
              <div>
                <div className="flex flex-row gap-1 items-center">
                  <FileOutput
                    className="text-fptOrange font-semibold"
                    size={35}
                  />
                  <div
                    className={subtitle({
                      size: "lg",
                      class:
                        "font-semibold text-darkBlue leading-tight lg:leading-snug",
                    })}
                  >
                    Document Extraction
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
              <ModalComponent
                buttonAction="Create"
                buttonColor="primary"
                buttonName="Create Extraction Agent"
                buttonVariant="solid"
                modalContent={AgentCreateModal}
                modalTitle="Create Extraction Agent"
              />
            </div>
          </div>
        </div>

        {/* Main - Extraction Project Table */}
        <TableExtraction />
      </div>
    </div>
  );
}
