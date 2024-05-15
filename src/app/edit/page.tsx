"use client";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  const [transformation, setTransformation] = useState<
    | ""
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "removeBackground"
  >("");
  return (
    <div className="container mx-auto my-6">
      <div className="flex gap-4 mb-5">
        <Button variant={"secondary"} onClick={() => setTransformation("")}>
          Clear All
        </Button>
        <Button
          variant={"default"}
          onClick={() => setTransformation("generative-fill")}
        >
          Generative Fill
        </Button>
        <Button variant={"default"} onClick={() => setTransformation("blur")}>
          Blur
        </Button>
        <Button
          variant={"default"}
          onClick={() => setTransformation("grayscale")}
        >
          Gray Scale
        </Button>
        <Button
          variant={"default"}
          onClick={() => setTransformation("pixelate")}
        >
          Pixelate
        </Button>
        <Button
          variant={"default"}
          onClick={() => setTransformation("removeBackground")}
        >
          Remove Background
        </Button>
      </div>
      <div className="grid grid-cols-2 ">
        <CldImage
          src={publicId}
          width="300"
          height="300"
          alt="some one image"
        />
        {transformation === "generative-fill" && (
          <CldImage
            src={publicId}
            width="600"
            height="600"
            alt="some one image"
            fillBackground
          />
        )}

        {transformation === "blur" && (
          <CldImage
            src={publicId}
            width="600"
            height="600"
            alt="some one image"
            blur={800}
          />
        )}
        {transformation === "grayscale" && (
          <CldImage
            src={publicId}
            width="600"
            height="600"
            alt="some one image"
            grayscale
          />
        )}
        {transformation === "pixelate" && (
          <CldImage
            src={publicId}
            width="600"
            height="600"
            alt="some one image"
            pixelate
          />
        )}
        {transformation === "removeBackground" && (
          <CldImage
            src={publicId}
            width="600"
            height="600"
            alt="some one image"
            removeBackground
          />
        )}
      </div>
    </div>
  );
}
