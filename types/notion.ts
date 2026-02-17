export interface NoticeItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  notionUrl?: string;
}

export type NoticeBlock =
  | { id: string; type: "paragraph"; text: string }
  | { id: string; type: "heading_2"; text: string }
  | { id: string; type: "heading_3"; text: string }
  | { id: string; type: "bulleted_list_item"; text: string }
  | { id: string; type: "numbered_list_item"; text: string }
  | { id: string; type: "quote"; text: string }
  | { id: string; type: "code"; text: string };

export interface NoticeDetail extends NoticeItem {
  blocks: NoticeBlock[];
}

