import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CircleDollarSign,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  aboutHighlights,
  imageAssets,
  links,
  locationInfo,
} from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8">
      <section className="relative aspect-[21/9] overflow-hidden rounded-xl bg-slate-900 p-8 sm:p-12">
        <Image
          src={imageAssets.aboutHero}
          alt="Modern dark bowling alley with glowing blue lights"
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101922] via-[#101922]/40 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end space-y-4">
          <span className="reveal delay-1 inline-flex w-fit rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            About Us
          </span>
          <h1 className="reveal delay-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            FOCUS 볼링 클럽
          </h1>
          <p className="reveal delay-3 max-w-2xl text-lg font-light text-white/80">
            인천 크라운 볼링센터에서 활동하는 볼링 클럽 FOCUS입니다.
            <br className="hidden sm:block" />
            초보부터 고수까지 함께 성장하며 즐거운 볼링 문화를 만들어갑니다.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {aboutHighlights.map((item, index) => {
          const Icon = index === 0 ? ShieldCheck : BookOpen;
          return (
            <article
              key={item.title}
              className={`reveal hover-lift ${index === 0 ? "delay-2" : "delay-3"} rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-primary/50`}
            >
              <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-white/60">
                {item.description}
              </p>
              <Link
                href="/notices"
                className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                {item.linkLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </section>

      <section className="mt-12 space-y-6">
        <div className="reveal delay-1 px-1">
          <h2 className="text-3xl font-bold text-white">찾아오시는 길</h2>
          <p className="mt-1 text-white/50">인천 크라운 볼링센터에서 만나요</p>
        </div>
        <div className="reveal delay-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 lg:grid lg:grid-cols-3">
          <div className="relative h-72 lg:col-span-2 lg:h-auto">
            <iframe
              title="인천 크라운 볼링센터 지도"
              src={`https://maps.google.com/maps?q=${encodeURIComponent("대한민국 인천광역시 중구 송학동3가 7 크라운 볼링센터")}&z=16&output=embed`}
              className="h-full w-full border-0 grayscale-[0.35] contrast-125 brightness-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-5 p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Location
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                인천 크라운 볼링센터
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {locationInfo.address}
              </p>
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-primary" />
                매주 목요일 오후 8시 30분 정기모임 (최소 10분 전 도착)
              </p>
              <p className="flex items-center gap-2">
                <CircleDollarSign className="h-4 w-4 text-primary" />
                월회비 10,000원 · 게임비 19,000원(겜비+사이드)
              </p>
            </div>
            <Link href={locationInfo.mapUrl} target="_blank" rel="noreferrer">
              <Button className="w-full gap-2">
                <MapPin className="h-4 w-4" />
                지도 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t border-white/10 py-12 text-center">
        <h2 className="reveal delay-1 text-2xl font-bold text-white">
          지금 FOCUS의 멤버가 되어보세요
        </h2>
        <div className="reveal delay-2 mt-6 flex flex-wrap justify-center gap-4">
          <Link href={links.app} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className="bg-white px-8 text-[#101922] hover:bg-white/90"
            >
              App Store
            </Button>
          </Link>
          <Link href={links.openChat} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className="bg-white px-8 text-[#101922] hover:bg-white/90"
            >
              Google Play
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
