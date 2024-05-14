"use server"
import { SearchResult } from '@/app/gallary/page'
import cloudinary from "cloudinary"

export async function addImageToAlbum(image: SearchResult, folder: string) {
    const existingFolder = await cloudinary.v2.api.create_folder(folder)
    let parts = image.public_id.split("/")
    console.log(image.public_id)

    console.log(parts)
    if (parts.length > 1) {
        parts = parts.slice(1)
    }
    console.log(parts)
    const publicId = parts.join("/")
    await cloudinary.v2.uploader.rename(image.public_id, `${folder}/${publicId}`)
}
