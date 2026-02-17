export interface MarkdownNotice {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  pinned: boolean;
  images?: string[];
}

export interface MarkdownNoticeDetail extends MarkdownNotice {
  contentHtml: string;
}
