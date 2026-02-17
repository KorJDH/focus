import Link from "next/link";
import { Button } from "@/components/ui/button";

export function JoinBanner() {
  return (
    <section className="section-shell py-16">
      <div className="reveal delay-1 relative overflow-hidden rounded-3xl border border-primary/35 bg-gradient-to-r from-[#2b6dad] to-[#245c91] p-8 text-center text-white sm:p-12">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/6 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/6 blur-3xl" />
        <h2 className="reveal delay-2 relative z-10 text-3xl font-black tracking-tight sm:text-5xl">
          지금 바로 FOCUS의 멤버가 되세요!
        </h2>
        <p className="reveal delay-3 relative z-10 mt-3 text-lg text-white/85"></p>
        <div className="reveal delay-4 relative z-10 mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/join">
            <Button
              variant="outline"
              className="h-12 border-white bg-white px-7 text-base font-black text-primary transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_14px_26px_rgba(9,29,54,0.28)]"
            >
              가입 문의하기
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              className="h-12 border-white/40 bg-white/20 px-7 text-base font-bold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-[0_14px_26px_rgba(9,29,54,0.24)]"
            >
              오시는 길 안내
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
