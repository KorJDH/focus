"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/types/content";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const current = useMemo(() => items[index], [items, index]);

  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % items.length);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            className="focus-ring relative overflow-hidden rounded-xl border border-border bg-card"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            <Image src={item.src} alt={item.alt} width={640} height={440} className="h-40 w-full object-cover sm:h-52" />
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-3 sm:p-4">
          <div className="relative overflow-hidden rounded-lg">
            <Image src={current.src} alt={current.alt} width={1200} height={800} className="h-[58vh] w-full object-cover" />
          </div>
          <div className="flex items-center justify-between gap-3">
            <Button variant="outline" onClick={prev} aria-label="이전 이미지">
              <ChevronLeft className="mr-1 h-4 w-4" />
              이전
            </Button>
            <p className="text-sm text-muted-foreground">
              {index + 1} / {items.length}
              {current.caption ? ` · ${current.caption}` : ""}
            </p>
            <Button variant="outline" onClick={next} aria-label="다음 이미지">
              다음
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
