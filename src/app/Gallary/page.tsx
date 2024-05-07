"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { uploadResult } from "../page";
import { Button } from "@/components/ui/button";

const page = () => {
  let [pics, setPics] = useState<any>([]);
  return (
    <div className="container mx-auto my-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Gallery</h1>
        <Button asChild>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>

            <CldUploadButton
              onUpload={(result: uploadResult) => {
                setPics([
                  ...pics,
                  <CldImage
                    width="160"
                    height="100"
                    src={result.info.public_id}
                    sizes="100vw"
                    alt="Description of my image"
                  />,
                ]);
              }}
              uploadPreset="hestz1ns"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default page;
