"use client";
import { Heart, FileHeart } from "lucide-react";
import { CldImage } from "next-cloudinary";
import React, { useTransition } from "react";
import { SearchResult } from "@/app/gallary/page";
import setAsFavoriteAction from "./action";

const CloudinaryImage = (props: any & SearchResult) => {
  const [transition, setTransition] = useTransition();
  const isFavorite = props.data.tags.includes("favorite");
  return (
    <div className="relative">
      {isFavorite ? (
        <Heart
          color="red"
          fill="red"
          className="absolute right-2 top-2 hover:text-red-500 cursor-pointer"
          width={33}
          height={33}
          onClick={() =>
            setTransition(() => {
              setAsFavoriteAction(props.data.public_id, isFavorite, props.path);
            })
          }
        />
      ) : (
        <Heart
          className="absolute right-2 top-2 hover:text-red-500 cursor-pointer"
          width={33}
          height={33}
          onClick={() =>
            setTransition(() => {
              setAsFavoriteAction(props.data.public_id, isFavorite, props.path);
            })
          }
        />
      )}
      <CldImage {...props} src={props.data.public_id} />
    </div>
  );
};

export default CloudinaryImage;
