import fs from "node:fs/promises";
import path from "node:path";
import galleryMeta from "@/content/gallery.json";
import { GalleryItem } from "@/types/content";

const galleryDir = path.join(process.cwd(), "public", "images", "gallery");

export async function getGalleryItems(limit?: number): Promise<GalleryItem[]> {
  const entries = await fs.readdir(galleryDir, { withFileTypes: true }).catch(() => []);
  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => /\.(png|jpe?g|webp|svg)$/i.test(name))
    .sort();

  const mapped = files.map((filename) => {
    const meta = galleryMeta.find((item) => item.filename === filename);
    const label = meta?.caption ?? filename.replace(/\.[^.]+$/, "");
    return {
      src: `/images/gallery/${filename}`,
      alt: meta?.alt ?? `FOCUS gallery image ${label}`,
      caption: meta?.caption
    };
  });

  if (typeof limit === "number") return mapped.slice(0, limit);
  return mapped;
}

