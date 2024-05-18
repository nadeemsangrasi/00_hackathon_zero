"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { uploadResult } from "../page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

const UploadButton = () => {
  let router = useRouter();
  return (
    <Button asChild>
      <div className="flex gap-2 ">
        <Upload />

        <CldUploadButton
          onUpload={(result: uploadResult) => {
            router.refresh();
          }}
          uploadPreset="hestz1ns"
        />
      </div>
    </Button>
  );
};

export default UploadButton;
