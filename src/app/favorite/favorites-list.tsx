"use client";
import CloudinaryImage from "@/app/gallary/CloudinaryImage";
import { SearchResult } from "./page";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/image-grid";

const FavoriteList = ({
  initialResources,
}: {
  initialResources: SearchResult[];
}) => {
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);
  const MAX_COLUMNS = 4;
  function getColumns(colIndex: number) {
    return resources.filter(
      (resource: any, idx: any) => idx % MAX_COLUMNS === colIndex
    );
  }

  return (
    <section>
      <div className="container mx-auto my-6 p-8 px-16">
        <ImageGrid
          images={resources}
          getImage={(imageData: SearchResult) => {
            return (
              <CloudinaryImage
                key={imageData.public_id}
                imageData={imageData}
                height={200}
                width={200}
                alt={"image"}
                onUnheart={(unheartedResource) => {
                  setResources((currentResource) =>
                    currentResource.filter(
                      (resource) =>
                        resource.public_id !== unheartedResource.public_id
                    )
                  );
                }}
              />
            );
          }}
        />
      </div>
    </section>
  );
};

export default FavoriteList;
