'use client';

import sampleData from '../../data/sample.json';

type Game = [string, { played: boolean }];

export default function WeekPage() {
  const weekData = sampleData.week as Game[];

  const gamesList: JSX.Element[] = weekData.map((game: Game) => (
    <div key={game[0]}>
      {game[0]} (played:{' '}
      {game[1]['played'] ? <span>yes</span> : <span>no</span>})
    </div>
  ));

  return (
    <main>
      <h2>Games to Play This Week</h2>
      {gamesList}
    </main>
  );
}
