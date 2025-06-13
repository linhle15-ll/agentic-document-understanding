import { useState } from "react";
import { Switch } from "@heroui/react";
import { Code } from '@heroui/code';
import { Input } from "@heroui/input";
import { CircleHelp, ChevronDown, ChevronUp, SlidersHorizontal, Ban } from "lucide-react";
import PriceDropdown from "@/components/project.components/price-drop-down-input";

// Styled Tooltip component
function Tooltip({ content, children }: { content: React.ReactNode, children: React.ReactNode }) {
    const [show, setShow] = useState(false);
    return (
        <span className="relative inline-block align-middle"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
            {show && (
                <div className="absolute left-1/2 z-50 -translate-x-1/2 mt-2 w-72 bg-gray-900 text-white text-xs rounded p-3 shadow-lg">
                    {content}
                </div>
            )}
        </span>
    );
}

export default function ParseOptionPanel() {
    const [isPriceSectionOpen, setIsPriceSectionOpen] = useState<boolean>(true);
    const [isTargetPageOpen, setIsTargetPageOpen] = useState<boolean>(true);
    const [isJobOptionsOpen, setIsJobOptionsOpen] = useState<boolean>(true);
    const [noCache, setNoCache] = useState(false);

    return (
        <div>
            {/* General Setup */}
            <div className="flex flex-col gap-6 w-full max-w-lg">
                {/* General */}
                <div className="border rounded-lg">
                    <button
                        className="flex items-center justify-between w-full px-4 py-3 font-semibold"
                        onClick={() => setIsPriceSectionOpen((v) => !v)}
                    >
                        <span className="text-lg">General</span>
                        {isPriceSectionOpen ? <ChevronDown /> : <ChevronUp />}
                    </button>
                    {isPriceSectionOpen && (
                        <div className="px-4 pb-4 flex flex-col gap-4">
                            <div className="text-xs text-gray-500">All prices are per 1 page</div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <SlidersHorizontal size={14} className="text-gray-500"/>
                                    <span className="font-medium">Preset</span>
                                    <Tooltip content={
                                        <>
                                            <div>AI-powered parsing with OCR, plus image and table extraction.</div>
                                            <div className="font-semibold mt-1">Default mode, no need to set anything on API.</div>
                                            <div className="mt-2">
                                                Set <Code color="primary">target_pages="$value"</Code> on API.
                                            </div>
                                        </>
                                    }>
                                        <CircleHelp
                                            size={16}
                                            style={{ verticalAlign: "middle" }}
                                        />
                                    </Tooltip>
                                </div>
                                <PriceDropdown />
                            </div>
                        </div>
                    )}
                </div>

                {/* What to parse */}
                <div className="border rounded-lg">
                    <button
                        className="flex items-center justify-between w-full px-4 py-3 font-semibold"
                        onClick={() => setIsTargetPageOpen((v) => !v)}
                    >
                        <span className="text-lg">What to parse</span>
                        {isJobOptionsOpen ? <ChevronDown /> : <ChevronUp />}
                    </button>
                    {isTargetPageOpen && (
                        <div className="px-4 pb-4 flex flex-col gap-4">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">Target pages</span>
                                <Tooltip content={
                                    <>
                                        <div>
                                            A comma separated string listing the page to be extracted. By default, all pages will be extracted. Pages are numbered starting at 0.
                                        </div>
                                        <div className="mt-2">
                                            Set <Code color="primary">target_pages="$value"</Code> on API.
                                        </div>
                                    </>
                                }>
                                    <CircleHelp
                                        size={16}
                                        style={{ verticalAlign: "middle" }}
                                    />
                                </Tooltip>
                            </div>
                            <Input label="Target pages" placeholder="e.g. 0-5, 8, 11-13" />
                        </div>
                    )}
                </div>

                {/* Job options */}
                <div className="border rounded-lg">
                    <button
                        className="flex items-center justify-between w-full px-4 py-3 font-semibold"
                        onClick={() => setIsJobOptionsOpen((v) => !v)}
                    >
                        <span className="text-lg">Job options</span>
                        {isJobOptionsOpen ? <ChevronDown /> : <ChevronUp />}
                    </button>
                    {isJobOptionsOpen && (
                        <div className="px-4 pb-4 flex flex-col gap-4">
                            <div className="text-xs text-gray-500">
                                Agentic Document Understanding keeps results cached for 48 hours after upload.
                            </div>
                            <div className="flex items-center gap-2">
                                <Ban size={16} />
                                <span>Do not cache</span>
                                <Switch checked={noCache} onChange={e => setNoCache(e.target.checked)} />
                                <Tooltip content={
                                    <>
                                        If the "Do not cache" option is selected, Intelligent Document Understanding will not cache the results of the document parsing. This means that if the document is re-uploaded, parsing will be done from scratch, which will incur fresh billing charges.
                                        <div className="mt-2">
                                            Set <Code color="primary">do_no_cache=True</Code> on API.
                                        </div>
                                    </>
                                }>
                                    <CircleHelp 
                                        size={16} 
                                        style={{ verticalAlign: "middle" }}
                                    />
                                </Tooltip>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>  
    );
}