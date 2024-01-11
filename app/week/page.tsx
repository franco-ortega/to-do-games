'use client';

import sampleData from '../../data/sample.json';

type Game = [string, { played: boolean }];
type Games = Game[];

export default function WeekPage() {
  // const weekData = sampleData.week;
  const weekData: Game[] = [
    ['Apiary', { played: false }],
    ['Bear Raid', { played: false }],
    ['Castles of Burgandy', { played: false }],
  ];
  console.log('Week DATA', weekData);

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
