import Image from "next/image";
import Link from "next/link";
import { GalleryItem } from "@/types/content";
import { Button } from "@/components/ui/button";

interface GalleryPreviewProps {
  items: GalleryItem[];
}

export function GalleryPreview({ items }: GalleryPreviewProps) {
  const delayClasses = ["delay-1", "delay-2", "delay-3", "delay-4", "delay-5", "delay-6"];

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="reveal delay-1">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">GALLERY</h2>
            <p className="mt-2 text-sm text-slate-400">FOCUS 클럽의 활기찬 활동 모습들을 확인하세요.</p>
          </div>
          <Link href="/gallery" className="reveal delay-2">
            <Button variant="ghost" className="gap-2 text-primary">
              Gallery 더보기
              <span aria-hidden="true">→</span>
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.src}
              className={`reveal hover-lift ${delayClasses[index % delayClasses.length]} group relative aspect-square overflow-hidden rounded-xl bg-slate-800`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={720}
                height={720}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
