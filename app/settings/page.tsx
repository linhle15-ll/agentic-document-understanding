"use client";
import { Pen, Settings } from "lucide-react";
import { Input, Snippet } from "@heroui/react";

import { subtitle } from "@/components/primitives";
import { TableExtraction } from "@/components/project.components/table-project";
import ModalComponent from "@/components/commons/modal";

export default function SettingsPage(this: any) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-10 px-2 sm:px-4 md:px-8 lg:px-11">
      <div className="flex flex-col gap-2 w-full mx-auto">
        <div className="w-full mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b py-5">
            <div className="flex items-center gap-3">
              <div>
                <div className="flex flex-row gap-1 items-center">
                  <Settings className="font-semibold" size={35} />
                  <div
                    className={subtitle({
                      size: "lg",
                      class:
                        "font-semibold text-darkBlue leading-tight lg:leading-snug",
                    })}
                  >
                    Settings
                  </div>
                </div>

                <div className="text-gray-500 text-base mt-1">
                  Manage organization settings.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 w-full mx-auto bg-white border border-gray-200 rounded-lg p-4">
            {/* Switch Organization, Members, Billing */}
            <div className="flex flex-row justify-around">
              <div
                className={subtitle({
                  size: "lg",
                  class:
                    "text-gray-900 font-semibold leading-tight lg:leading-snug",
                })}
              >
                {" "}
                Organization Information{" "}
              </div>
              <div className="flex flex-row gap-2 mt-4 md:mt-0">
                <ModalComponent
                  buttonAction="Apply"
                  buttonColor="primary"
                  buttonName="Edit Organization Name"
                  buttonVariant="solid"
                  modalContent={
                    <Input
                      isRequired
                      className="w-full"
                      label="Organization Name"
                      placeholder="e.g. My Organization"
                      type="text"
                    />
                  }
                  modalTitle={
                    <span className="flex items-center gap-1">
                      <Pen className="font-semibold" size={16} />
                      Edit Organization Name
                    </span>
                  }
                />
              </div>
            </div>

            <div className="flex flex-row gap-32 w-full items-start">
              <div className="flex flex-col gap-1 align-middle justify-between">
                Organization ID
                <Snippet>copy Organization ID</Snippet>
              </div>
              <div className="flex flex-col gap-2">
                Organization Name
                <Snippet> User Org</Snippet>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full mx-auto bg-white border border-gray-200 rounded-lg p-4">
            <div
              className={subtitle({
                size: "lg",
                class:
                  "text-gray-900 font-semibold leading-tight lg:leading-snug",
              })}
            >
              {" "}
              Projects{" "}
            </div>
            <TableExtraction />
          </div>
        </div>
      </div>
    </div>
  );
}
