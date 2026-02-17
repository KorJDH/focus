"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navItems, siteInfo } from "@/lib/content";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="header-appear sticky top-0 z-40 border-b border-white/10 bg-background/85 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="focus-ring inline-flex items-center rounded-md">
          <span className="[font-family:var(--font-display)] text-xl font-black tracking-tight text-white">
            {siteInfo.name}
          </span>
        </Link>
        <nav aria-label="주 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-7 text-base">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "focus-ring rounded-md py-1 text-base font-semibold text-slate-300 transition-colors hover:text-primary",
                      active && "text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/join"
            className={cn(
              buttonVariants({ size: "default" }),
              "hidden h-10 text-sm font-bold sm:inline-flex"
            )}
          >
            가입문의
          </Link>
          <button type="button" className="focus-ring inline-flex rounded-md p-1 text-slate-300 md:hidden" aria-label="모바일 메뉴">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="section-shell pb-2 md:hidden">
        <nav aria-label="모바일 메뉴">
          <ul className="scrollbar-none flex items-center gap-1 overflow-x-auto pb-1 text-sm">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={`m-${item.href}`} className="shrink-0">
                  <Link
                    href={item.href}
                    className={cn(
                      "focus-ring rounded-md px-2 py-1.5 text-slate-400 transition-colors hover:text-white",
                      active && "bg-secondary/80 text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
