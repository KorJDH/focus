import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getNoticeBySlug, getNotices } from "@/lib/notion";

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
      <h1 className="text-4xl text-primary">{notice.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{formatDate(notice.date)}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {notice.tags.map((tag) => (
          <Badge key={`${notice.id}-${tag}`} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="mt-8 space-y-4">
        {notice.blocks.map((block) => {
          if (block.type === "heading_2") return <h2 key={block.id} className="text-2xl">{block.text}</h2>;
          if (block.type === "heading_3") return <h3 key={block.id} className="text-xl">{block.text}</h3>;
          if (block.type === "bulleted_list_item") return <p key={block.id} className="pl-2 text-sm text-muted-foreground">• {block.text}</p>;
          if (block.type === "numbered_list_item") return <p key={block.id} className="pl-2 text-sm text-muted-foreground">- {block.text}</p>;
          if (block.type === "quote") return <blockquote key={block.id} className="border-l-2 border-primary pl-3 text-sm text-muted-foreground">{block.text}</blockquote>;
          if (block.type === "code") return <pre key={block.id} className="overflow-x-auto rounded-md bg-secondary p-3 text-sm"><code>{block.text}</code></pre>;
          return <p key={block.id} className="text-sm leading-relaxed text-muted-foreground">{block.text}</p>;
        })}
      </div>
      {notice.notionUrl ? (
        <div className="mt-8">
          <Link href={notice.notionUrl} target="_blank" rel="noreferrer">
            <Button variant="outline">Notion 원문 보기</Button>
          </Link>
        </div>
      ) : null}
    </article>
  );
}

