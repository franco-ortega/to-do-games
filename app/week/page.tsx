'use client';

import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import sampleData from '../../data/sample.json';
import { useEffect, useState } from 'react';

type Game = [string, { played: boolean }];

export default function WeekPage() {
  const weekData = sampleData.week as Game[];

  const [data, setData] = useState([] as Game[]);

  console.log('DATA:', data);

  useEffect(() => {
    if (!data.length) setData(weekData);
  }, [data, weekData]);

  // const gamesList: JSX.Element[] = weekData.map((game: Game) => (
  //   <div key={game[0]}>
  //     {game[0]} (played:{' '}
  //     {game[1]['played'] ? <span>yes</span> : <span>no</span>})
  //   </div>
  // ));

  console.log('WEEK', weekData);

  return (
    <main>
      <section>
        <h2>Games to Play This Week</h2>
        {/* {gamesList} */}
      </section>
      <section>
        <GamesToPlay gameData={weekData} />
      </section>
    </main>
  );
}
