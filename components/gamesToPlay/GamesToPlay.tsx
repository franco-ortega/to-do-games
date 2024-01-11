'use client';

import { useEffect, useState } from 'react';

type Game = [string, { played: boolean }];

type Props = { gameData: [string, { played: boolean }][] };

const GamesToPlay = (gameData: Props): JSX.Element => {
  console.log('GAME DATA:', gameData);
  const [games, setGames] = useState([] as Game[]);

  useEffect(() => {
    if (!games.length) setGames(gameData.gameData);
  }, [gameData, games]);

  // console.log('GAMES:', games.gameData);

  const gamesList: JSX.Element[] = games.map((game: Game) => (
    <div key={game[0]}>
      {game[0]} (played:{' '}
      {game[1]['played'] ? <span>yes</span> : <span>no</span>})
    </div>
  ));

  console.log('GAMES LIST', gamesList);

  return (
    <main>
      <h2>Games To Play</h2>
      {gamesList}
    </main>
  );
};

export default GamesToPlay;
