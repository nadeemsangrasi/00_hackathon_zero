"use client";
import { Button } from "@/components/ui/button";
import { FolderOpenIcon, Heart, Image, Menu, X } from "lucide-react";
import Link from "next/link";

import { useState, useRef } from "react";

export default function SideMenu() {
  let [clicked, setClicked] = useState(false);
  return (
    <div>
      <div className="md:hidden flex py-7 z-[99]">
        <Menu
          onClick={() => {
            setClicked(!clicked);
          }}
          className="w-8 h-8 mx-2 cursor-pointer"
        />
      </div>
      <div
        className={
          "min-h-full bg-black pb-12 w-[180px] top-0 left-[-100%]  absolute md:static md:bg-none z-50 "
        }
        style={clicked ? { left: "0" } : { left: "-100%" }}
      >
        <span className="md:hidden">
          <X
            onClick={() => setClicked(!clicked)}
            className="w-8 h-8 mx-auto cursor-pointer ml-[80%] mt-[10%]"
          />
        </span>
        <div className="mx-4 space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Manage
            </h2>
            <div className="space-y-1 text-xl">
              <Button variant={"ghost"} className="justify-start gap-2">
                <Image />
                <Link href="/gallary">Gallary</Link>
              </Button>
              <div>
                <Button variant={"ghost"} className="justify-start gap-2">
                  <FolderOpenIcon />
                  <Link href="/albums">Albums</Link>
                </Button>
                {/* <AlbumButtons /> */}
              </div>
              <Button variant={"ghost"} className="justify-start gap-2">
                <Heart />
                <Link href="/favorite">Favorites</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
