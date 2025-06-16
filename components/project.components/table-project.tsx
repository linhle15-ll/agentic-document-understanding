// components/ReusableTable.tsx
'use client';
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  getKeyValue,
} from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useInfiniteScroll } from "@heroui/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { ProjectExtractionProps } from "@/types";
import { ProjectApiProps } from "@/types";

interface Column<T = any> {
  key: string;
  label: string;
  renderCell?: (item: T) => React.ReactNode;
}

interface ProjectTableProps<T> {
  columns: Column[];
  items: T[];
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  getRowKey: (item: T) => string;
}

// Generic Project Table Component
export function ProjectTable<T>({
  columns,
  items,
  isLoading,
  hasMore,
  onLoadMore,
  getRowKey,
}: ProjectTableProps<T>) {
  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore,
  });

  return (
    <Table
      isHeaderSticky
      baseRef={scrollerRef}
      aria-label="Reusable table"
      bottomContent={
        hasMore ? (
          <div className="flex w-full justify-center">
            <Spinner ref={loaderRef} color="white" />
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[400px]",
      }}
    >
      <TableHeader>
        {columns.map((col) => (
          <TableColumn key={col.key}>{col.label}</TableColumn>
        ))}
      </TableHeader>

      <TableBody isLoading={isLoading} items={items} loadingContent={<Spinner color="white" />}>
        {(item: T) => (
          <TableRow key={getRowKey(item)}>
            {columns.map((col) => (
                <TableCell key={col.key}>
                    {col.renderCell
                        ? col.renderCell(item)
                        : getKeyValue(item, col.key)}
                    </TableCell>
                ))}
                </TableRow>
                )}
      </TableBody>
    </Table>
  );
}

// Extraction Project Table
export function TableExtraction() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasMore, setHasMore] = React.useState(false);

  let list = useAsyncList<ProjectExtractionProps>({
    async load({ signal, cursor }) {
      if (cursor) setIsLoading(false);
      const res = await fetch(cursor || "/api/extraction", { signal });
      const json = await res.json();

      setHasMore(json.next !== null);
      return { items: json.results, cursor: json.next };
    },
  });

  return (
    <ProjectTable
      columns={[
        { key: "name", label: "Name" },
        { key: "createdAt", label: "Created At" },
        { key: "lastUpdated", label: "Last Updated" },
        { key: "_id", label: "ID" },
        { 
            key: "action", 
            label: "Action",
            renderCell: (item) => (
                <button
                    className="p-1 rounded hover:bg-red-100 flex items-center justify-center"
                    title="Delete"
                >
                    <Trash2 size={16} className="text-red-500" />
                </button>
            )
        },
      ]}
      items={list.items}
      isLoading={isLoading}
      hasMore={hasMore}
      onLoadMore={list.loadMore}
      getRowKey={(item) => item._id}
    />
  );
}

// API Table
export function TableAPI() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasMore, setHasMore] = React.useState(false);

  let list = useAsyncList<ProjectApiProps>({
    async load({ signal, cursor }) {
      if (cursor) setIsLoading(false);
      const res = await fetch(cursor || "/api/projects", { signal });
      const json = await res.json();

      setHasMore(json.next !== null);
      return { items: json.results, cursor: json.next };
    },
  });

  return (
    <ProjectTable
      columns={[
        { key: "name", label: "Name" },
        { key: "createdAt", label: "Created At" },
        { key: "lastUpdated", label: "Last Updated" },
        { key: "APIKey", label: "API Key" },
        { 
            key: "action", 
            label: "Action",
            renderCell: (item) => (
                <button
                    className="p-1 rounded hover:bg-red-100 flex items-center justify-center"
                    title="Delete"
                >
                    <Trash2 size={16} className="text-red-500" />
                </button>
            )
        },
      ]}
      items={list.items}
      isLoading={isLoading}
      hasMore={hasMore}
      onLoadMore={list.loadMore}
      getRowKey={(item) => item.APIKey}
    />
  );
}
