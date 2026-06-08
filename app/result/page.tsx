"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getProfile, STORAGE_KEY, type QuizResult } from "@/lib/scoring";
import type { ArchetypeKey } from "@/lib/archetypes";

type ShareState = "idle" | "copied" | "error";

export default function ResultPage() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [shareState, setShareState] = useState<ShareState>("idle");

  useEffect(() => {
    const rawResult = window.localStorage.getItem(STORAGE_KEY);
    if (!rawResult) {
      return;
    }

    try {
      setResult(JSON.parse(rawResult) as QuizResult);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const topProfiles = useMemo(() => {
    if (!result) {
      return [];
    }

    return result.topThree.map((item) => ({
      ...item,
      profile: getProfile(item.archetype)
    }));
  }, [result]);

  async function shareResult() {
    const url = window.location.href;
    const title = "荣格12原型人格测试";
    const text = topProfiles[0]
      ? `我的主人格是${topProfiles[0].profile.chineseName}，来测测你的12原型人格。`
      : "来测测你的荣格12原型人格。";

    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        return;
      }

      await navigator.clipboard.writeText(url);
      setShareState("copied");
    } catch {
      setShareState("error");
    }
  }

  if (!result || topProfiles.length < 3) {
    return (
      <main className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col items-center justify-center px-5 py-10 text-center">
        <div className="rounded-[28px] border border-[#e7dfd2] bg-white/82 p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-[#191714]">还没有测试结果</h1>
          <p className="mt-4 leading-7 text-[#6c675f]">完成24道题后，这里会自动生成你的12原型人格分析。</p>
          <Link
            href="/quiz"
            className="mt-7 inline-flex w-full justify-center rounded-2xl bg-[#191714] px-6 py-4 font-semibold text-white"
          >
            开始测试
          </Link>
        </div>
      </main>
    );
  }

  const [primary, secondary, hidden] = topProfiles;

  return (
    <main className="safe-bottom min-h-dvh bg-[linear-gradient(150deg,#fffdf8_0%,#f5efe5_45%,#e9f5f2_100%)] px-5 py-6">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-6 rounded-[28px] border border-white/70 bg-white/78 p-6 shadow-soft backdrop-blur sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f766e]">Your Result</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#191714] sm:text-4xl">
            你的主人格是：{primary.profile.chineseName}
          </h1>
          <p className="mt-3 text-lg text-[#6c675f]">{primary.profile.englishName}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <ScoreCard label="主人格 Top 1" name={primary.profile.chineseName} score={primary.score} />
            <ScoreCard label="副人格 Top 2" name={secondary.profile.chineseName} score={secondary.score} />
            <ScoreCard label="隐藏人格 Top 3" name={hidden.profile.chineseName} score={hidden.score} />
          </div>
        </header>

        <section className="rounded-[28px] border border-[#e7dfd2] bg-white/86 p-6 shadow-soft sm:p-8">
          <div className="flex flex-wrap gap-2">
            {primary.profile.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-[#e9f5f2] px-3 py-1 text-sm font-medium text-[#0b4f49]"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-7 grid gap-6">
            <AnalysisBlock title="核心特征" text={primary.profile.core} />
            <AnalysisBlock title="优势" text={primary.profile.strengths} />
            <AnalysisBlock title="可能的盲点" text={primary.profile.blindSpots} />
            <AnalysisBlock title="成长建议" text={primary.profile.growthAdvice} />
          </div>
        </section>

        <section className="mt-4 grid gap-4 sm:grid-cols-2">
          <CompactProfile title="副人格简短分析" item={secondary} />
          <CompactProfile title="隐藏人格简短分析" item={hidden} />
        </section>

        <div className="sticky bottom-0 -mx-5 mt-6 border-t border-[#e7dfd2] bg-[#fffdf8]/92 px-5 py-4 backdrop-blur sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3">
            <Link
              href="/quiz"
              className="rounded-2xl border border-[#dfd5c6] bg-white px-5 py-4 text-center font-semibold text-[#3f3a34]"
            >
              重新测试
            </Link>
            <button
              type="button"
              onClick={shareResult}
              className="rounded-2xl bg-[#191714] px-5 py-4 font-semibold text-white"
            >
              分享结果
            </button>
          </div>
          {shareState === "copied" && (
            <p className="mt-3 text-center text-sm text-[#0f766e]">链接已复制</p>
          )}
          {shareState === "error" && (
            <p className="mt-3 text-center text-sm text-[#9b2c2c]">分享失败，请手动复制链接</p>
          )}
        </div>
      </div>
    </main>
  );
}

function ScoreCard({ label, name, score }: { label: string; name: string; score: number }) {
  return (
    <div className="rounded-2xl border border-[#e7dfd2] bg-[#fffdf8] p-4">
      <p className="text-xs font-semibold text-[#817a70]">{label}</p>
      <p className="mt-2 text-xl font-semibold text-[#191714]">{name}</p>
      <p className="mt-1 text-sm text-[#b7791f]">{score} 分</p>
    </div>
  );
}

function AnalysisBlock({ title, text }: { title: string; text: string }) {
  return (
    <article>
      <h2 className="text-lg font-semibold text-[#191714]">{title}</h2>
      <p className="mt-2 text-base leading-8 text-[#5d574f]">{text}</p>
    </article>
  );
}

function CompactProfile({
  title,
  item
}: {
  title: string;
  item: {
    archetype: ArchetypeKey;
    score: number;
    rank: number;
    profile: ReturnType<typeof getProfile>;
  };
}) {
  return (
    <article className="rounded-[24px] border border-[#e7dfd2] bg-white/84 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#b7791f]">{title}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#191714]">
            {item.profile.chineseName}
          </h2>
          <p className="mt-1 text-sm text-[#817a70]">{item.profile.englishName}</p>
        </div>
        <span className="rounded-full bg-[#f0e8dc] px-3 py-1 text-sm font-semibold text-[#5d574f]">
          {item.score} 分
        </span>
      </div>
      <p className="mt-4 text-base leading-7 text-[#5d574f]">{item.profile.core}</p>
      <p className="mt-3 text-sm leading-6 text-[#6c675f]">
        成长提示：{item.profile.growthAdvice}
      </p>
    </article>
  );
}
