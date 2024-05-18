"use client";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  let [pendingPrompt, setPendingPrompt] = useState("");
  let [prompt, setPrompt] = useState("");
  return (
    <div className="container mx-auto my-6">
      <div className="flex gap-4 mb-5 flex-wrap">
        <Button variant={"secondary"} onClick={() => setTransformation("")}>
          Clear All
        </Button>
        <div>
          <Button
            variant={"default"}
            onClick={() => {
              setTransformation("generative-fill");
              setPrompt(pendingPrompt);
            }}
          >
            Generative Fill
          </Button>
          <div className="py-2">
            <Label htmlFor="albumName" className="text-right text-md pl-1 ">
              Prompt
            </Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.target.value)}
              id="albumName"
              className="w-[130px] mt-2"
            />
          </div>
        </div>
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
      <div className="flex gap-12 flex-wrap">
        <div>
          <CldImage
            src={publicId}
            width="340"
            height="180"
            alt="some one image"
          />
        </div>
        {transformation === "generative-fill" && (
          <CldImage
            src={publicId}
            width="500"
            height="300"
            alt="some one image"
            fillBackground={{ prompt: prompt }}
          />
        )}

        {transformation === "blur" && (
          <CldImage
            src={publicId}
            width="500"
            height="300"
            alt="some one image"
            blur={800}
          />
        )}
        {transformation === "grayscale" && (
          <CldImage
            src={publicId}
            width="500"
            height="300"
            alt="some one image"
            grayscale
          />
        )}
        {transformation === "pixelate" && (
          <CldImage
            src={publicId}
            width="500"
            height="300"
            alt="some one image"
            pixelate
          />
        )}
        {transformation === "removeBackground" && (
          <CldImage
            src={publicId}
            width="500"
            height="300"
            alt="some one image"
            removeBackground
          />
        )}
      </div>
    </div>
  );
}
