

type WordEntry = [string, number];

export const RankingList = ({ ranking }: { ranking: WordEntry[] }) => (
  <ol>
    {ranking.map(([word, count], index) => (
      <li key={index}>
        {word}（{count}回）
      </li>
    ))}
  </ol>
);
