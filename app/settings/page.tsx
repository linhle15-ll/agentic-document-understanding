
'use client';
import { subtitle } from "@/components/primitives";
import { Pen, Settings } from "lucide-react";
import { Input, Snippet } from "@heroui/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TableExtraction from "@/components/project.components/table-extraction";
import ModalComponent from "@/components/modal";

export default function SettingsPage(this: any) {
    return (
        <div className="flex flex-col items-center w-full min-h-screen pb-10 px-2 sm:px-4 md:px-8 lg:px-11">
            <div className="flex flex-col gap-2 w-full mx-auto">
                <div className="w-full mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b py-5">
                        <div className="flex items-center gap-3">

                            <div>
                                <div className="flex flex-row gap-1 items-center">
                                    <Settings size={35} className="font-semibold" /> 
                                    <div className={subtitle({ size: "lg", class: "font-semibold text-darkBlue" })}>
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
                <div className="flex flex-col gap-2 w-full mx-auto bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-row justify-between items-center p-1 bg-gray-20 s">
                        

                    </div>
                    <div className="flex flex-row justify-around">
                        <div className={subtitle({size:"lg", class:"text-gray-900 font-semibold"})}> Organization Information </div>
                        <div className="flex flex-row gap-2 mt-4 md:mt-0">
                            <ModalComponent 
                                modalTitle={
                                    <span className="flex items-center gap-1">
                                        <Pen size={16} className="font-semibold" />
                                        Edit Organization Name
                                    </span>
                                }
                                modalContent={
                                    <Input 
                                        isRequired 
                                        className="w-full"
                                        label="Organization Name" 
                                        placeholder="e.g. My Organization" 
                                        type="text" 
                                    />
                                } 
                                buttonName="Edit Organization Name"
                                buttonVariant="solid" 
                                buttonColor="primary" 
                                buttonAction="Apply" 
                            />
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="flex flex-col gap-1">
                            Organization ID
                            <Snippet>copy Organization ID</Snippet>
                        </div>
                        <div className="flex flex-col gap-1">
                            Organization Name
                            <Snippet> User Org</Snippet>
                            <CopyToClipboard text={this.state.value}
                                onCopy={() => this.setState({copied: true})}>
                                <span>Copy to clipboard with span</span>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full mx-auto bg-white border border-gray-200 rounded-lg p-4">
                    <div className={subtitle({size:"lg", class:"text-gray-900 font-semibold"})}> Projects </div>
                    <TableExtraction />
                </div>
            </div>
        </div>
    );
}