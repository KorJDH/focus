import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getNotices } from "@/lib/notion";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default async function NoticesPage() {
  const notices = await getNotices();

  return (
    <div className="section-shell pt-10">
      <h1 className="text-4xl text-primary">Notices</h1>
      <p className="mt-2 text-sm text-muted-foreground">Notion Database 기반 공지 목록입니다.</p>
      <div className="mt-6 grid gap-4">
        {notices.map((notice) => (
          <Card key={notice.id} className="transition-colors hover:border-primary/70">
            <CardHeader>
              <Link href={`/notices/${notice.slug}`} className="focus-ring rounded-sm">
                <CardTitle className="text-2xl">{notice.title}</CardTitle>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-muted-foreground">{formatDate(notice.date)}</p>
              <p className="text-sm text-muted-foreground">{notice.summary}</p>
              <div className="flex flex-wrap gap-2">
                {notice.tags.map((tag) => (
                  <Badge key={`${notice.id}-${tag}`} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

