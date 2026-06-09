import { archetypeOrder, archetypeProfiles, type ArchetypeKey } from "./archetypes";
import { questions } from "./questions";

export type AnswerMap = Record<number, ArchetypeKey>;

export type RankedArchetype = {
  archetype: ArchetypeKey;
  score: number;
  rank: number;
};

export type QuizResult = {
  scores: Record<ArchetypeKey, number>;
  ranked: RankedArchetype[];
  topThree: RankedArchetype[];
  completedAt: string;
};

export const STORAGE_KEY = "jung-archetype-quiz-result";
export const ANSWERS_KEY = "jung-archetype-quiz-answers";
export const CONTACT_STORAGE_KEY = "jung-archetype-quiz-contact";

export function createEmptyScores(): Record<ArchetypeKey, number> {
  return archetypeOrder.reduce(
    (scores, archetype) => ({
      ...scores,
      [archetype]: 0
    }),
    {} as Record<ArchetypeKey, number>
  );
}

export function calculateResult(answers: AnswerMap): QuizResult {
  const scores = createEmptyScores();

  questions.forEach((question) => {
    const selected = answers[question.id];
    if (selected) {
      scores[selected] += 2;
    }
  });

  const ranked = archetypeOrder
    .map((archetype, index) => ({ archetype, score: scores[archetype], index }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.index - b.index;
    })
    .map(({ archetype, score }, index) => ({
      archetype,
      score,
      rank: index + 1
    }));

  return {
    scores,
    ranked,
    topThree: ranked.slice(0, 3),
    completedAt: new Date().toISOString()
  };
}

export function getProfile(archetype: ArchetypeKey) {
  return archetypeProfiles[archetype];
}
