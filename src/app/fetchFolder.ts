// cloudinaryHelper.ts
import cloudinary from "cloudinary";
import { Folders } from "./albums/page";

export async function fetchCloudinaryFolders(): Promise<Folders[]> {
    const { folders } = await cloudinary.v2.api.root_folders() as { folders: Folders[] };
    return folders;
}
