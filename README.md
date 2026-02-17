# FOCUS Bowling Club Website

정적 홍보 사이트 (Next.js App Router + TypeScript + Tailwind + shadcn/ui 스타일 컴포넌트)

## Stack
- Next.js (App Router, SSG export)
- TypeScript
- Tailwind CSS
- Radix Dialog (라이트박스)

## Local
```bash
npm install
npm run dev
```

## Build for GitHub Pages
```bash
npm run build
```

빌드 결과물은 `out/` 폴더에 생성됩니다.

## Notion CMS (Notices)

브라우저에서는 Notion secret을 사용하지 않고, 빌드 시점에만 서버 측에서 호출합니다.

필수 환경변수:
- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`

옵션 환경변수:
- `NEXT_PUBLIC_APP_LINK`
- `NEXT_PUBLIC_OPENCHAT_LINK`
- `NEXT_PUBLIC_INSTAGRAM_LINK`
- `NEXT_PUBLIC_INQUIRY_FORM_LINK`

Notion 설정이 없으면 `lib/notion.ts`의 mock 공지 데이터로 정적 생성됩니다.

## GitHub Actions Secrets

GitHub Pages 배포 워크플로에서 다음 secrets를 설정하세요:
- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`

## Content Paths
- 링크/사이트 텍스트: `lib/content.ts`
- 갤러리 메타: `content/gallery.json`
- 갤러리 이미지: `public/images/gallery/*`

