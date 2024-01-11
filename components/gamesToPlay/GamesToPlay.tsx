'use client';

import { ReactNode, useEffect, useState } from 'react';

type Game = [string, { played: boolean }];

type Props = {
  gameData: [string, { played: boolean }][];
  title: { title: string };
};

const GamesToPlay = (gameData: Props): JSX.Element => {
  const [games, setGames] = useState([] as Game[]);

  useEffect(() => {
    if (!games.length) setGames(gameData.gameData);
  }, [gameData, games]);

  const gamesList: JSX.Element[] = games.map((game: Game) => (
    <div key={game[0]}>
      {game[0]} (played:{' '}
      {game[1]['played'] ? <span>yes</span> : <span>no</span>})
    </div>
  ));

  return (
    <main>
      <h2>Games To Play This {gameData.title.toString()}</h2>
      {gamesList}
    </main>
  );
};

export default GamesToPlay;
