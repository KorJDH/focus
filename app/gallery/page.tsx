import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { getGalleryItems } from "@/lib/gallery";

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <div className="section-shell pt-10">
      <h1 className="text-4xl text-primary">Gallery</h1>
      <p className="mt-2 text-sm text-muted-foreground">FOCUS의 최근 활동 사진입니다.</p>
      <div className="mt-6">
        <GalleryLightbox items={items} />
      </div>
    </div>
  );
}

