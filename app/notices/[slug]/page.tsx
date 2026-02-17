import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Pin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getNoticeBySlug, getNotices } from "@/lib/notices";

export const dynamicParams = false;

export async function generateStaticParams() {
  const notices = await getNotices();
  return notices.map((notice) => ({ slug: notice.slug }));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const notice = await getNoticeBySlug(slug);

  if (!notice) notFound();

  return (
    <article className="section-shell pt-10">
      <div className="flex items-center gap-2">
        {notice.pinned && <Pin className="h-4 w-4 shrink-0 text-primary" />}
        <h1 className="text-4xl text-primary">{notice.title}</h1>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{formatDate(notice.date)}</p>
      {notice.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {notice.tags.map((tag) => (
            <Badge key={`${notice.slug}-${tag}`} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <div
        className="notice-content mt-8"
        dangerouslySetInnerHTML={{ __html: notice.contentHtml }}
      />
      {notice.images && notice.images.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {notice.images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-md">
              <Image
                src={src}
                alt={`${notice.title} 이미지 ${i + 1}`}
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
      <div className="mt-8">
        <Link href="/notices" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
          ← 공지 목록으로
        </Link>
      </div>
    </article>
  );
}
