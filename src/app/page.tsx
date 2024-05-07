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
  return (
    <div className="text-center my-3 ">
      {/* <CldUploadButton
        onUpload={(result: uploadResult) => {
        
        }}
        uploadPreset="hestz1ns"
      /> */}
    </div>
  );
}
