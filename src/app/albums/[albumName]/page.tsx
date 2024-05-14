import cloudinary from "cloudinary";
import AlbumGrid from "./album-grid";
import { ForceRefresh } from "@/components/force-refresh";

export type SearchResult = {
  public_id: string;
  tags: string[];
};
const page = async ({
  params: { albumName },
}: {
  params: { albumName: string };
}) => {
  let result = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <div className="container mx-auto my-6">
      <ForceRefresh />
      <div className="flex justify-between mb-5">
        <h1 className="text-4xl font-semibold">Albums {albumName}</h1>
      </div>
      <AlbumGrid images={result.resources} />
    </div>
  );
};

export default page;
