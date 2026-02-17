import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BellRing, MapPin, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { links, scheduleEvents, scheduleItems } from "@/lib/content";

export default function SchedulePage() {
  return (
    <div className="mx-auto w-full max-w-[1000px] px-5 py-10 sm:px-8">
      <div className="mb-8 space-y-2">
        <h1 className="reveal delay-1 text-5xl font-black tracking-tight text-white">일정 안내</h1>
        <p className="reveal delay-2 text-lg font-medium text-slate-400">FOCUS 볼링 클럽의 정기전 및 모임 일정입니다.</p>
      </div>

      <section className="reveal delay-3 mb-10 rounded-xl border border-primary/30 bg-primary/10 p-6 shadow-lg shadow-primary/5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <BellRing className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-extrabold text-white">필독 안내</p>
              <p className="text-base font-semibold text-slate-300">정기모임은 매주 목요일 저녁 8시 30분, 최소 10분 전 도착이 원칙입니다.</p>
            </div>
          </div>
          <Link href={links.openChat} target="_blank" rel="noreferrer">
            <Button className="h-12 min-w-[180px] gap-2 text-base font-bold">
              <MessageCircle className="h-5 w-5" />
              오픈채팅 공지 확인
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-center gap-3">
          <span className="h-8 w-1.5 rounded-full bg-primary" />
          <h2 className="text-3xl font-black text-white">정기전 일정</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {scheduleEvents.map((event, index) => (
            <article key={event.id} className={`reveal hover-lift ${index === 0 ? "delay-1" : "delay-2"} overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10`}>
              <div className="relative h-52">
                <Image src={event.image} alt={event.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <span className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider text-white ${index === 0 ? "bg-primary" : "bg-slate-700"}`}>
                  {event.badge}
                </span>
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <p className="mb-1 text-sm font-bold text-primary">{event.title}</p>
                  <p className="text-3xl font-black leading-tight text-white">{event.dayTime}</p>
                </div>
                <div className="space-y-2 text-sm text-slate-400">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {event.capacity}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-bold text-slate-400">{event.status}</span>
                  <Link href={links.openChat} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2">
                    상세 보기
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal delay-3 mt-14 rounded-2xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">궁금한 점이 있으신가요?</h3>
            <p className="mt-2 text-slate-400">클럽 가입 문의 및 기타 상담은 카카오톡 채널을 이용해주세요.</p>
          </div>
          <Link href={links.openChat} target="_blank" rel="noreferrer">
            <Button className="gap-2 bg-yellow-400 text-slate-900 hover:bg-yellow-300 hover:text-slate-900">
              <MessageCircle className="h-4 w-4" />
              카톡 문의하기
            </Button>
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {scheduleItems.map((item, index) => (
          <article key={item.label} className={`reveal hover-lift ${index === 0 ? "delay-1" : index === 1 ? "delay-2" : "delay-3"} rounded-xl border border-white/10 bg-white/5 p-4`}>
            <p className="text-sm font-semibold text-primary">{item.label}</p>
            <p className="mt-2 text-sm text-slate-300">{item.value}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
