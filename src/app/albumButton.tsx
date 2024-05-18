import cloudinary from "cloudinary";
import { Folders } from "./albums/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const AlbumButtons = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folders[];
  };
  return (
    <div className="ml-6">
      {folders.map((folder: Folders) => (
        <Button variant={"ghost"} className="w-full justify-start gap-2">
          <Link href={`/albums/${folder.path}`}>{folder.name}</Link>
        </Button>
      ))}
    </div>
  );
};

export default AlbumButtons;
