'use client';

import { useEffect, useState } from 'react';
import { Game, TimeSpan, TimeSpanPathOptions } from '../../utils/types';
import { getGames } from '@/utils/localStorage';
import GamesList from '../gamesList/GamesList';
import styles from './GamesToPlay.module.scss';

type Props = {
  timeSpan: TimeSpan;
};

export default function GamesToPlay({
  timeSpan: { path, title },
}: Props): JSX.Element {
  const [gameStuff, setGameStuff] = useState([] as Game[]);
  console.log(path);

  useEffect(() => {
    const games = getGames('GAMES_TO_PLAY');
    const gamesByTimeSpan = games[path] ? games[path] : [];
    setGameStuff(gamesByTimeSpan);
  }, [path]);

  return (
    <main className={styles.GamesToPlay}>
      <h2>Games To Play This {title}</h2>
      <GamesList gamesList={gameStuff} timeSpan={path} />
    </main>
  );
}
