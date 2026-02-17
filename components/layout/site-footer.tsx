import Link from "next/link";
import { CircleHelp, MapPin, Share2 } from "lucide-react";
import { links, siteInfo } from "@/lib/content";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-background/75">
      <div className="section-shell py-14">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="reveal delay-1 space-y-5 md:col-span-2">
            <p>
              <span className="[font-family:var(--font-display)] text-xl font-black tracking-tight text-white">
                {siteInfo.name}
              </span>
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              인천 크라운 볼링센터를 거점으로 활동하는 볼링 동호회 FOCUS입니다.
              스포츠를 통한 소통과 즐거움을 최우선으로 생각합니다.
            </p>
            <div className="flex items-center gap-3">
              <Link href={links.instagram} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/80 text-slate-300 hover:bg-primary hover:text-white" aria-label="인스타그램">
                <Share2 className="h-4 w-4" />
              </Link>
              <Link href={links.openChat} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/80 text-slate-300 hover:bg-primary hover:text-white" aria-label="위치 및 오픈채팅">
                <MapPin className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="reveal delay-2">
            <h3 className="text-sm font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="focus-ring rounded-sm hover:text-primary">
                  클럽 소개
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="focus-ring rounded-sm hover:text-primary">
                  활동 갤러리
                </Link>
              </li>
              <li>
                <Link href="/notices" className="focus-ring rounded-sm hover:text-primary">
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="/join" className="focus-ring rounded-sm hover:text-primary">
                  회원 가입 안내
                </Link>
              </li>
            </ul>
          </div>
          <div className="reveal delay-3">
            <h3 className="text-sm font-bold text-white">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>대한민국 인천광역시 중구 송학동3가 7 (크라운 볼링센터)</li>
              <li>contact@club-focus.kr</li>
              <li>010-1234-5678 (운영진)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-shell flex flex-col items-center gap-4 border-t border-white/10 py-5 sm:flex-row sm:justify-between">
        <p className="text-xs text-slate-500">© {year} FOCUS Bowling Club. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-500">
          <Link href={links.openChat} target="_blank" rel="noreferrer" className="focus-ring rounded-sm hover:text-primary" aria-label="공유 링크">
            <Share2 className="h-4 w-4" />
          </Link>
          <Link href={links.inquiryForm ?? links.openChat} target="_blank" rel="noreferrer" className="focus-ring rounded-sm hover:text-primary" aria-label="도움말 링크">
            <CircleHelp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
