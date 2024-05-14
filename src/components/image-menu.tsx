import { Menu, FolderPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ImageMenu() {
  return (
    <div className="absolute right-16 top-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="p-0">
            <Menu className="w-10" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-42">
          <DropdownMenuItem>
            <FolderPlus className="mr-2 h-4 w-4" />
            <span>Add to Album</span>
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
