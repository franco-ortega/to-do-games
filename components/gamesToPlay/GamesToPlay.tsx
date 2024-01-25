'use client';

import { useEffect, useState } from 'react';
import { Game, GamesToPlay, TimeSpanOptions } from '../../utils/types';
import GamesList from '../gamesList/GamesList';
import { getGames } from '@/utils/localStorage';

type Props = {
  timeSpan: TimeSpanOptions;
};

export default function GamesToPlay({ timeSpan }: Props): JSX.Element {
  const [gameStuff, setGameStuff] = useState([] as Game[]);

  useEffect(() => {
    const currentGames = getGames('GAMES_TO_PLAY');
    const time = timeSpan.toLowerCase() as TimeSpanOptions;
    const gameInfo = currentGames[time] ? currentGames[time] : [];
    setGameStuff(gameInfo);
  }, [timeSpan]);

  return (
    <main>
      <h2>Games To Play This {timeSpan}</h2>
      <GamesList gamesList={gameStuff} />
    </main>
  );
}
