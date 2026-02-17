import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { MarkdownNotice, MarkdownNoticeDetail } from "@/types/notice";

const noticesDir = path.join(process.cwd(), "content", "notices");

async function getNoticeFiles(): Promise<string[]> {
  const entries = await fs.readdir(noticesDir, { withFileTypes: true }).catch(() => []);
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name);
}

function parseNotice(filename: string, fileContent: string): MarkdownNotice {
  const slug = filename.replace(/\.md$/, "");
  const { data } = matter(fileContent);

  return {
    slug,
    title: data.title ?? "제목 없음",
    summary: data.summary ?? "",
    date: data.date instanceof Date
      ? `${data.date.getUTCFullYear()}-${String(data.date.getUTCMonth() + 1).padStart(2, "0")}-${String(data.date.getUTCDate()).padStart(2, "0")}`
      : data.date ? String(data.date).slice(0, 10) : new Date().toISOString().slice(0, 10),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    pinned: Boolean(data.pinned),
    images: Array.isArray(data.images) ? data.images.map(String) : undefined
  };
}

export async function getNotices(): Promise<MarkdownNotice[]> {
  const files = await getNoticeFiles();
  const notices = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(noticesDir, filename);
      const content = await fs.readFile(filePath, "utf-8");
      return parseNotice(filename, content);
    })
  );

  return notices.sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return a.date < b.date ? 1 : -1;
  });
}

export async function getNoticeBySlug(slug: string): Promise<MarkdownNoticeDetail | null> {
  const filePath = path.join(noticesDir, `${slug}.md`);
  let fileContent: string;
  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch {
    return null;
  }

  const { data, content } = matter(fileContent);
  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);
  const contentHtml = processed.toString();

  const notice = parseNotice(`${slug}.md`, fileContent);
  return { ...notice, contentHtml };
}
