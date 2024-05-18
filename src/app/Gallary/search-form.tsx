"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm({
  initialSearch,
}: {
  initialSearch: string;
}) {
  let router = useRouter();
  let [imageName, setImageName] = useState("");
  useEffect(() => {
    setImageName(initialSearch);
  }, [initialSearch]);

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallary?search=${encodeURIComponent(imageName)}`);
        router.refresh();
      }}
      className="mb-4"
    >
      <Label
        htmlFor="albumName"
        className="text-right pb-2 text-semibold text-md md:text-lg"
      >
        Search by tag and folder name
      </Label>
      <div className="flex gap-2">
        <Input
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          id="albumName"
          className="w-full"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
