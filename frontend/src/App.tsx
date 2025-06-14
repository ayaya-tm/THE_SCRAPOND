// src/App.tsx
import React, { useEffect, useState } from "react";
import { RankingList } from "./components/RankingList";

type WordEntry = [string, number];

function App() {
  const [ranking, setRanking] = useState<WordEntry[]>([]);

  useEffect(() => {
    fetch("/word_ranking.json")
      .then((res) => res.json())
      .then((data) => setRanking(data));
  }, []);

  return (
    <div>
      <h1>THE SECOND ツイート頻出語ランキング</h1>
      <RankingList ranking={ranking} />
    </div>
  );
}

export default App;
