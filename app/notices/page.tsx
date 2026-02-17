import Link from "next/link";
import { Pin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getNotices } from "@/lib/notices";

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
      <p className="mt-2 text-sm text-muted-foreground">FOCUS 볼링 클럽 공지사항입니다.</p>
      <div className="mt-6 grid gap-4">
        {notices.map((notice) => (
          <Card
            key={notice.slug}
            className={`transition-colors hover:border-primary/70 ${
              notice.pinned ? "border-primary/50 bg-primary/5" : ""
            }`}
          >
            <CardHeader>
              <Link href={`/notices/${notice.slug}`} className="focus-ring rounded-sm">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  {notice.pinned && <Pin className="h-4 w-4 shrink-0 text-primary" />}
                  {notice.title}
                </CardTitle>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-muted-foreground">{formatDate(notice.date)}</p>
              {notice.summary && (
                <p className="text-sm text-muted-foreground">{notice.summary}</p>
              )}
              {notice.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {notice.tags.map((tag) => (
                    <Badge key={`${notice.slug}-${tag}`} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
