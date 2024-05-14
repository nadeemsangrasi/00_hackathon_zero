"use server";
import cloudinary from "cloudinary";

export default async function setAsFavoriteAction(
  public_id: string,
  isFavorite: boolean
) {
  if (isFavorite) {
    await cloudinary.v2.uploader.remove_tag("favorite", [public_id]);
  } else {
    await cloudinary.v2.uploader.add_tag("favorite", [public_id]);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
