"use client";
import { Heart, FileHeart } from "lucide-react";
import { CldImage, CldImageProps } from "next-cloudinary";
import React, { useState, useTransition } from "react";
import { SearchResult } from "@/app/gallary/page";
import setAsFavoriteAction from "./action";
import { ImageMenu } from "@/components/image-menu";

const CloudinaryImage = (
  props: {
    imageData: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) => {
  const [transition, setTransition] = useTransition();
  let { imageData, onUnheart } = props;
  let [isFavorite, setIsFavorite] = useState(
    imageData.tags.includes("favorite")
  );
  return (
    <div className="relative">
      {isFavorite ? (
        <Heart
          color="red"
          fill="red"
          className="absolute left-3 top-3 hover:text-red-500 cursor-pointer"
          width={33}
          height={33}
          onClick={() => {
            onUnheart?.(imageData);
            setIsFavorite(false);
            setTransition(() => {
              setAsFavoriteAction(imageData.public_id, isFavorite);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute left-3 top-3 hover:text-red-500 cursor-pointer"
          width={33}
          height={33}
          onClick={() => {
            setIsFavorite(true);
            setTransition(() => {
              setAsFavoriteAction(imageData.public_id, isFavorite);
            });
          }}
        />
      )}
      <ImageMenu />
      <CldImage {...props} src={imageData.public_id} />
    </div>
  );
};

export default CloudinaryImage;
