'use client'

import type { Selection } from "@heroui/react";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Info } from "lucide-react";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center justify-center ml-1 w-24 px-2 py-0.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-900">
      {children}
    </span>
  );
}

export default function PriceDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["balanced"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="capitalize w-48 justify-between" variant="bordered">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Preset selection"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={setSelectedKeys}
        className="min-w-[320px]"
      >
        <DropdownItem
          key="fast"
          description="Simple, text-only documents"
          startContent={<Info size={16} className="text-gray-400 mr-2" />}
          endContent={<Badge>1 cred.</Badge>}
        >
          Fast
        </DropdownItem>
        <DropdownItem
          key="balanced"
          description="Documents with tables and images"
          startContent={<Info size={16} className="text-gray-400 mr-2" />}
          endContent={<Badge>3 cred.</Badge>}
        >
          Balanced
        </DropdownItem>
        <DropdownItem
          key="premium"
          description="Complex documents with tables and images"
          startContent={<Info size={16} className="text-gray-400 mr-2" />}
          endContent={<Badge>45 cred.</Badge>}
        >
          Premium
        </DropdownItem>
        <DropdownItem
          key="custom"
          description="Choose your own configuration"
          endContent={
            <>
              <span className="bg-blue-100 text-fptBlue px-2 py-0.5 rounded-full text-xs font-semibold mr-2">Advanced</span>
              <Badge>1 - 45 cred.</Badge>
            </>
          }
        >
          Custom
        </DropdownItem>
        <DropdownItem isReadOnly className="text-xs text-gray-500 mt-2 mb-1" key="section">
          Use-case oriented presets
        </DropdownItem>
        <DropdownItem
          key="complex_tables"
          description="For invoices and receipts"
          startContent={<Info size={16} className="text-gray-400 mr-2" />}
          endContent={<Badge>90 cred.</Badge>}
        >
          Complex tables
        </DropdownItem>
        <DropdownItem
          key="invoice"
          description="For invoices and receipts"
          endContent={<Badge>90 cred.</Badge>}
        >
          Invoice
        </DropdownItem>
        <DropdownItem
          key="scientific_papers"
          description="For scientific papers and reports"
          endContent={<Badge>90 cred.</Badge>}
        >
          Scientific papers
        </DropdownItem>
        <DropdownItem
          key="technical_documentation"
          description="For technical notice with schematics"
          endContent={<Badge>90 cred.</Badge>}
        >
          Technical documentation
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}