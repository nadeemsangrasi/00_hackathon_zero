"use client";
import React from "react";
import { ImageGrid } from "@/components/image-grid";
import CloudinaryImage from "@/app/gallary/CloudinaryImage";
const AlbumGrid = ({ images }: { images: any[] }) => {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: any) => {
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

export default AlbumGrid;
