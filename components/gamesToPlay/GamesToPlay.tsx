import { useEffect, useState } from 'react';

type Game = [string, { played: boolean }];

type Props = {
  gameData: Game[];
  time: string;
};

export default function GamesToPlay({ gameData, time }: Props): JSX.Element {
  const gamesList: JSX.Element[] = gameData.map((game: Game) => (
    <div key={game[0]}>
      {game[0]} (played:{' '}
      {game[1]['played'] ? <span>yes</span> : <span>no</span>})
    </div>
  ));

  return (
    <main>
      <h2>Games To Play This {time}</h2>
      {gamesList}
    </main>
  );
}
