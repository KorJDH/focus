import { featureItems } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Target, CircleDollarSign, Users } from "lucide-react";

const featureIcons = [Sparkles, Target, CircleDollarSign, Users];
const delayClasses = ["delay-2", "delay-3", "delay-4", "delay-5"];

export function FeatureCards() {
  return (
    <section id="home-features" className="scroll-mt-24 bg-background/50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="reveal delay-1 mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">우리 클럽의 특징</h2>
          <p className="mt-3 text-base text-slate-400">운영 체계와 다양한 구질 멤버의 노하우를 함께 경험할 수 있습니다.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item, index) => {
            const Icon = featureIcons[index % featureIcons.length] ?? Sparkles;
            const delayClass = delayClasses[index % delayClasses.length] ?? "delay-4";
            return (
              <Card
                key={item.title}
                className={`reveal hover-lift ${delayClass} border-white/10 bg-white/5 transition-colors hover:border-primary/50 hover:bg-white/[0.07]`}
              >
                <CardHeader>
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
