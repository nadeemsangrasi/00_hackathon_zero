import CloudinaryImage from "@/app/gallary/CloudinaryImage";
import UploadButton from "@/app/gallary/upload-button";
import { ForceRefresh } from "@/components/force-refresh";
import cloudinary from "cloudinary";
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
  console.log(result);

  return (
    <section>
      <ForceRefresh />
      <div className="container mx-auto my-6">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl font-semibold">Favorites</h1>
          <UploadButton />
        </div>
        <div className="flex gap-8 justify-between flex-wrap">
          {result.resources.map((data: any) => (
            <CloudinaryImage
              path="/favorite"
              key={data.public_id}
              data={data}
              height={200}
              width={200}
              alt={"image"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default favoritePage;
