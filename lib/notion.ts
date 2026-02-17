import { NoticeBlock, NoticeDetail, NoticeItem } from "@/types/notion";

const NOTION_VERSION = "2022-06-28";
const notionToken = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const mockNotices: NoticeDetail[] = [
  {
    id: "mock-1",
    slug: "focus-welcome",
    title: "FOCUS 신규 멤버 안내",
    summary: "신규 멤버를 위한 첫 방문 체크리스트와 기본 운영 방식을 안내합니다.",
    date: "2026-02-01",
    tags: ["안내", "신규"],
    notionUrl: "https://www.notion.so/",
    blocks: [
      { id: "b1", type: "paragraph", text: "FOCUS에 오신 것을 환영합니다." },
      { id: "b2", type: "bulleted_list_item", text: "운동화 또는 볼링화 착용을 권장합니다." },
      { id: "b3", type: "bulleted_list_item", text: "정기모임은 매주 목요일 저녁 8시 30분에 진행됩니다." }
    ]
  },
  {
    id: "mock-2",
    slug: "focus-february-notice",
    title: "2월 운영 공지",
    summary: "2월 정기 연습 일정과 장소 안내입니다.",
    date: "2026-01-28",
    tags: ["일정"],
    notionUrl: "https://www.notion.so/",
    blocks: [{ id: "b4", type: "paragraph", text: "2월에도 인천 크라운 볼링센터에서 모임을 진행합니다." }]
  }
];

function hasNotionConfig() {
  return Boolean(notionToken && notionDatabaseId);
}

function notionHeaders() {
  return {
    Authorization: `Bearer ${notionToken}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json"
  };
}

async function notionFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      ...notionHeaders(),
      ...(init?.headers ?? {})
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Notion API error ${response.status}: ${await response.text()}`);
  }

  return (await response.json()) as T;
}

function plainText(richText: any[] | undefined): string {
  if (!richText?.length) return "";
  return richText.map((t) => t.plain_text ?? "").join("");
}

function extractTitle(properties: Record<string, any>): string {
  for (const value of Object.values(properties)) {
    if (value?.type === "title") return plainText(value.title);
  }
  return "제목 없음";
}

function extractDate(properties: Record<string, any>): string {
  for (const value of Object.values(properties)) {
    if (value?.type === "date" && value.date?.start) return value.date.start;
  }
  return new Date().toISOString().slice(0, 10);
}

function extractSummary(properties: Record<string, any>): string {
  for (const value of Object.values(properties)) {
    if (value?.type === "rich_text") {
      const text = plainText(value.rich_text);
      if (text) return text;
    }
  }
  return "공지 내용을 확인해 주세요.";
}

function extractSlug(properties: Record<string, any>, id: string): string {
  if (properties.slug?.type === "rich_text") {
    const fromRichText = plainText(properties.slug.rich_text);
    if (fromRichText) return fromRichText;
  }
  if (properties.Slug?.type === "rich_text") {
    const fromRichText = plainText(properties.Slug.rich_text);
    if (fromRichText) return fromRichText;
  }
  const title = extractTitle(properties);
  const normalized = title
    .toLowerCase()
    .replace(/[^\w가-힣\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return normalized || id.replace(/-/g, "");
}

function extractTags(properties: Record<string, any>): string[] {
  for (const value of Object.values(properties)) {
    if (value?.type === "multi_select") {
      return value.multi_select.map((tag: { name: string }) => tag.name);
    }
  }
  return [];
}

function mapNoticeItem(page: any): NoticeItem {
  const properties = page.properties ?? {};
  return {
    id: page.id,
    slug: extractSlug(properties, page.id),
    title: extractTitle(properties),
    summary: extractSummary(properties),
    date: extractDate(properties),
    tags: extractTags(properties),
    notionUrl: page.url
  };
}

function mapBlock(block: any): NoticeBlock | null {
  const type = block.type;
  const value = block[type];
  const text = plainText(value?.rich_text);
  if (!text) return null;

  if (
    type === "paragraph" ||
    type === "heading_2" ||
    type === "heading_3" ||
    type === "bulleted_list_item" ||
    type === "numbered_list_item" ||
    type === "quote" ||
    type === "code"
  ) {
    return {
      id: block.id,
      type,
      text
    } as NoticeBlock;
  }
  return null;
}

async function fetchNotionNotices(): Promise<NoticeItem[]> {
  type QueryResponse = { results: any[] };
  const data = await notionFetch<QueryResponse>(`https://api.notion.com/v1/databases/${notionDatabaseId}/query`, {
    method: "POST",
    body: JSON.stringify({
      page_size: 50
    })
  });

  return data.results
    .map(mapNoticeItem)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

async function fetchNotionBlocks(pageId: string): Promise<NoticeBlock[]> {
  type BlockResponse = { results: any[] };
  const data = await notionFetch<BlockResponse>(`https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`);
  return data.results.map(mapBlock).filter((item): item is NoticeBlock => item !== null);
}

export async function getNotices(): Promise<NoticeItem[]> {
  if (!hasNotionConfig()) {
    return mockNotices
      .map(({ blocks, ...item }) => item)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }
  return fetchNotionNotices();
}

export async function getNoticeBySlug(slug: string): Promise<NoticeDetail | null> {
  if (!hasNotionConfig()) {
    return mockNotices.find((notice) => notice.slug === slug) ?? null;
  }

  const notices = await fetchNotionNotices();
  const notice = notices.find((item) => item.slug === slug);
  if (!notice) return null;

  const blocks = await fetchNotionBlocks(notice.id);
  return { ...notice, blocks };
}
