"use client";

import Link from "next/link";
import QRCode from "qrcode";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  CONTACT_STORAGE_KEY,
  getProfile,
  STORAGE_KEY,
  type QuizResult
} from "@/lib/scoring";
import type { ArchetypeKey } from "@/lib/archetypes";

type PosterState = "idle" | "ready" | "error";
const SHARE_PARAM = "result";
const NETLIFY_FORM_NAME = "quiz-leads";

type ContactInfo = {
  nickname: string;
  phone: string;
  submittedAt: string;
};

export default function ResultPage() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [contact, setContact] = useState<ContactInfo | null>(null);
  const [isSharedResult, setIsSharedResult] = useState(false);
  const [posterState, setPosterState] = useState<PosterState>("idle");
  const [posterUrl, setPosterUrl] = useState("");

  useEffect(() => {
    const sharedPayload = new URLSearchParams(window.location.search).get(SHARE_PARAM);
    if (sharedPayload) {
      const sharedResult = decodeShareResult(sharedPayload);
      if (sharedResult) {
        setResult(sharedResult);
        setIsSharedResult(true);
        return;
      }
    }

    const rawResult = window.localStorage.getItem(STORAGE_KEY);
    const rawContact = window.localStorage.getItem(CONTACT_STORAGE_KEY);
    if (!rawResult) {
      return;
    }

    try {
      setResult(JSON.parse(rawResult) as QuizResult);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    if (rawContact) {
      try {
        setContact(JSON.parse(rawContact) as ContactInfo);
      } catch {
        window.localStorage.removeItem(CONTACT_STORAGE_KEY);
      }
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

  async function generatePoster() {
    if (!result) {
      return;
    }

    try {
      const nextPosterUrl = await createPosterDataUrl({
        primary,
        secondary,
        hidden,
        qrUrl: new URL("/quiz", window.location.origin).toString()
      });
      setPosterUrl(nextPosterUrl);
      setPosterState("ready");
      downloadPoster(nextPosterUrl, primary.profile.chineseName);
    } catch {
      setPosterState("error");
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

  if (!contact && !isSharedResult) {
    return (
      <LeadCaptureGate
        result={result}
        onSubmit={(nextContact) => {
          window.localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(nextContact));
          setContact(nextContact);
        }}
      />
    );
  }

  return (
    <main className="safe-bottom min-h-dvh bg-[linear-gradient(150deg,#fffdf8_0%,#f5efe5_45%,#e9f5f2_100%)] px-5 py-6">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-6 rounded-[28px] border border-white/70 bg-white/78 p-6 shadow-soft backdrop-blur sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f766e]">
            {isSharedResult ? "Shared Result" : "Your Result"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#191714] sm:text-4xl">
            你的主人格是：{primary.profile.chineseName}
          </h1>
          <p className="mt-3 text-lg text-[#6c675f]">{primary.profile.englishName}</p>
          {isSharedResult && (
            <p className="mt-4 rounded-2xl bg-[#e9f5f2] px-4 py-3 text-sm leading-6 text-[#0b4f49]">
              这是好友分享给你的测试结果。你也可以点击下方“重新测试”，生成自己的结果。
            </p>
          )}

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
              onClick={generatePoster}
              className="rounded-2xl bg-[#191714] px-5 py-4 font-semibold text-white"
            >
              生成结果海报
            </button>
          </div>
          {posterState === "ready" && (
            <p className="mt-3 text-center text-sm text-[#0f766e]">
              海报已生成。如手机没有自动保存，可长按下方海报保存。
            </p>
          )}
          {posterState === "error" && (
            <p className="mt-3 text-center text-sm text-[#9b2c2c]">海报生成失败，请稍后再试</p>
          )}
          {posterUrl && (
            <div className="mt-4 rounded-[24px] border border-[#e7dfd2] bg-white p-3 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={posterUrl}
                alt="人格测试结果海报"
                className="w-full rounded-[18px] border border-[#f0e8dc]"
              />
              <a
                href={posterUrl}
                download={`荣格12原型人格测试-${primary.profile.chineseName}.jpg`}
                className="mt-3 flex w-full justify-center rounded-2xl border border-[#dfd5c6] bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-[#3f3a34]"
              >
                下载海报
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function createPosterDataUrl({
  primary,
  secondary,
  hidden,
  qrUrl
}: {
  primary: ResultProfile;
  secondary: ResultProfile;
  hidden: ResultProfile;
  qrUrl: string;
}) {
  const canvas = document.createElement("canvas");
  const width = 1080;
  const height = 1600;
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Canvas is not supported");
  }

  const background = context.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, "#ecf7f2");
  background.addColorStop(0.48, "#fffdf8");
  background.addColorStop(1, "#f8ebe2");
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);

  drawPosterCard(context, 70, 80, 940, 1440, 46);

  context.fillStyle = "#0f766e";
  context.font = "700 40px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText("J U N G   A R C H E T Y P E", 120, 170);

  context.fillStyle = "#191714";
  context.font = "700 72px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText("荣格12原型人格测试", 120, 270);

  context.fillStyle = "#6c675f";
  context.font = "400 34px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText("我的核心人格原型是", 120, 350);

  context.fillStyle = "#191714";
  context.font = "800 118px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText(primary.profile.chineseName, 120, 500);

  context.fillStyle = "#b7791f";
  context.font = "700 44px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText(`${primary.profile.englishName} · ${primary.score}分`, 124, 575);

  drawScorePill(context, "副人格", secondary.profile.chineseName, secondary.score, 120, 650);
  drawScorePill(context, "隐藏人格", hidden.profile.chineseName, hidden.score, 560, 650);

  context.fillStyle = "#0b4f49";
  context.font = "700 34px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText("关键词", 120, 830);
  drawKeywords(context, primary.profile.keywords, 120, 870);

  context.fillStyle = "#191714";
  context.font = "700 38px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText("人格解读", 120, 1040);

  context.fillStyle = "#5d574f";
  context.font = "400 34px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  drawWrappedText(context, primary.profile.core, 120, 1100, 840, 54, 5);

  context.fillStyle = "#191714";
  context.font = "700 32px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText("扫码生成你的专属人格报告", 120, 1360);

  context.fillStyle = "#817a70";
  context.font = "400 28px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  drawWrappedText(context, "24个问题，了解你的核心人格原型", 120, 1410, 540, 40, 2);

  context.fillStyle = "#0f766e";
  context.font = "700 26px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText("荣格12原型人格测试", 120, 1495);

  drawQrCode(context, qrUrl, 760, 1320, 180);

  return canvas.toDataURL("image/jpeg", 0.92);
}

function downloadPoster(dataUrl: string, primaryName: string) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `荣格12原型人格测试-${primaryName}.jpg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

type ResultProfile = {
  archetype: ArchetypeKey;
  score: number;
  rank: number;
  profile: ReturnType<typeof getProfile>;
};

function drawPosterCard(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  context.save();
  context.shadowColor = "rgba(23, 23, 23, 0.12)";
  context.shadowBlur = 44;
  context.shadowOffsetY = 22;
  roundedRect(context, x, y, width, height, radius);
  context.fillStyle = "rgba(255, 253, 248, 0.92)";
  context.fill();
  context.shadowColor = "transparent";
  context.strokeStyle = "#e7dfd2";
  context.lineWidth = 2;
  context.stroke();
  context.restore();
}

function drawScorePill(
  context: CanvasRenderingContext2D,
  label: string,
  name: string,
  score: number,
  x: number,
  y: number
) {
  roundedRect(context, x, y, 390, 120, 28);
  context.fillStyle = "#fffdf8";
  context.fill();
  context.strokeStyle = "#e7dfd2";
  context.lineWidth = 2;
  context.stroke();

  context.fillStyle = "#817a70";
  context.font = "700 26px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText(label, x + 28, y + 44);

  context.fillStyle = "#191714";
  context.font = "700 42px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  context.fillText(`${name} ${score}分`, x + 28, y + 92);
}

function drawKeywords(
  context: CanvasRenderingContext2D,
  keywords: string[],
  startX: number,
  startY: number
) {
  let x = startX;
  let y = startY;

  keywords.forEach((keyword) => {
    context.font = "700 30px Arial, PingFang SC, Microsoft YaHei, sans-serif";
    const pillWidth = context.measureText(keyword).width + 56;
    if (x + pillWidth > 960) {
      x = startX;
      y += 74;
    }

    roundedRect(context, x, y, pillWidth, 54, 27);
    context.fillStyle = "#e9f5f2";
    context.fill();
    context.fillStyle = "#0b4f49";
    context.fillText(keyword, x + 28, y + 37);
    x += pillWidth + 18;
  });
}

function drawWrappedText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number
) {
  let line = "";
  let lines = 0;

  for (const char of text) {
    const testLine = line + char;
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(lines === maxLines - 1 ? `${line}...` : line, x, y);
      lines += 1;
      if (lines >= maxLines) {
        return;
      }
      line = char;
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  if (line && lines < maxLines) {
    context.fillText(line, x, y);
  }
}

function drawQrCode(
  context: CanvasRenderingContext2D,
  value: string,
  x: number,
  y: number,
  size: number
) {
  const qr = QRCode.create(value, {
    errorCorrectionLevel: "M"
  });
  const moduleCount = qr.modules.size;
  const moduleSize = size / moduleCount;

  roundedRect(context, x - 18, y - 18, size + 36, size + 36, 24);
  context.fillStyle = "#ffffff";
  context.fill();
  context.strokeStyle = "#e7dfd2";
  context.lineWidth = 2;
  context.stroke();

  context.fillStyle = "#191714";
  for (let row = 0; row < moduleCount; row += 1) {
    for (let column = 0; column < moduleCount; column += 1) {
      if (qr.modules.get(column, row)) {
        context.fillRect(
          x + column * moduleSize,
          y + row * moduleSize,
          Math.ceil(moduleSize),
          Math.ceil(moduleSize)
        );
      }
    }
  }
}

function roundedRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function decodeShareResult(payload: string): QuizResult | null {
  try {
    const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
    const paddedPayload = normalizedPayload.padEnd(
      normalizedPayload.length + ((4 - (normalizedPayload.length % 4)) % 4),
      "="
    );
    const parsed = JSON.parse(decodeURIComponent(window.atob(paddedPayload))) as {
      result?: QuizResult;
    };

    if (!parsed.result?.topThree || parsed.result.topThree.length < 3) {
      return null;
    }

    return parsed.result;
  } catch {
    return null;
  }
}

function LeadCaptureGate({
  result,
  onSubmit
}: {
  result: QuizResult;
  onSubmit: (contact: ContactInfo) => void;
}) {
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedNickname = nickname.trim();
    const normalizedPhone = phone.trim();

    if (normalizedNickname.length < 1) {
      setError("请输入昵称");
      return;
    }

    if (!/^1[3-9]\d{9}$/.test(normalizedPhone)) {
      setError("请输入正确的11位手机号");
      return;
    }

    const nextContact = {
      nickname: normalizedNickname,
      phone: normalizedPhone,
      submittedAt: new Date().toISOString()
    };

    setIsSubmitting(true);
    try {
      await submitLeadToNetlify(nextContact, result);
    } catch (error) {
      console.warn("Lead submission failed. The contact is saved locally only.", error);
    } finally {
      setIsSubmitting(false);
      onSubmit(nextContact);
    }
  }

  return (
    <main className="safe-bottom mx-auto flex min-h-dvh w-full max-w-2xl flex-col justify-center px-5 py-8">
      <section className="rounded-[28px] border border-[#e7dfd2] bg-white/86 p-7 shadow-soft backdrop-blur sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f766e]">
          Result Ready
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#191714]">
          测试完成，领取你的完整人格报告
        </h1>
        <p className="mt-4 text-base leading-7 text-[#6c675f]">
          填写昵称和手机号后，即可查看主人格、副人格、隐藏人格以及详细分析。
        </p>

        <form className="mt-7" onSubmit={submitContact}>
          <label className="block">
            <span className="text-sm font-semibold text-[#3f3a34]">昵称</span>
            <input
              value={nickname}
              onChange={(event) => {
                setNickname(event.target.value);
                setError("");
              }}
              placeholder="请输入昵称"
              className="mt-2 w-full rounded-2xl border border-[#dfd5c6] bg-[#fffdf8] px-4 py-4 text-base text-[#191714] outline-none transition placeholder:text-[#b7aea2] focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-[#3f3a34]">手机号</span>
            <input
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                setError("");
              }}
              inputMode="tel"
              placeholder="请输入手机号"
              className="mt-2 w-full rounded-2xl border border-[#dfd5c6] bg-[#fffdf8] px-4 py-4 text-base text-[#191714] outline-none transition placeholder:text-[#b7aea2] focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
            />
          </label>

          {error && <p className="mt-3 text-sm text-[#9b2c2c]">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-2xl bg-[#191714] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#2a261f] disabled:cursor-not-allowed disabled:bg-[#b7aea2]"
          >
            {isSubmitting ? "正在生成报告..." : "查看完整结果"}
          </button>
        </form>

      </section>
    </main>
  );
}

async function submitLeadToNetlify(contact: ContactInfo, result: QuizResult) {
  const response = await fetch("/api/submit-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contact,
      result
    })
  });

  if (!response.ok) {
    await submitLeadToNetlifyForms(contact, result);
  }
}

async function submitLeadToNetlifyForms(contact: ContactInfo, result: QuizResult) {
  const [primary, secondary, hidden] = result.topThree;
  const formData = new URLSearchParams({
    "form-name": NETLIFY_FORM_NAME,
    nickname: contact.nickname,
    phone: contact.phone,
    visitor_ip: "",
    visitor_country: "",
    visitor_region: "",
    visitor_city: "",
    primary_archetype: `${getProfile(primary.archetype).chineseName} / ${primary.archetype} / ${primary.score}分`,
    secondary_archetype: `${getProfile(secondary.archetype).chineseName} / ${secondary.archetype} / ${secondary.score}分`,
    hidden_archetype: `${getProfile(hidden.archetype).chineseName} / ${hidden.archetype} / ${hidden.score}分`,
    scores: JSON.stringify(result.scores),
    completed_at: result.completedAt,
    submitted_at: contact.submittedAt,
    page_url: window.location.href,
    "bot-field": ""
  });

  const response = await fetch("/__forms.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  });

  if (!response.ok) {
    throw new Error(`Netlify form submission failed: ${response.status}`);
  }
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
