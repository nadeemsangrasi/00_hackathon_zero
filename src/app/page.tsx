"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export type uploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
export default function Home() {
  let [pics, setPics] = useState<any>([]);
  return (
    <div className="text-center my-3 ">
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

      {pics}
    </div>
  );
}
