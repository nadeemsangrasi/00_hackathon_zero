"use client";
import React from "react";
import { SearchResult } from "./page";
import { ImageGrid } from "@/components/image-grid";
import CloudinaryImage from "./CloudinaryImage";
const GallaryGrid = ({ images }: { images: SearchResult[] }) => {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            height={200}
            width={200}
            alt={"image"}
          />
        );
      }}
    />
  );
};

export default GallaryGrid;
