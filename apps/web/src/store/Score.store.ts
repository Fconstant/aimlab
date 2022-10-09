import { atom, useAtom } from "jotai";

export const ScoreAtom = atom(0);

export const useScore = () => {
  const [score, setScore] = useAtom(ScoreAtom);

  return {
    score,
    add: () => setScore((s) => s + 1),
    reset: () => setScore(0),
  };
};
