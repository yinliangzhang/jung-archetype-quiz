"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ANSWERS_KEY, calculateResult, STORAGE_KEY, type AnswerMap } from "@/lib/scoring";
import { questions } from "@/lib/questions";
import type { ArchetypeKey } from "@/lib/archetypes";

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});

  const currentQuestion = questions[currentIndex];
  const selected = answers[currentQuestion.id];
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);
  const isLastQuestion = currentIndex === questions.length - 1;

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);

  function selectOption(archetype: ArchetypeKey) {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: archetype
    }));
  }

  function goNext() {
    if (!selected) {
      return;
    }

    if (isLastQuestion) {
      const result = calculateResult(answers);
      window.localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      router.push("/result");
      return;
    }

    setCurrentIndex((index) => index + 1);
  }

  function goPrevious() {
    setCurrentIndex((index) => Math.max(0, index - 1));
  }

  return (
    <main className="safe-bottom mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 py-6 sm:px-8">
      <header className="mb-6">
        <div className="mb-3 flex items-center justify-between text-sm text-[#6c675f]">
          <span>第 {currentIndex + 1} / {questions.length} 题</span>
          <span>已答 {answeredCount} 题</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#e7dfd2]">
          <div
            className="h-full rounded-full bg-[#0f766e] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <section className="flex flex-1 flex-col rounded-[28px] border border-[#e7dfd2] bg-white/82 p-5 shadow-soft backdrop-blur sm:p-8">
        <p className="mb-4 text-sm font-semibold text-[#b7791f]">Question {currentQuestion.id}</p>
        <h1 className="text-2xl font-semibold leading-snug text-[#191714] sm:text-3xl">
          {currentQuestion.text}
        </h1>

        <div className="mt-8 grid gap-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selected === option.archetype;

            return (
              <button
                key={`${currentQuestion.id}-${option.archetype}`}
                type="button"
                data-testid="option-button"
                onClick={() => selectOption(option.archetype)}
                className={`flex min-h-16 items-center gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                  isSelected
                    ? "border-[#0f766e] bg-[#e9f5f2] text-[#0b4f49] shadow-sm"
                    : "border-[#e7dfd2] bg-[#fffdf8] text-[#3f3a34] hover:border-[#cbbda8]"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    isSelected ? "bg-[#0f766e] text-white" : "bg-[#f0e8dc] text-[#6c675f]"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-base leading-6">{option.text}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
          <button
            type="button"
            data-testid="previous-button"
            onClick={goPrevious}
            disabled={currentIndex === 0}
            className="rounded-2xl border border-[#dfd5c6] bg-white px-5 py-4 font-semibold text-[#3f3a34] transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            上一题
          </button>
          <button
            type="button"
            data-testid="next-button"
            onClick={goNext}
            disabled={!selected}
            className="rounded-2xl bg-[#191714] px-5 py-4 font-semibold text-white transition hover:bg-[#2a261f] disabled:cursor-not-allowed disabled:bg-[#b7aea2]"
          >
            {isLastQuestion ? "查看结果" : "下一题"}
          </button>
        </div>
      </section>
    </main>
  );
}
