import cloudinary from "cloudinary";
import GallaryGrid from "../gallary/gallary-grid";
import { AlbumCard } from "./album-card";
export type Folders = {
  name: string;
  path: string;
};
const AlbumPage = async () => {
  let { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folders[];
  };

  return (
    <div className="container mx-auto my-6 w-full">
      <div className="flex justify-between mb-5">
        <h1 className="text-4xl font-semibold">Albums</h1>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        {folders.map((folder: Folders, index: number) => (
          <AlbumCard key={index} folder={folder} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
