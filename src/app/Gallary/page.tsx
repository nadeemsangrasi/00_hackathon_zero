import UploadButton from "./upload-button";
import CloudinaryImage from "./CloudinaryImage";
import cloudinary from "cloudinary";

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
      <div className="flex gap-8 justify-between flex-wrap">
        {result.resources.map((data: any) => (
          <CloudinaryImage
            path="/gallary"
            key={data.public_id}
            data={data}
            height={200}
            width={200}
            alt={"image"}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
