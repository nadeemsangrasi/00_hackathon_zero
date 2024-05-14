import CloudinaryImage from "@/app/gallary/CloudinaryImage";
import UploadButton from "@/app/gallary/upload-button";
import { ForceRefresh } from "@/components/force-refresh";
import cloudinary from "cloudinary";
import FavoriteList from "./favorites-list";
export type SearchResult = {
  public_id: string;
  tags: string[];
};
const favoritePage = async () => {
  let result = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <FavoriteList initialResources={result.resources} />
    </section>
  );
};

export default favoritePage;
