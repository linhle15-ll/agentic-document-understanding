// This FileView component is not a complete file view, might need adjustments later when with BE
import React from "react";
import Image from "next/image";

export default function FileViewer({ file }: { file: File | null }) {
  const [url, setUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!file) {
      setUrl(null);

      return;
    }
    const objectUrl = URL.createObjectURL(file);

    setUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  if (!file || !url)
    return <div className="text-gray-400">No file selected</div>;

  if (file.type.startsWith("image/")) {
    return (
      <Image
        alt={file.name}
        className="max-w-full max-h-[500px] rounded shadow"
        src={url}
      />
    );
  }
  if (file.type === "application/pdf") {
    return (
      <iframe
        className="w-full h-[600px] border rounded"
        src={url}
        title={file.name}
      />
    );
  }

  // For DOC/DOCX and others, you can show a download link or a message
  return (
    <div className="flex flex-col items-center">
      <span className="text-gray-500 mb-2">
        Preview not supported for this file type.
      </span>
      <a className="text-blue-600 underline" download={file.name} href={url}>
        Download {file.name}
      </a>
    </div>
  );
}
