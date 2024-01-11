'use client';

import sampleData from '../../data/sample.json';

export default function WeekPage() {
  const weekData = sampleData.week;
  console.log('Week DATA', weekData);

  return (
    <main>
      <h2>Games to Play This Week</h2>
      {weekData.map((game: [string, { played: boolean }][]) => (
        <div key={game[0]}>
          {game[0]} (played:{' '}
          {game[0]['played'] ? <span>yes</span> : <span>no</span>})
        </div>
      ))}
    </main>
  );
}
