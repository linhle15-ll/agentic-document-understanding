'use client'
import React, { useState, useRef, useEffect } from "react";
import { File as FileIcon, Upload as UploadIcon } from "lucide-react";

export default function Upload({ passedFile, onFileChange}: { passedFile?: File | null , onFileChange?: (file: File | null) => void}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (passedFile) {
      setFile(passedFile);
    }
  }, [passedFile])

  const handleAreaClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      if (onFileChange) {
        onFileChange(e.target.files[0]);
      }
    }
  };

  return (
    <div className="bg-background p-6 rounded-lg shadow-lg w-full border border-gray-20">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold bg-clip-text text-darkBlue">Upload File</h3>
          <p className="text-muted-foreground mt-2">Drag and drop your file or click to select.</p>
        </div>
        <div
          className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center space-y-4 cursor-pointer transition-all duration-300 ${
            file ? 'border-darkBlue bg-darkBlue/5' : 'border-foreground/20 hover:border-darkBlue hover:bg-darkBlue/5'
          }`}
          onClick={handleAreaClick}
          onDragOver={(e) => {
            e.preventDefault();
            e.currentTarget.classList.add('border-darkBlue', 'bg-darkBlue/5');
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            if (!file) {
              e.currentTarget.classList.remove('border-darkBlue', 'bg-darkBlue/5');
            }
          }}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              setFile(e.dataTransfer.files[0]);
              if (onFileChange) {
                onFileChange(e.dataTransfer.files[0]);
              }
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Upload file"
        >
          {file ? (
            <>
              <FileIcon className="w-12 h-12 text-darkBlue animate-pulse" />
              <p className="text-darkBlue font-medium">{file.name}</p>
              <p className="text-sm text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </>
          ) : (
            <>
              <UploadIcon className="w-12 h-12 text-foreground/60" />
              <p className="text-foreground/80">Drag and drop file here</p>
              <p className="text-muted-foreground text-sm">or</p>
              <button
                type="button"
                className="px-4 py-2 bg-darkBlue text-white rounded-lg font-semibold shadow-lg hover:shadow-darkBlue/25 hover:bg-darkBlue/90 active:scale-95 transition-all duration-200"
                onClick={handleAreaClick}
              >
                Select File
              </button>
            </>
          )}
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
          />
        </div>
        {file && (
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-darkBlue text-white rounded-lg font-semibold shadow-lg hover:shadow-darkBlue/25 hover:bg-darkBlue/90 active:scale-95 transition-all duration-200"
              onClick={() => {
                // Handle upload logic here
                console.log('Uploading file:', file);
              }}
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
}