"use client";
import { Button } from "@/components/ui/button";

export type uploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
export default function Home() {
  return (
    <div className="text-center my-28 container mx-auto text-5xl font-bold ">
      <h1 className="">
        "Welcome to Lens <span className="text-[#7effd2]">Legacy</span> where
        every <span className="text-[#7effd2]">image</span>{" "}
        <span className="text-[#7effd2]">holds</span> a story, and every glance
        reveals a moment
        <span className="text-[#7effd2]"> frozen</span> in time."
      </h1>
      <div className="m-12 ">
        <Button className="mx-2">Sign in</Button>
        <Button variant={"ghost"}>Sign up</Button>
      </div>
    </div>
  );
}
