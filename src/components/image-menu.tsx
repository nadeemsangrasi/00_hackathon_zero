import {
  Menu,
  Pencil,
  Plus,
  PlusCircleIcon,
  PlusSquareIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import { SearchResult } from "@/app/gallary/page";
import { useState } from "react";
import Link from "next/link";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-12 left-3">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <PlusCircleIcon className="hover:border-white w-[28px] h-[28px]  md:w-[32px] lg:h-[32px] hover:cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-42 p-2">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button variant="outline" className="block w-full">
              <Link
                href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
                className="flex gap-2"
              >
                <Pencil className="w-[1.1rem] h-6" />
                Edit
              </Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
