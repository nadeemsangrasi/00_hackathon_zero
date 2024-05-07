import CloudinaryImage from "./CloudinaryImage";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
type SearchResult = {
  public_id: string;
};
const page = async () => {
  let result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(20)
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
            key={data.public_id}
            src={data.public_id}
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
