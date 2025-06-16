import { useState } from "react";
import { Input, Switch, Button, Select, SelectItem, Textarea, RadioGroup, Radio } from "@heroui/react";
import { CircleHelp, ChevronDown, ChevronUp, SlidersHorizontal, Table, Code, Plus, X } from "lucide-react";
import PriceDropdown from "@/components/project.components/price-drop-down-input";
import { subtitle } from "../primitives";

const DocumentTypes = [
    { key: "custom", label: "Custom" },
    { key: "technical resume", label: "Technical Resume" },
    { key: "invoice", label: "Invoice" },
    { key: "research paper", label: "Research Paper" },
    { key: "10 K/Q Filling", label: "10 K/Q Filling" },
];


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

export default function AgentConfigPanel() {
    const [isPriceSectionOpen, setIsPriceSectionOpen] = useState<boolean>(true);
    const [isExtractionSettingOpen, setIsExtractionSettingOpen] = useState<boolean>(true);
    const [extractionTarget, setExtractionTarget] = useState<string>("page");
    const [useReasoning, setUseReasoning] = useState<boolean>(false);
    const [citeSources, setCiteSources] = useState<boolean>(false);
    const [chunkMode, setChunkMode] = useState<string>("page");
    const [noCache, setNoCache] = useState(false);
    const [documentType, setDocumentType] = useState<string>("custom");
    const [isSchemaSetUp, setIsSchemaSetUp] = useState<boolean>(false);
    const [isSetSchemaField, setIsSetSchemaField] = useState<boolean>(false);
    const [isField, setIsField] = useState<boolean>(true);

    type Field = { name: string; type: string; description: string };
    const [fields, setFields] = useState<Field[]>([]);

    const handleAddField = () => {
        setFields([...fields, { name: "", type: "string", description: "" }]);  
        setIsSetSchemaField(true);
    }

    const handleFieldChange = (idx1: number, key: string, value: string) => {
        setFields(fields =>
            fields.map((field, idx2) =>
                idx1 === idx2 ? { ...field, [key]: value } : field
            )
        )
    }
    return (
        <div className="flex flex-col w-full h-[calc(100vh-2rem)] border-gray-200 border rounded-lg p-3 bg-white">
            <div className={subtitle({ size: "md", class: "font-semibold leading-tight lg:leading-snug" })}>
                Agent Configuration
            </div>
            <div className="flex flex-col w-full h-full pb-4 bg-white overflow-y-auto">
                {/* Basic */}
                <div className="relative border-b w-full">
                    <button
                        className="flex items-center justify-between w-full px-4 py-3 font-semibold"
                        onClick={() => setIsPriceSectionOpen((v) => !v)}
                    >
                        <div className={subtitle({ size: "sm", class: "text-gray-900 text-left leading-tight lg:leading-snug" })}>Basic</div>
                        {isPriceSectionOpen ? <ChevronDown /> : <ChevronUp />}
                    </button>
                    {isPriceSectionOpen && (
                        <div className="px-4 pb-4 flex flex-col gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <SlidersHorizontal size={14} className="text-gray-500" />
                                    <span className="font-medium">Extraction Mode</span>
                                    <Tooltip content={
                                        <>
                                            <div>
                                                Choose the extraction mode based on your document type and requirements.
                                                The selected mode will determine the extraction algorithm and its performance.
                                            </div>
                                            <div className="mt-1">
                                                <span className="font-semibold">Note:</span>
                                                The selected mode will affect the cost of the extraction process.
                                            </div>
                                        </>
                                    }>
                                        <CircleHelp size={16} style={{ verticalAlign: "middle" }} />
                                    </Tooltip>
                                </div>
                                <PriceDropdown />
                            </div>
                        </div>
                    )}
                </div>

                {/* Extraction Settings */}
                <div className="border-b">
                    <button
                        className="flex justify-between w-full px-4 py-3 font-semibold"
                        onClick={() => setIsExtractionSettingOpen((v) => !v)}
                    >
                        <div className={subtitle({ size: "sm", class: "text-gray-900 text-left leading-tight lg:leading-snug" })}>Advanced</div>
                        {isExtractionSettingOpen ? <ChevronDown /> : <ChevronUp />}
                    </button>
                    {isExtractionSettingOpen && (
                        <div>
                            <div className="px-4 pb-4 flex flex-col gap-2">
                                <span className="font-semibold">Extraction Settings</span>
                                <div className="ml-2 flex flex-col gap-2">
                                    {/* Extraction Target */}
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium">Extraction Target</span>
                                        <Tooltip content={
                                            <>
                                                <div>
                                                    Choose whether to extract data from the entire document at once or process each page individually.
                                                    Per-page extraction outputs a list of results, one for each page.
                                                </div>
                                            </>
                                        }>
                                            <CircleHelp size={16} style={{ verticalAlign: "middle" }} />
                                        </Tooltip>
                                    </div>
                                    <RadioGroup label="Select your extraction target" value={extractionTarget} onValueChange={setExtractionTarget}>
                                        <Radio value="page"><span className="text-sm"> Page </span></Radio>
                                        <Radio value="document"><span className="text-sm"> Document </span></Radio>
                                    </RadioGroup>
                                    <p className="text-default-500 text-small mt-2">Selected: {extractionTarget}</p>

                                    {/* System Prompt */}
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium">System Prompt</span>
                                        <Tooltip content={
                                            <>
                                                <div>
                                                    Provide additional task-specific instructions or context to the language model to guide the extraction process.
                                                </div>
                                            </>
                                        }>
                                            <CircleHelp size={16} style={{ verticalAlign: "middle" }} />
                                        </Tooltip>
                                    </div>
                                    {/* Text Area */}
                                    <div className="w-full">
                                        <Textarea
                                            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                                            placeholder="(Optional) Enter your system prompt)"
                                            variant={"faded"}
                                        />
                                    </div>
                                </div>
                                {/* Extensions */}
                                <span className="font-semibold">Extensions</span>
                                <div className="ml-2 flex flex-col gap-2">
                                    {/* Use Reasonings */}
                                    <div className="flex items-center gap-2 mb-z">
                                        <Switch checked={useReasoning} onChange={e => setUseReasoning(e.target.checked)} />
                                        <span className="font-medium">Use Reasoning</span>
                                        <Tooltip content={
                                            <>
                                                <div>
                                                    Enable reasoning mode for potentially better accuracy on complex extractions.
                                                    (Only available in Balanced and Multimodal modes)
                                                </div>
                                            </>
                                        }>
                                            <CircleHelp size={16} style={{ verticalAlign: "middle" }} />
                                        </Tooltip>
                                    </div>

                                    {/* Cite Sources */}
                                    <div className="flex items-center gap-2 mb-1">
                                        <Switch checked={citeSources} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCiteSources(e.target.checked)} />
                                        <span className="font-medium">Cite Sources</span>
                                        <Tooltip content={
                                            <>
                                                <div>
                                                    Cite sources for the extracted data.
                                                    (Only available in Multimodal mode).
                                                </div>
                                            </>
                                        }>
                                            <CircleHelp size={16} style={{ verticalAlign: "middle" }} />
                                        </Tooltip>
                                    </div>
                                </div>
                                {/* Others */}
                                <span className="font-semibold">Others</span>
                                <div className="ml-2 flex flex-col gap-2">
                                    {/* Chunk Mode */}
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium">Chunk Mode</span>
                                        <Tooltip content={
                                            <>
                                                <div>
                                                    Determines how long documents are divided into chunks for processing.
                                                </div>
                                                <div>
                                                    - <span className="font-semibold">PAGE: </span>Respect page boundaries when chunking. (Default)
                                                </div>
                                                <div>
                                                    - <span className="font-semibold">SECTION: </span> Respect document section continuity. (Not available in FAST mode)
                                                </div>
                                            </>
                                        }>
                                            <CircleHelp size={16} style={{ verticalAlign: "middle" }} />
                                        </Tooltip>
                                    </div>
                                    <RadioGroup label="Select your extraction target" value={chunkMode} onValueChange={setChunkMode}>
                                        <Radio value="page"><span className="text-sm"> Page </span></Radio>
                                        <Radio value="section"><span className="text-sm"> Sections </span></Radio>
                                    </RadioGroup>
                                    <p className="text-default-500 text-small mt-2">Selected: {extractionTarget}</p>

                                    {/* Invalidate Cache */}
                                    <div className="flex items-center gap-2 mb-1">
                                        <Switch checked={noCache} onChange={e => setNoCache(e.target.checked)} />
                                        <span className="font-semibold">Invalidate Cache</span>
                                        <Tooltip content={
                                            <>
                                                <div>
                                                    Purge cached results and rerun the full extraction.
                                                </div>
                                            </>
                                        }>
                                            <CircleHelp size={16} style={{ verticalAlign: "middle" }} />
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-center justify-center align-middle">
                    <button
                        className="flex justify-between w-full px-4 py-3 font-semibold"
                        onClick={() => setIsSchemaSetUp((v) => !v)}
                    >
                        <div className={subtitle({ size: "sm", class: "text-gray-900 text-left leading-tight lg:leading-snug" })}>Schema</div>
                        {isSchemaSetUp ? <ChevronDown /> : <ChevronUp />}
                    </button>
                    {isSchemaSetUp && (
                        <div className="flex flex-col">
                            {/* Document Type Selection and Switch Schema Code */}
                            <div className="flex gap-2 w-full h-full align-bottom">
                                <Select
                                    className="max-w-xs"
                                    placeholder="Select a document type"
                                    selectedKeys={[documentType]}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDocumentType(e.target.value)}
                                >
                                    {DocumentTypes.map((documentType) => (
                                        <SelectItem key={documentType.key}>
                                            {documentType.label}
                                        </SelectItem>
                                    ))}
                                </Select>

                                {/* Switch Schema and Code */}
                                <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit h-full items-baseline align-bottom">
                                    <button
                                        onClick={() => setIsField(true)}
                                        className={`px-4 py-2 rounded-lg font-semibold transition ${isField
                                            ? "bg-white text-gray-900 shadow"
                                            : "bg-transparent text-gray-400"
                                            }`}
                                    >
                                        <Table />
                                    </button>
                                    <button
                                        onClick={() => setIsField(false)}
                                        className={`px-4 py-2 rounded-md font-semibold transition ${!isField
                                            ? "bg-white text-gray-900 shadow"
                                            : "bg-transparent text-gray-400"
                                            }`}
                                    >
                                        <Code />
                                    </button>
                                </div>
                            </div>
                            {/* Create Schema */}
                            <div className="mt-4">
                            {isSetSchemaField === false ? (
                                <div className="flex flex-col gap-2 justify-center items-center align-middle">
                                <div className={subtitle({ size: "sm", class: "text-gray-900 text-center font-semibold leading-tight lg:leading-snug" })}> Create Schema </div>
                                <div className="text-gray-500 text-center">
                                    Add the fields to extract from the document.
                                    Schema Builder supports only a subset of
                                    JSON schema — use the Raw Editor if needed.
                                </div>
                                <Button variant="solid" radius="full" color="primary" onClick={handleAddField}>
                                    <Plus size={16} className="text-white font-semibold" /> Add Field
                                </Button>
                            </div>
                            ) :
                            (
                                <div className="flex flex-col gap-4">
                                    {/* ...schema header and controls... */}
                                    <div className="flex flex-col gap-2">
                                        {fields.map((field, idx) => (
                                            <div key={idx} className="flex gap-2 items-center">
                                                <Input
                                                    placeholder="Field name"
                                                    value={field.name}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange(idx, "name", e.target.value)}
                                                    className="min-w-0"
                                                />
                                                <Select
                                                    selectedKeys={[field.type]}
                                                    onChange={e => handleFieldChange(idx, "type", e.target.value)}
                                                    className="min-w-0"
                                                >
                                                    <SelectItem key="string">String</SelectItem>
                                                    <SelectItem key="number">Number</SelectItem>
                                                    <SelectItem key="boolean">Boolean</SelectItem>
                                                </Select>
                                                <Input
                                                    className="min-w-0"
                                                    placeholder="Field description"
                                                    isRequired
                                                    value={field.description}
                                                    onChange={e => handleFieldChange(idx, "description", e.target.value)}
                                                />
                                                <X size={16} className="font-semibold text-red-600"/>
                                            </div>
                                        ))}
                                        <Button
                                            variant="solid"
                                            radius="full"
                                            color="primary"
                                            onClick={handleAddField}
                                            className="mt-2 w-fit"
                                        >
                                            <Plus size={16} className="text-white font-semibold" /> Add Field
                                        </Button>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-shrink gap-4 justify-center items-center">
                <Button color="primary" radius="full" variant="bordered" type="submit" className="w-full">
                    Load Published
                </Button>
                <Button color="primary" radius="full" variant="solid" type="submit" className="w-full">
                    Publish Configuration
                </Button>
            </div>
        </div>
    );
}
