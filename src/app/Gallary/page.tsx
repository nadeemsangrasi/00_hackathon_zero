import UploadButton from "./upload-button";
import CloudinaryImage from "./CloudinaryImage";
import cloudinary from "cloudinary";
import { ImageGrid } from "@/components/image-grid";
import GallaryGrid from "./gallary-grid";
export type SearchResult = {
  public_id: string;
  tags: string[];
};
const page = async () => {
  let result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  console.log(result);

  return (
    <div className="container mx-auto my-6">
      <div className="flex justify-between mb-5">
        <h1 className="text-4xl font-semibold">Gallery</h1>
        <UploadButton />
      </div>
      <GallaryGrid images={result.resources} />
    </div>
  );
};

export default page;
