import { useEffect, useState } from "react";

type WordEntry = [string, number];

const Ranking = () => {
  const [ranking, setRanking] = useState<WordEntry[]>([]);

  useEffect(() => {
    fetch("/rankings/word_ranking.json")
      .then((res) => res.json())
      .then((data: WordEntry[]) => setRanking(data))
      .catch((err) => console.error("ランキングの読み込み失敗:", err));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-red-800 flex flex-col items-center justify-start p-6 pt-20 overflow-hidden">

      {/* 🎆 背景光源 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[700px] h-[700px] bg-yellow-400 opacity-20 blur-xl rounded-full animate-pulse-slow left-[-100px] top-[-150px]" />
        <div className="absolute w-[600px] h-[600px] bg-red-300 opacity-15 blur-2xl rounded-full animate-pulse-slower right-[-120px] bottom-[-150px]" />
      </div>

      {/* 🏆 ランキングボード */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-yellow-500 text-yellow-300 p-10 md:p-12 rounded-2xl shadow-2xl max-w-4xl w-full space-y-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-center uppercase tracking-wide">
          頻出単語ランキング
        </h1>

        <div className="grid grid-cols-1 divide-y divide-yellow-500/30">
          {ranking.length === 0 ? (
            <p className="text-center text-stone-200 py-8">
              読み込み中…
            </p>
          ) : (
            ranking.map(([word, count], i) => (
              <div
                key={word}
                className="flex justify-between items-center py-4 px-2 text-stone-100 text-lg"
              >
                <div className="flex items-center gap-4">
                  <span className="text-yellow-400 font-bold text-2xl w-8 text-right">
                    {i + 1}
                  </span>
                  <span className="font-medium">{word}</span>
                </div>
                <span className="text-sm text-yellow-200">
                  {count.toLocaleString()} 件
                </span>
              </div>
            ))
          )}
        </div>

        <div className="pt-6 text-center">
          <a
            href="/"
            className="inline-block bg-yellow-400 text-red-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-yellow-300 transition-transform duration-200"
          >
            ← 戻る
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
