import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 py-8 sm:px-8">
      <section className="flex flex-1 flex-col justify-center">
        <div className="mb-8 inline-flex w-fit rounded-full border border-[#dfd5c6] bg-white/70 px-4 py-2 text-sm text-[#6c675f] shadow-sm">
          12 Archetypes
        </div>
        <div className="rounded-[28px] border border-[#e7dfd2] bg-white/78 p-7 shadow-soft backdrop-blur sm:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#0f766e]">
            Jung Archetype Quiz
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[#191714] sm:text-5xl">
            荣格12原型人格测试
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-[#3f3a34]">
            24个问题，了解你的核心人格原型
          </p>
          <p className="mt-6 text-base leading-7 text-[#6c675f]">
            本测试基于12种常见人格原型设计，结果仅供自我认知与沟通参考。
          </p>
          <Link
            href="/quiz"
            className="mt-9 inline-flex w-full items-center justify-center rounded-2xl bg-[#191714] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#2a261f] sm:w-auto"
          >
            开始测试
          </Link>
        </div>
      </section>
      <footer className="pt-8 text-center text-xs text-[#817a70]">
        无需登录，测试数据仅保存在当前浏览器本地。
      </footer>
    </main>
  );
}
