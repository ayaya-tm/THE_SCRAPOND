import React, { useEffect, useState } from "react";
import { RankingList } from "../components/RankingList";

type WordEntry = [string, number];

const Ranking = () => {
  const [ranking, setRanking] = useState<WordEntry[]>([]);

  useEffect(() => {
    fetch("/word_ranking.json")
      .then((res) => res.json())
      .then((data: WordEntry[]) => setRanking(data))
      .catch((err) => console.error("ランキングの読み込み失敗:", err));
  }, []);

  return (
    <div>
      <h1>頻出単語ランキング</h1>
      <RankingList ranking={ranking} />
    </div>
  );
};

export default Ranking;
