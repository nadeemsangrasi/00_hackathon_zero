import UploadButton from "./upload-button";

import cloudinary from "cloudinary";

import GallaryGrid from "./gallary-grid";
import SearchForm from "./search-form";
import { Folders } from "../albums/page";
export type SearchResult = {
  public_id: string;
  tags: string[];
};
const page = async ({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) => {
  let result;
  let { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folders[];
  };
  let names: string[] = [];
  folders.forEach((folder: Folders) => names.push(folder.name));
  if (names.includes(search)) {
    result = (await cloudinary.v2.search
      .expression(`resource_type:image ${search ? `AND folder=${search}` : ""}`)
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(30)
      .execute()) as { resources: SearchResult[] };
  } else {
    result = (await cloudinary.v2.search
      .expression(`resource_type:image ${search ? `AND tags=${search}` : ""}`)
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(30)
      .execute()) as { resources: SearchResult[] };
  }

  return (
    <div className=" mx-2 md:container md:mx-auto my-6">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl md:text-4xl font-semibold">Gallery</h1>
        <UploadButton />
      </div>
      <div>
        <SearchForm initialSearch={search} />
        <GallaryGrid images={result.resources} />
      </div>
    </div>
  );
};

export default page;
