
'use client';
import { subtitle } from "@/components/primitives";
import { Input, Select, SelectItem } from "@heroui/react";
import { KeyRound } from "lucide-react";
import ModalComponent from "@/components/commons/modal";
import { TableAPI } from "@/components/project.components/table-project";

const projects = [
    { key: "project1", label: "Project 1" },
    { key: "project2", label: "Project 2" },
    { key: "project3", label: "Project 3" },
];

export default function APIKeyPage() {
    const KeyCreateModal = (
        <div>
            <div> Create a new API key to access our services. Make sure to copy your new API key — you won't be able to see it again! </div>
            <Input isRequired label="Name (Optional)" placeholder="My Test Key" type="testKey" />
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Select className="max-w-xs" label="Select a project">
                    {projects.map((prj) => (
                        <SelectItem key={prj.key}>{prj.label}</SelectItem>
                    ))}
                </Select>
            </div>
            
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
                                    <KeyRound size={35} className="font-semibold" /> 
                                    <div className={subtitle({ size: "lg", class: "font-semibold text-darkBlue leading-tight lg:leading-snug" })}>
                                        API Keys
                                    </div>
                                </div>

                                <div className="text-gray-500 text-base mt-1">
                                    Manage your API keys for <span className="font-semibold"> User's Org - Default </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 mt-4 md:mt-0">
                            <ModalComponent modalTitle="Generate New Key" modalContent={KeyCreateModal} buttonName="Generate New Key" buttonVariant="solid" buttonColor="primary" buttonAction="Create Key" />
                        </div>
                    </div>
                </div>

                {/* Main */}
                <TableAPI />
            </div>
        </div>
    );
}