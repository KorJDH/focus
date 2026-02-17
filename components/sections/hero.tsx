import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Megaphone, UserPlus } from "lucide-react";
import { imageAssets, siteInfo } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden px-4 sm:min-h-[62vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageAssets.homeHero}
          alt="Modern atmospheric bowling alley lanes with blue lighting"
          fill
          sizes="100vw"
          priority
          className="hero-image-animate object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101922]/60 via-[#101922]/80 to-[#101922]" />
      </div>
      <div className="relative z-20 mx-auto w-full max-w-4xl space-y-8 text-center">
        <span className="reveal delay-1 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
          Since 2025 • Incheon
        </span>
        <h1 className="reveal delay-2 text-6xl font-black tracking-tight text-white drop-shadow-2xl sm:text-8xl lg:text-9xl">
          {siteInfo.name}
        </h1>
        <div className="reveal delay-3 space-y-3">
          <h2 className="text-xl font-bold text-white/90 sm:text-3xl">
            {siteInfo.locationName}
          </h2>
          <p className="text-base font-medium text-slate-300 sm:text-xl">
            초보환영 · 실력향상 • 즐거운 볼링 라이프
          </p>
        </div>
        <div className="reveal delay-4 flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <Link href="/join" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="group h-14 w-full min-w-[180px] gap-2 text-base font-bold will-change-transform transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-[0_18px_42px_rgba(37,140,244,0.45)] sm:w-auto"
            >
              <UserPlus className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              가입/문의
            </Button>
          </Link>
          <Link href="/notices" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="h-14 w-full min-w-[180px] gap-2 border-white/30 bg-white/10 text-base font-bold text-white hover:bg-white/20 sm:w-auto"
            >
              <Megaphone className="h-5 w-5" />
              공지 보기
            </Button>
          </Link>
        </div>
      </div>
      <Link
        href="#home-features"
        className="reveal delay-6 focus-ring absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce rounded-full p-1 text-white/50 transition-colors hover:text-white"
        aria-label="우리 클럽의 특징으로 이동"
      >
        <ChevronDown className="h-8 w-8" />
      </Link>
    </section>
  );
}
