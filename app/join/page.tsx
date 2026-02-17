import Link from "next/link";
import { CheckCircle2, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { links, locationInfo } from "@/lib/content";

const quickInfo = [
  {
    title: "상주볼링장",
    value: `인천 크라운 볼링센터 (${locationInfo.address})`,
    description:
      "정기모임은 매주 목요일 저녁 8시 30분이며, 원활한 진행을 위해 최소 10분 전 도착이 원칙입니다.",
    icon: MapPin,
  },
];

const messageTips = [
  "볼링 경력(입문/중급/상급)",
  "장비 보유 여부(개인 볼/볼링화/아대 등)",
  "정기모임(목요일 저녁 8시 30분) 참여 가능 여부",
];

const faqItems = [
  {
    q: "정기모임 참석 기준이 있나요?",
    a: "정기전은 월 1회 이상 참석이 필수이며, 이유 없이 1달 이상 불참 시 강퇴될 수 있습니다.",
  },
  {
    q: "연령/장비 조건이 있나요?",
    a: "01년생~79년생 기준이며, 장비 소유자 또는 구매 예정자를 모집합니다.",
  },
  {
    q: "단톡방/공지 확인 규칙이 있나요?",
    a: "정기전 및 벙 1회 참석 시 단톡방 초대되며, 운영진 공지에는 참여·불참 모두 댓글/체크가 필수입니다.",
  },
];

export default function JoinPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-5xl px-5 pb-24 pt-10 sm:px-8">
        <section className="reveal delay-1 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/18 via-primary/10 to-white/5 p-6 sm:p-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Join & Contact
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            FOCUS 가입/문의
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-300">
            가입 문의는 카카오톡 오픈채팅으로 받고 있습니다. 운영진이 순서대로
            확인하며, 클럽 가입 기준과 활동 안내를 전달드립니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={links.openChat} target="_blank" rel="noreferrer">
              <Button className="h-12 gap-2 px-6 text-sm font-bold">
                <MessageCircle className="h-4 w-4" />
                오픈채팅으로 문의하기
              </Button>
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            문의 채널: 카카오톡 오픈채팅
          </p>
        </section>

        <section className="mt-8 grid gap-4">
          {quickInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className={`reveal ${index === 0 ? "delay-1" : "delay-2"} border-white/10 bg-white/5`}
              >
                <CardHeader>
                  <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-xl text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-primary">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <Card className="reveal delay-1 border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                이렇게 보내주시면 더 빨라요
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {messageTips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {tip}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg border border-primary/25 bg-primary/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  추천 문의 템플릿
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  안녕하세요. 볼링 경력은 1년이며 개인 볼/볼링화를 보유하고
                  있습니다. 정기모임(목요일 저녁 8시 30분) 참여 가능 여부와 가입
                  절차 안내 부탁드립니다.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="reveal delay-2 border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="inline-flex items-center gap-2 text-2xl text-white">
                <ShieldCheck className="h-5 w-5 text-primary" />
                가입 기준 안내
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-300">
              <p>
                볼링에 열정이 있고 즐겁게 칠 마음이 되어있는 분을 모집합니다.
              </p>
              <p>
                정기전 월 1회 이상 참석 필수, 이유 없이 1달 이상 불참 시
                강퇴됩니다.
              </p>
              <p>
                01년생~79년생 기준이며, 지인 소개의 경우 나이 제한은 별도
                협의합니다.
              </p>
              <p>장비 소유자 또는 구매 예정자만 가입 가능합니다.</p>
              <p>
                가입 후 한 달 이내 정기전 또는 벙 미참여 시 강퇴될 수 있습니다.
              </p>
              <p>가입 후 클럽티 구매가 필수입니다.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-10">
          <h2 className="reveal delay-1 text-3xl font-black tracking-tight text-white">
            자주 묻는 질문
          </h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((item, index) => (
              <details
                key={item.q}
                className={`reveal ${index === 0 ? "delay-1" : index === 1 ? "delay-2" : index === 2 ? "delay-3" : "delay-4"} group rounded-xl border border-white/10 bg-white/5 p-4`}
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:content-none">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="reveal delay-2 mt-10 rounded-2xl border border-primary/25 bg-primary/10 p-6 text-center">
          <p className="text-sm text-slate-300">
            가입 문의는 아래 카카오톡 오픈채팅 버튼으로 편하게 남겨주세요.
          </p>
          <div className="mt-4 flex justify-center">
            <Link href={links.openChat} target="_blank" rel="noreferrer">
              <Button className="h-11 gap-2 px-6 text-sm font-bold">
                <MessageCircle className="h-4 w-4" />
                오픈채팅으로 문의하기
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden">
        <Link
          href={links.openChat}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <Button className="h-12 w-full gap-2 text-sm font-bold shadow-[0_14px_28px_rgba(5,16,33,0.45)]">
            <MessageCircle className="h-4 w-4" />
            오픈채팅 바로 문의하기
          </Button>
        </Link>
      </div>
    </>
  );
}
